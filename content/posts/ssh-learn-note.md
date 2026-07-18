---
title: "SSH The Definitive Guide"
date: 2026-07-18
tags: ["SSH", "Networking", "Linux", "Infrastructure", "Security", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive SSH reference covering key management, tunneling, ProxyJump, reverse tunnels, Cloudflare Tunnel, and real-world infrastructure."
---

## 1. Core Concepts

### 1.1 What is SSH

SSH (Secure Shell) is a cryptographic network protocol for operating network services securely over an untrusted network. It replaces insecure remote-access protocols like Telnet and rlogin.

| Property | Detail |
|---|---|
| Default port | TCP 22 |
| Architecture | Client-Server |
| Standard protocol | RFC 4251–4254 |
| Primary implementations | OpenSSH (dominant), Dropbear, libssh |

The protocol provides three guarantees:
- **Confidentiality**: All traffic is encrypted (symmetric encryption after key exchange).
- **Integrity**: Data cannot be tampered with in transit (HMAC).
- **Authentication**: The server and optionally the client prove their identities.

```bash
# Basic connection
ssh user@host

# Specify a non-default port
ssh -p 2222 user@host

# Use a specific private key
ssh -i ~/.ssh/my_key user@host

# Verbose mode for debugging
ssh -v user@host          # level 1
ssh -vv user@host         # level 2
ssh -vvv user@host        # level 3 (most detail)
```

> Port 22 is the IANA-assigned default. `-v`/`-vv`/`-vvv` are indispensable for diagnosing authentication failures.

### 1.2 The Client-Server Model

```
[SSH Client]  ----TCP/22---->  [SSH Server (sshd)]
   (ssh)                           (sshd daemon)
```

- **sshd**: The daemon listening on the server. Reads `/etc/ssh/sshd_config` for server-wide policy.
- **ssh**: The client binary. Reads `~/.ssh/config` and `/etc/ssh/ssh_config` for client-side behavior.

### 1.3 Authentication Methods

```bash
# 1. Password authentication (discouraged for production)
ssh user@host              # prompts for password

# 2. Public key authentication (industry standard)
ssh -i ~/.ssh/my_key user@host

# 3. Keyboard-interactive (pluggable, used by 2FA/PAM)
ssh -o PreferredAuthentications=keyboard-interactive user@host
```

> Public-key authentication is the gold standard. Passwords are susceptible to brute-force and credential stuffing. Disable password auth on production servers with `PasswordAuthentication no` in `sshd_config`.

---

## 2. Key Management

### 2.1 Key Types

```bash
# Ed25519 (RECOMMENDED: fast, compact, modern, high security margin)
ssh-keygen -t ed25519 -f ~/.ssh/my_key -C "comment"

# Ed25519-SK (FIDO/U2F hardware token-backed)
ssh-keygen -t ed25519-sk -f ~/.ssh/my_sk_key

# RSA 4096 (legacy fallback; slower key exchange, larger keys)
ssh-keygen -t rsa -b 4096 -f ~/.ssh/my_rsa_key

# ECDSA (elliptic curve; decent but NIST curves have trust concerns)
ssh-keygen -t ecdsa -b 521 -f ~/.ssh/my_ecdsa_key
```

> Always prefer Ed25519. RSA is only needed for compatibility with ancient servers. ECDSA is acceptable but Ed25519 is strictly better.

### 2.2 Key Generation in Detail

```bash
# Full invocation with all common options
ssh-keygen -t ed25519 -f ~/.ssh/lab_server_key -C "wuguojia-lab-2026" -N ""

# -t        Key type (ed25519, rsa, ecdsa, ed25519-sk)
# -f        Output file path (private key); public key gets .pub appended
# -C        Comment appended to the public key (identifies the key)
# -N        Passphrase ("" = empty, for automation; otherwise interactive prompt)
# -b        Bit length (only relevant for RSA; 4096 is standard)
# -a        Rounds of KDF for passphrase-protected keys (higher = slower to crack)
```

```bash
# Adding/removing/changing a passphrase on an existing key
ssh-keygen -p -f ~/.ssh/my_key          # prompts to change passphrase
ssh-keygen -p -f ~/.ssh/my_key -N ""    # remove passphrase
ssh-keygen -p -f ~/.ssh/my_key -P old -N new
```

> A passphrase adds a second factor (something you know) to the key file (something you have). Use it whenever feasible. For automated scripts (cron jobs, tunnel daemons), passphrase-less keys are an accepted trade-off.

### 2.3 The "One Key Per Source" Principle

```
                    ┌─────────────┐
    Machine A ----> │  Key_A.pub  │
                    │─────────────│
    Machine B ----> │  Key_B.pub  │  Server C (authorized_keys)
                    │─────────────│
    Machine C ----> │  Key_C.pub  │
                    └─────────────┘
```

```bash
# CORRECT: each client generates its own key
# On Machine A:
ssh-keygen -t ed25519 -f ~/.ssh/key_from_A
# On Machine B:
ssh-keygen -t ed25519 -f ~/.ssh/key_from_B

# Both public keys are added to Server C's authorized_keys:
cat key_from_A.pub >> ~/.ssh/authorized_keys   # on Server C
cat key_from_B.pub >> ~/.ssh/authorized_keys   # on Server C
```

> Never copy a private key between machines. If Machine A is compromised, revoking only Key_A leaves Machine B unaffected. Sharing a private key means a single compromise cascades everywhere.

### 2.4 Copying Public Keys to the Server

```bash
# Method 1: ssh-copy-id (standard, idempotent, handles permissions)
ssh-copy-id -i ~/.ssh/my_key.pub user@remote_host

# Method 2: Manual pipe (when ssh-copy-id is unavailable)
cat ~/.ssh/my_key.pub | ssh user@remote_host "cat >> ~/.ssh/authorized_keys"

# Method 3: scp + manual append
scp ~/.ssh/my_key.pub user@remote_host:/tmp/temp_key.pub
ssh user@remote_host "cat /tmp/temp_key.pub >> ~/.ssh/authorized_keys && rm /tmp/temp_key.pub"
```

> `ssh-copy-id` is the canonical tool. It ensures the remote `.ssh` directory and `authorized_keys` file have correct permissions (700 and 600 respectively).

---

## 3. Critical Files and Directories

### 3.1 Overview

```
~/.ssh/
├── authorized_keys       # Server-side: whitelist of permitted public keys
├── known_hosts            # Client-side: fingerprint registry of known servers
├── config                 # Client-side: connection aliases and options
├── id_ed25519             # Private key (default name)
├── id_ed25519.pub         # Public key (default name)
├── my_custom_key          # Custom-named private key
└── my_custom_key.pub      # Corresponding public key
```

> Strict permissions are non-negotiable. SSH will silently ignore keys and config files if permissions are too loose.

### 3.2 Permissions Table

| File/Directory | Permission | Octal | Command |
|---|---|---|---|
| `~/.ssh/` | `drwx------` | 700 | `chmod 700 ~/.ssh` |
| `authorized_keys` | `-rw-------` | 600 | `chmod 600 ~/.ssh/authorized_keys` |
| Private key (any) | `-rw-------` | 600 | `chmod 600 ~/.ssh/my_key` |
| Public key (any) | `-rw-r--r--` | 644 | `chmod 644 ~/.ssh/my_key.pub` |
| `known_hosts` | `-rw-r--r--` | 644 | `chmod 644 ~/.ssh/known_hosts` |
| `config` | `-rw-r--r--` | 644 | `chmod 644 ~/.ssh/config` |

```bash
# Quick fix-all
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519 ~/.ssh/authorized_keys 2>/dev/null
chmod 644 ~/.ssh/id_ed25519.pub ~/.ssh/known_hosts ~/.ssh/config 2>/dev/null
```

> The SSH daemon (sshd) enforces that `authorized_keys` and the `.ssh` directory are not group/other-writable. If they are, key authentication fails with no clear error—always check permissions first when troubleshooting.

### 3.3 `authorized_keys` (Server-Side)

- **Purpose**: The server's access control list. Each line is one authorized public key.
- **Location**: `~/.ssh/authorized_keys` (per-user). System-wide: `/etc/ssh/authorized_keys`.

```bash
# Basic entry
ssh-ed25519 AAAAC3NzaC1lZD... comment

# Entry with restrictions (force a specific command, disable port forwarding)
command="/usr/local/bin/backup.sh",no-port-forwarding,no-agent-forwarding ssh-ed25519 AAAAC3NzaC1lZD... backup-only-key

# Entry restricted by source IP
from="192.168.1.0/24,10.0.0.5" ssh-ed25519 AAAAC3NzaC1lZD... restricted-by-ip
```

> `authorized_keys` can enforce fine-grained restrictions per key: limit the command, disable port forwarding, restrict source IPs. This is especially useful for automation/CI keys.

### 3.4 `known_hosts` (Client-Side)

- **Purpose**: Trust-on-first-use (TOFU) registry. On first connection, the server's host key fingerprint is recorded. On subsequent connections, SSH verifies the server presents the same key.

```bash
# Remove a specific host entry (e.g., after server reinstall)
ssh-keygen -R hostname_or_ip
ssh-keygen -R 192.168.1.10

# Hashing known_hosts (prevents an attacker who reads the file from
# enumerating which servers you connect to)
ssh-keygen -H -f ~/.ssh/known_hosts
```

> Never ignore the "HOST IDENTIFICATION HAS CHANGED" warning without investigation. It genuinely protects against MITM attacks. After a legitimate server rebuild, use `ssh-keygen -R` to remove the old entry.

### 3.5 Private Key (Client-Side)

- **Purpose**: Cryptographic proof of identity. Must never leave the client machine.
- **Required permission**: 600 (owner read/write only).

```bash
# Inspect key metadata without revealing private material
ssh-keygen -l -f ~/.ssh/my_key       # fingerprint and bit length

# Convert key formats (e.g., OpenSSH <-> PEM for older tools)
ssh-keygen -p -m PEM -f ~/.ssh/my_key        # convert to PEM
```

### 3.6 Public Key (Client-Side)

- **Purpose**: Distributed to servers to grant access. Safe to share.
- **Format**: One line: `type base64data comment`.

```bash
# View fingerprint (SHA256)
ssh-keygen -lf ~/.ssh/my_key.pub

# Extract public key from private key
ssh-keygen -y -f ~/.ssh/my_key > ~/.ssh/my_key.pub
```

### 3.7 `config` File

- **Purpose**: Client-side connection definitions. Enables shorthand aliases, per-host key selection, and multistep routing.
- **Location**: `~/.ssh/config` (user) and `/etc/ssh/ssh_config` (system-wide).
- **Precedence**: Command-line flags > `~/.ssh/config` > `/etc/ssh/ssh_config`.

Detailed coverage in Section 5.

---

## 4. Basic Client Usage

### 4.1 Remote Shell (ssh)

```bash
ssh user@host                           # interactive login
ssh user@host command                   # run single command and exit
ssh user@host 'ls -la /var/log'         # quoting for multi-word commands
ssh -t user@host top                    # force pseudo-terminal allocation
ssh -T user@host                        # disable pseudo-terminal
ssh -N user@host                        # no remote command (tunnels only)
ssh -f user@host sleep 60               # background after authentication
```

> `-t` is needed when a remote command requires a TTY (e.g., `top`, `vim`). `-T` suppresses TTY and is often used with `-N` for tunnel-only connections.

### 4.2 File Transfer (scp & sftp)

```bash
# scp: copy files over SSH
scp local_file user@host:/remote/path           # upload
scp user@host:/remote/file ./local_path         # download
scp -r local_dir user@host:/remote/dir          # recursive (directory)

# sftp: interactive file transfer
sftp user@host
sftp> ls
sftp> get remote_file local_name
sftp> put local_file remote_name
sftp> get -r remote_dir/                        # recursive download

# rsync over SSH (preferred for large/syncing transfers)
rsync -avz -e "ssh -p 2222" local_dir/ user@host:/remote/dir/
rsync -avz --progress large_file user@host:/path/
```

> `rsync` is superior to `scp` for large transfers: it resumes interrupted transfers, transfers only deltas, and can preserve permissions/timestamps.

### 4.3 ssh-agent & ssh-add

```bash
# Start the agent (typically auto-started by desktop environments)
eval $(ssh-agent)                   # start agent and export env vars

# Add a key to the agent (prompts for passphrase once)
ssh-add ~/.ssh/my_key

# List loaded keys
ssh-add -l

# Delete all keys
ssh-add -D

# Lock/unlock the agent
ssh-add -x                          # lock (set password)
ssh-add -X                          # unlock

# Forward the agent to a remote host (USE WITH CAUTION)
ssh -A user@host                    # remote host can use your agent keys
```

> `ssh-agent` caches decrypted keys in memory so you only enter the passphrase once per session. Agent forwarding (`-A`) lets a remote host use your local keys, but is a security risk on untrusted servers—use `ProxyJump` instead whenever possible.

---

## 5. Client Configuration (`~/.ssh/config`)

### 5.1 Basic Host Alias

```text
Host myserver
    HostName 198.51.100.10
    User admin
    Port 2222
    IdentityFile ~/.ssh/server_key
```

```bash
# With config, this is all you type:
ssh myserver

# Equivalent command without config:
ssh -p 2222 -i ~/.ssh/server_key admin@198.51.100.10
```

> Every `Host` block defines an alias. Key-value pairs under it apply only to that alias. First-match wins when aliases overlap—put more specific `Host` entries before generic ones.

### 5.2 Global Defaults with `Host *`

```text
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 5
    StrictHostKeyChecking accept-new
    AddKeysToAgent yes
    IdentitiesOnly yes
```

```bash
# ServerAliveInterval 60    Send a keep-alive null packet every 60 seconds.
#                           Prevents NAT/firewall timeouts and broken-pipe errors.
#
# ServerAliveCountMax 5     Disconnect after 5 consecutive missed keep-alives.
#                           Total tolerance: 60 * 5 = 300 seconds.
#
# StrictHostKeyChecking accept-new
#                           accept-new: auto-accept *new* hosts, but warn on changes.
#                           no:          never auto-add (most secure).
#                           yes:         never auto-add, refuse if not in known_hosts.
#
# IdentitiesOnly yes        Only offer keys explicitly listed in IdentityFile.
#                           Prevents "Too many authentication failures" errors.
```

> `ServerAliveInterval` is essential for long-lived SSH sessions. Without it, idle connections can be silently dropped by firewalls or NAT gateways, leading to frozen terminals.

### 5.3 Solving "Too Many Authentication Failures"

When you run `ssh user@host`, the SSH client tries every key in `~/.ssh/` sequentially. Most servers disconnect after 5–6 failed attempts (controlled by `MaxAuthTries` in `sshd_config`). If you have many keys, the correct key might never get tried.

```text
# Explicitly specify one key per host to avoid key-storm
Host myserver
    HostName 10.0.0.5
    User admin
    IdentityFile ~/.ssh/server_key
    IdentitiesOnly yes
```

> `IdentitiesOnly yes` is the critical directive. Without it, SSH will still offer keys from `ssh-add -l` even if you specified an `IdentityFile`.

---

## 6. SSH Tunneling (Port Forwarding)

### 6.1 Conceptual Overview

SSH tunneling encapsulates arbitrary TCP traffic inside an encrypted SSH connection. Three modes:

| Mode | Flag | Direction | Use Case |
|---|---|---|---|
| Local Forwarding | `-L` | Client → Server → Target | Access a remote service through a firewall |
| Remote Forwarding | `-R` | Server → Client → Target | Expose a local service to the remote side |
| Dynamic Forwarding | `-D` | Client → Server (SOCKS5 proxy) | Browse the web through the SSH server |

### 6.2 Local Forwarding (`-L`)

```bash
# Scenario: Remote PostgreSQL on 192.168.1.50:5432, only reachable from SSH server.
ssh -L 5432:192.168.1.50:5432 user@ssh_server

# Now `psql -h localhost -p 5432` on your machine connects to the remote DB.

# Suppress remote shell, run in background, for tunnel-only sessions
ssh -fNL 5432:192.168.1.50:5432 user@ssh_server
```

> `-L` maps a local port to a remote destination as seen from the SSH server. The actual forwarding chain is: your machine → SSH server (encrypted) → target host (plain or re-encrypted depending on target protocol).

### 6.3 Remote Forwarding (`-R`)

```bash
# Scenario: Your local dev server (localhost:3000) needs to be accessible from the internet.
ssh -R 8080:localhost:3000 user@public_server

# Now `curl http://localhost:8080` on the public server hits your local dev server.
```

> By default, `-R` only binds to `localhost` on the remote side for security. To expose the port externally, you need `GatewayPorts yes` in `sshd_config`.

### 6.4 Dynamic Forwarding (`-D`)

```bash
# Create a SOCKS5 proxy on localhost:1080 routed through the SSH server.
ssh -D 1080 user@ssh_server

# Configure your browser to use SOCKS5 proxy at localhost:1080.
```

> `-D` creates a SOCKS5 proxy. The SSH client acts as a proxy server; the remote SSH server is the egress point.

### 6.5 Key Tunneling Options

```bash
-f          # Background after authentication (combine with -N).
-N          # Do not execute a remote command (tunnel only).
-T          # Disable pseudo-terminal allocation.
-n          # Redirect stdin from /dev/null (for background tunnels).
-q          # Quiet mode; suppress warnings.
-v          # Verbose; use -vv for debug-level output.

-o "ExitOnForwardFailure=yes"     # Abort if port forwarding setup fails.
-o "ServerAliveInterval=30"       # Keep-alive for tunnel longevity.
```

> `ExitOnForwardFailure=yes` is critical for reliability. Without it, SSH may establish a connection but silently fail to bind the port.

---

## 7. ProxyJump & Jump Hosts

### 7.1 Problem

The target server is behind a firewall. You can only reach a bastion/jump host. The naive approach—SSH to bastion, then SSH again from bastion to target—leaves your private key on the bastion and creates a manually managed two-hop session.

### 7.2 Solution: `-J` / `ProxyJump`

```bash
# Single-hop jump via bastion
ssh -J bastion_user@bastion_ip target_user@internal_ip

# Multi-hop (chain of jumps)
ssh -J hop1,hop2 target_user@final_ip
```

```text
# ~/.ssh/config equivalent
Host bastion
    HostName 203.0.113.1
    User admin
    IdentityFile ~/.ssh/local_key

Host internal_server
    HostName 10.0.0.5
    User appuser
    IdentityFile ~/.ssh/local_key
    ProxyJump bastion
```

### 7.3 How ProxyJump Works (Transparent Tunneling)

```
[Your Machine] --(1) SSH auth to bastion--> [Bastion]
       |                                         |
       +--------(2) TCP pipe through bastion ----+
                        |
                  [Internal Server:22]
                        |
       +--------(3) Second SSH auth through pipe--+
```

1. Your machine authenticates to the bastion.
2. It instructs the bastion to open a raw TCP connection to `internal_server:22`.
3. Your machine performs a **second, independent** key exchange and authentication with the internal server **through** that pipe.

> The bastion is a dumb pipe. Traffic between you and the internal server is encrypted end-to-end. The bastion cannot decrypt it. Your private key never touches the bastion.

### 7.4 ProxyCommand (Legacy Alternative)

```text
# Before OpenSSH 7.3, ProxyJump (-J) did not exist. ProxyCommand was the equivalent:
Host internal_server
    HostName 10.0.0.5
    User appuser
    ProxyCommand ssh -W %h:%p bastion
```

> `-W %h:%p` is the "netcat mode" of SSH: forward stdin/stdout to `%h` (target host) on `%p` (target port). `ProxyJump` is syntactic sugar over this mechanism. Modern OpenSSH versions (7.3+) should use `ProxyJump`.

---

## 8. NAT Traversal & Reverse Tunnels

### 8.1 The Problem

A machine is behind a NAT/firewall that blocks all inbound connections (common in campus networks, home routers, corporate LANs). You need to SSH into this machine from the outside.

### 8.2 Architecture

```
[Trapped Machine] ---outbound SSH---> [Public Relay Server]
 (initiates tunnel)                    (listens on a port)

[Your Laptop] ---SSH via ProxyJump---> [Public Relay] ---pipe---> [Trapped Machine]
```

The trapped machine initiates an **outbound** connection (which is almost always allowed by firewalls) and binds a reverse port on the public relay.

### 8.3 Reverse Tunnel Setup

```bash
# Executed ON THE TRAPPED MACHINE
ssh -i ~/.ssh/tunnel_key \
    -o "StrictHostKeyChecking=no" \
    -o "ServerAliveInterval=30" \
    -o "ServerAliveCountMax=3" \
    -o "ExitOnForwardFailure=yes" \
    -fNR 2222:localhost:22 \
    root@public_relay_ip
```

```text
# On YOUR LAPTOP (~/.ssh/config): connect to the trapped machine
# via the relay using ProxyJump
Host trapped_machine
    HostName localhost
    Port 2222
    User internal_user
    IdentityFile ~/.ssh/local_key
    ProxyJump public_relay
```

### 8.4 Critical Insight: ProxyJump Bypasses Firewall Rules

When you `ssh trapped_machine`, your connection hits `localhost:2222` **from within the relay server itself** (because ProxyJump first connects to the relay, then opens a TCP connection to `localhost:2222`). The external firewall rules on the relay are irrelevant—the traffic never crosses the external interface.

> You do **not** need to open port 2222 on the public relay's firewall/security group. The connection to `localhost:2222` is intra-machine and bypasses all inbound firewall rules.

---

## 9. Cloudflare Tunnel as SSH Transport

### 9.1 Motivation

Cloudflare Tunnel (`cloudflared`) provides an alternative to manual reverse SSH tunnels. It uses outbound websocket connections to Cloudflare's edge network, which means:
- No need for a public-facing server with a static IP.
- Traffic is proxied through Cloudflare's global network.
- Built-in DDoS protection and TLS termination.

### 9.2 Setup and Usage

```bash
# On the trapped machine: start the Cloudflare tunnel
nohup cloudflared tunnel --url tcp://localhost:22 > tunnel.log 2>&1 &

# Extract the assigned hostname from logs
ADDR=$(grep -ao 'https://[a-z0-9-]*\.trycloudflare\.com' tunnel.log | head -1)
echo $ADDR
```

```text
# On YOUR LAPTOP (~/.ssh/config): use ProxyCommand with cloudflared
Host trapped_machine_cf
    HostName prepaid-rip-texture-modifications.trycloudflare.com
    User internal_user
    IdentityFile ~/.ssh/local_key
    ProxyCommand /path/to/cloudflared.exe access ssh --hostname %h
```

> `ProxyCommand` delegates the transport layer to an external program. Here, `cloudflared access ssh` establishes a websocket connection through Cloudflare and provides a clean stdin/stdout pipe for SSH.

### 9.3 Comparison: Reverse Tunnel vs Cloudflare

| Aspect | Reverse SSH Tunnel | Cloudflare Tunnel |
|---|---|---|
| Requires a public server | Yes (fixed IP) | No |
| Requires open inbound ports | No (bypassed by ProxyJump) | No |
| Hostname stability | Fixed (server IP) | Ephemeral (changes on restart) |
| Reliability | Depends on SSH; keep-alive needed | WebSocket; more resilient |
| Setup complexity | Medium (key management + cron) | Medium (binary download + config) |
| Enterprise features | None | Access policies, audit logs |

---

## 10. Process Management & Automation

### 10.1 Process Detection with `pgrep`

```bash
# Check if a specific reverse tunnel is running
pgrep -u $USER -f "ssh.*2222:localhost.*39.105.78.91"

# Precisely kill only the targeted tunnel process
pkill -u $USER -f "ssh.*2222:localhost.*public_ip"

# Check if port is in use
ss -tlnp | grep ":2222"                     # modern (replaces netstat)
```

### 10.2 The Tunnel Heartbeat Script

```bash
#!/bin/bash

# Configuration
ALIYUN_IP="39.105.78.91"
REMOTE_PORT="2222"
TUNNEL_KEY="/path/to/.ssh/tunnel_key"

# 1. Idempotency check: if tunnel is already alive, exit silently.
if pgrep -u $USER -f "ssh.*${REMOTE_PORT}:localhost.*${ALIYUN_IP}" > /dev/null; then
    exit 0
fi

# 2. Clean up zombie processes
pkill -u $USER -f "ssh.*${REMOTE_PORT}:localhost.*${ALIYUN_IP}" 2>/dev/null

# 3. Establish tunnel
ssh -i "$TUNNEL_KEY" \
    -o "StrictHostKeyChecking=no" \
    -o "ServerAliveInterval=30" \
    -o "ServerAliveCountMax=3" \
    -o "ExitOnForwardFailure=yes" \
    -fNR "${REMOTE_PORT}:localhost:22" \
    "root@${ALIYUN_IP}"

# 4. Secondary validation
sleep 3
if ! pgrep -u $USER -f "ssh.*${REMOTE_PORT}:localhost.*${ALIYUN_IP}" > /dev/null; then
    echo "Tunnel failed to start." >&2
    exit 1
fi

echo "Tunnel established: ${ALIYUN_IP}:${REMOTE_PORT} -> localhost:22"
```

### 10.3 Cron-Based Scheduling

```cron
# Run heartbeat check every minute
* * * * * /bin/bash /path/to/start_tunnel.sh >> /path/to/tunnel_cron.log 2>&1

# Run once at system boot, with a 30-second delay
@reboot sleep 30 && /bin/bash /path/to/start_tunnel.sh > /path/to/tunnel_cron.log 2>&1
```

> The combination of `* * * * *` (every minute) and the idempotency check creates a self-healing tunnel: maximum downtime is 60 seconds. `@reboot` ensures the tunnel survives a full machine restart.

---

## 11. Troubleshooting & Diagnostics

### 11.1 Common Errors

```bash
# "Permission denied (publickey)"
# Causes:
#   - Public key not in remote authorized_keys
#   - Incorrect permissions on ~/.ssh or authorized_keys
#   - Wrong private key offered (check with -v)

# "Too many authentication failures"
# Fix: Use IdentitiesOnly yes + explicit IdentityFile in ~/.ssh/config

# "WARNING: REMOTE HOST IDENTIFICATION HAS CHANGED!"
# Fix: ssh-keygen -R hostname (after verifying legitimacy)

# "bind: Address already in use" (with -L/-R)
# Fix: Use a different port, or kill the process holding the port.

# "channel x: open failed: connect failed"
# Fix: Verify the target is reachable from the SSH server side.
```

### 11.2 Diagnostic Commands

```bash
# Test SSH connectivity with maximum verbosity
ssh -vvv user@host

# List fingerprints of all local keys
for key in ~/.ssh/id_* ~/.ssh/*_key; do
    [ -f "$key" ] && ssh-keygen -lf "$key"
done

# Check permissions on remote .ssh
ssh user@host "ls -la ~/.ssh/"

# Check active SSH tunnels on the local machine
ps aux | grep "ssh.*-L\|ssh.*-R\|ssh.*-D"
```

---

## 12. Security Best Practices

### 12.1 Server-Side Hardening (`/etc/ssh/sshd_config`)

```text
# Disable root login
PermitRootLogin no

# Disable password authentication (keys only)
PasswordAuthentication no

# Limit authentication attempts
MaxAuthTries 3

# Disable empty passwords
PermitEmptyPasswords no

# Restrict users allowed to connect
AllowUsers alice bob

# Disable X11 forwarding if not needed
X11Forwarding no

# Set idle timeout (seconds)
ClientAliveInterval 300
ClientAliveCountMax 2
```

```bash
# Apply changes
sudo systemctl restart sshd
```

### 12.2 Client-Side Best Practices

```text
# Never share private keys between machines.
# Use Ed25519 keys.
# Add passphrases to interactive-use keys.
# Use IdentitiesOnly yes to avoid key offering storms.
# Prefer ProxyJump over agent forwarding (-A).
# Rotate keys periodically (especially deployment/CI keys).
# Revoke compromised keys by removing them from authorized_keys.
```

---

## 13. Quick Reference

### 13.1 Essential Commands

```
ssh user@host                       Connect to remote host
ssh -p 2222 user@host               Connect on non-default port
ssh -i ~/.ssh/key user@host          Use specific identity file
ssh -v user@host                     Verbose (debug) mode
ssh -J bastion target                Connect through jump host
ssh -L 8080:host:80 user@server      Local port forward
ssh -R 2222:localhost:22 user@srv    Remote (reverse) port forward
ssh -D 1080 user@server              Dynamic SOCKS5 proxy forward
ssh -fN                              Background with no remote command

ssh-keygen -t ed25519                Generate Ed25519 key pair
ssh-keygen -l -f ~/.ssh/key          Show key fingerprint
ssh-keygen -R hostname               Remove host from known_hosts
ssh-keygen -y -f private_key         Extract public key from private

ssh-copy-id -i key.pub user@host     Deploy public key to server
ssh-add ~/.ssh/key                   Add key to agent (cache passphrase)
ssh-add -l                           List loaded keys

scp file user@host:/path             Copy file to remote
rsync -avz dir/ user@host:/path/     Sync directory via SSH
```

### 13.2 Essential Config Snippets

```text
# Global keep-alive
Host *
    ServerAliveInterval 60
    ServerAliveCountMax 5

# Simple alias
Host myserver
    HostName 10.0.0.5
    User admin
    Port 22
    IdentityFile ~/.ssh/my_key

# Jump host
Host internal
    HostName 10.0.0.100
    User app
    ProxyJump bastion

# Reverse tunnel consumer
Host behind_nat
    HostName localhost
    Port 2222
    User internal_user
    ProxyJump public_relay
```

### 13.3 Permission Cheat Sheet

```
chmod 700 ~/.ssh
chmod 600 ~/.ssh/id_ed25519
chmod 600 ~/.ssh/authorized_keys
chmod 644 ~/.ssh/id_ed25519.pub
chmod 644 ~/.ssh/known_hosts
chmod 644 ~/.ssh/config
```

---

*Last reviewed: 2026-07-18*  
*Editor: wuguojia*
