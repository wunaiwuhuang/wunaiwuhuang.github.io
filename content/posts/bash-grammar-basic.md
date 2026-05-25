---
title: "Bash Grammar Basic"
date: 2025-04-27
tags: ["Bash", "Shell", "Linux", "Cheatsheet"]
categories: ["Coding Notes"]
description: "Comprehensive Bash reference covering variables, control structures, functions, text processing, and scripting best practices."
---

## 1. Basic Concepts

```bash
# Running scripts
bash script.sh          # run script
./script.sh             # run if executable (chmod +x script.sh)
source script.sh        # run in current shell
. script.sh             # same as source

# Shebang (first line of script)
#!/bin/bash             # use bash
#!/usr/bin/env bash     # use bash from PATH (portable)
```

> Shebang tells system which interpreter to use. `#!/usr/bin/env bash` is more portable.

```bash
# Comments
# This is a comment
echo "Hello"  # inline comment

: '
Multi-line comment
using colon and single quotes
'
```

> Use `#` for comments. Multi-line comments use `: '...'` trick.

---

## 2. Variables

```bash
# Variable assignment (no spaces around =)
name="value"            # string
number=42               # number (still stored as string)
path=/home/user         # no quotes needed if no spaces

# Variable usage
echo $name              # simple expansion
echo ${name}            # explicit (safer, required in some contexts)
echo "Hello $name"      # inside double quotes
echo 'Hello $name'      # single quotes: literal (no expansion)

# Command substitution
result=$(command)       # modern syntax (preferred)
result=`command`        # old syntax (backticks)

# Arithmetic
result=$((5 + 3))       # arithmetic expansion
result=$((x * 2))       # use variables without $
((x++))                 # increment
((x--))                 # decrement
let "x = 5 + 3"         # let command
```

> No spaces around `=` in assignments. Use `$(( ))` for arithmetic. Always quote variables: `"$var"` to prevent word splitting.

```bash
# Special variables
$0                      # script name
$1, $2, ..., $9         # positional parameters (arguments)
${10}                   # 10th+ argument (braces required)
$#                      # number of arguments
$@                      # all arguments (as separate words)
$*                      # all arguments (as single word)
$$                      # process ID
$?                      # exit status of last command
$!                      # PID of last background process
$_                      # last argument of previous command
```

> `$@` and `"$@"` preserve argument structure. Always quote: `"$@"`.

```bash
# Environment variables
export VAR="value"      # export to child processes
unset VAR               # remove variable
env                     # list environment variables
printenv                # same

# Common environment variables
$HOME                   # home directory
$USER                   # username
$PWD                    # current directory
$OLDPWD                 # previous directory
$PATH                   # executable search path
$SHELL                  # current shell
```

> Use `export` to make variables available to child processes.

```bash
# Variable expansion modifiers
${var:-default}         # use default if unset
${var:=default}         # assign default if unset
${var:?error}           # error if unset
${var:+value}           # use value if set
${#var}                 # length of string
${var:pos}              # substring from position
${var:pos:len}          # substring with length
${var#pattern}          # remove shortest match from beginning
${var##pattern}         # remove longest match from beginning
${var%pattern}          # remove shortest match from end
${var%%pattern}         # remove longest match from end
${var/pattern/repl}     # replace first match
${var//pattern/repl}    # replace all matches
${var^}                 # uppercase first character
${var^^}                # uppercase all
${var,}                 # lowercase first character
${var,,}                # lowercase all
```

> Parameter expansion is powerful for string manipulation without external commands.

---

## 3. Quoting and Escaping

```bash
# Double quotes: allow variable expansion
echo "Hello $name"              # expands $name
echo "Result: $(date)"          # expands command substitution
echo "Path: $HOME"              # expands $HOME

# Single quotes: literal (no expansion)
echo 'Hello $name'              # prints: Hello $name
echo 'Path: $HOME'              # prints: Path: $HOME

# No quotes: word splitting and globbing
echo $files                     # splits on whitespace
echo "$files"                   # preserves whitespace

# Escaping
echo "Price: \$5"               # prints: Price: $5
echo "Line 1\nLine 2"           # prints: Line 1\nLine 2
echo -e "Line 1\nLine 2"        # -e enables interpretation

# ANSI-C quoting
echo $'Line 1\nLine 2'          # interprets escape sequences
echo $'Tab:\t|'                 # tab character
```

> Always quote variables: `"$var"`. Use double quotes for expansion, single for literal. Use `$'...'` for escape sequences.

---

## 4. Command Line Basics

```bash
# Command structure
command -options arguments

# Multiple commands
cmd1; cmd2              # run sequentially
cmd1 && cmd2            # run cmd2 if cmd1 succeeds
cmd1 || cmd2            # run cmd2 if cmd1 fails
cmd1 & cmd2             # run cmd1 in background, then cmd2

# Pipes and redirection
cmd1 | cmd2             # pipe output to input
cmd > file              # redirect stdout to file (overwrite)
cmd >> file             # redirect stdout to file (append)
cmd 2> file             # redirect stderr to file
cmd &> file             # redirect both stdout and stderr
cmd 2>&1                # redirect stderr to stdout
cmd < file              # redirect stdin from file
cmd <<< "string"        # here-string
cmd << EOF              # here-document
line 1
line 2
EOF
```

> `|` connects commands. `>` writes to file. `>>` appends. `2>` for errors. `&>` for both.

```bash
# Pipelines with tee
cmd | tee file          # write to file AND stdout
cmd | tee -a file       # append to file AND stdout

# Process substitution
diff <(cmd1) <(cmd2)    # compare outputs
cmd1 > >(cmd2)          # output as input to cmd2
```

> `tee` duplicates output. Process substitution `<()` treats command output as file.

---

## 5. Control Structures

```bash
# If statements
if [ condition ]; then
    commands
elif [ condition ]; then
    commands
else
    commands
fi

# One-liner
if [ condition ]; then command; fi
[ condition ] && command            # run if true
[ condition ] || command            # run if false
```

> Space after `[` and before `]` is required. `[ ]` is a command (test).

```bash
# Test operators ([ ])
# File tests
[ -e file ]             # exists
[ -f file ]             # is regular file
[ -d file ]             # is directory
[ -L file ]             # is symbolic link
[ -r file ]             # is readable
[ -w file ]             # is writable
[ -x file ]             # is executable
[ -s file ]             # exists and not empty
[ file1 -nt file2 ]     # newer than
[ file1 -ot file2 ]     # older than

# String tests
[ -z string ]           # is empty
[ -n string ]           # is not empty
[ str1 = str2 ]         # equal
[ str1 != str2 ]        # not equal
[ str1 < str2 ]         # less than (lexicographic)
[ str1 > str2 ]         # greater than

# Numeric tests
[ num1 -eq num2 ]       # equal
[ num1 -ne num2 ]       # not equal
[ num1 -lt num2 ]       # less than
[ num1 -le num2 ]       # less or equal
[ num1 -gt num2 ]       # greater than
[ num1 -ge num2 ]       # greater or equal

# Logical operators
[ cond1 -a cond2 ]      # AND
[ cond1 -o cond2 ]      # OR
[ ! cond ]              # NOT
```

> Use `-eq`, `-ne`, etc. for numbers. Use `=`, `!=` for strings. `[[ ]]` is preferred over `[ ]` (see below).

```bash
# Double brackets [[ ]] (preferred, bash-specific)
[[ condition ]]         # extended test command
[[ string =~ regex ]]   # regex matching
[[ $x > 5 ]]            # no need to quote variables
[[ -f file && -r file ]]  # logical operators (&&, ||)
[[ $str == pattern ]]   # pattern matching with * and ?
```

> `[[ ]]` is safer: no word splitting, allows `&&` and `||`, supports regex with `=~`.

```bash
# Case statement
case $variable in
    pattern1)
        commands
        ;;
    pattern2|pattern3)
        commands
        ;;
    *)
        default commands
        ;;
esac

# Pattern examples
*.txt)              # ends with .txt
[0-9])              # single digit
[a-z]*)             # starts with lowercase
```

> Case supports patterns (wildcards). `;;` ends each case. `*)` is default.

```bash
# For loops
for var in list; do
    commands
done

for file in *.txt; do
    echo "$file"
done

for i in {1..10}; do        # brace expansion
    echo "$i"
done

for i in {1..10..2}; do     # step of 2
    echo "$i"
done

for ((i=0; i<10; i++)); do  # C-style
    echo "$i"
done

# Loop over lines (correct way)
while IFS= read -r line; do
    echo "$line"
done < file.txt

# Loop over command output
while IFS= read -r line; do
    echo "$line"
done < <(command)
```

> Use `{1..10}` for sequences. Don't use `for line in $(cat file)` - breaks on spaces. Use `while read` instead.

```bash
# While loop
while [ condition ]; do
    commands
done

while true; do              # infinite loop
    commands
    break                   # exit loop
done

# Until loop (opposite of while)
until [ condition ]; do
    commands
done
```

> `break` exits loop. `continue` skips to next iteration.

```bash
# Select (interactive menu)
select option in "Option 1" "Option 2" "Quit"; do
    case $option in
        "Option 1")
            echo "Selected 1"
            ;;
        "Quit")
            break
            ;;
    esac
done
```

> `select` creates numbered menu automatically.

---

## 6. Functions

```bash
# Function definition (two syntaxes)
function_name() {
    commands
}

function function_name {
    commands
}

# Function with parameters
greet() {
    echo "Hello, $1!"       # $1 is first argument
}
greet "Alice"

# Return values
func() {
    return 0                # return exit status (0-255)
}

# Capture output
result=$(func)              # capture stdout

# Local variables
func() {
    local var="value"       # local to function
    echo "$var"
}
```

> Functions use `$1`, `$2`, etc. for parameters. Use `return` for exit status, `echo` for output values. Use `local` for local variables.

```bash
# Function examples
check_file() {
    local file=$1
    if [[ -f "$file" ]]; then
        echo "File exists"
        return 0
    else
        echo "File not found"
        return 1
    fi
}

# Call function
check_file "myfile.txt"
if check_file "myfile.txt"; then
    echo "Success"
fi
```

---

## 7. Arrays

```bash
# Array declaration
arr=(value1 value2 value3)
arr=("first" "second" "third")
arr[0]="first"              # assign by index

# Declare empty
declare -a arr              # indexed array
declare -A arr              # associative array (bash 4+)

# Array access
${arr[0]}                   # first element
${arr[-1]}                  # last element
${arr[@]}                   # all elements (as separate words)
${arr[*]}                   # all elements (as single word)
${#arr[@]}                  # number of elements
${!arr[@]}                  # all indices

# Array operations
arr+=(new_value)            # append
unset arr[1]                # remove element
arr=("${arr[@]}" new)       # append to copy

# Loop over array
for item in "${arr[@]}"; do
    echo "$item"
done

for i in "${!arr[@]}"; do   # with indices
    echo "$i: ${arr[$i]}"
done
```

> Always quote: `"${arr[@]}"`. Use `@` not `*` to preserve elements.

```bash
# Associative arrays (dictionaries)
declare -A dict
dict["key1"]="value1"
dict["key2"]="value2"

# Access
echo "${dict["key1"]}"

# Iterate
for key in "${!dict[@]}"; do
    echo "$key: ${dict[$key]}"
done
```

> Associative arrays require `declare -A`. Bash 4+ only.

---

## 8. Text Processing Commands

```bash
# cat - concatenate and display
cat file.txt                # display file
cat file1 file2 > out       # concatenate
cat -n file.txt             # with line numbers

# head/tail - show beginning/end
head file.txt               # first 10 lines
head -n 5 file.txt          # first 5 lines
tail file.txt               # last 10 lines
tail -n 5 file.txt          # last 5 lines
tail -f file.txt            # follow (real-time updates)

# wc - word count
wc file.txt                 # lines, words, bytes
wc -l file.txt              # count lines
wc -w file.txt              # count words
wc -c file.txt              # count bytes

# sort - sort lines
sort file.txt               # alphabetically
sort -n file.txt            # numerically
sort -r file.txt            # reverse
sort -u file.txt            # unique (remove duplicates)
sort -k2 file.txt           # sort by 2nd column
sort -t',' -k2 file.csv     # delimiter and column

# uniq - remove adjacent duplicates (use with sort)
sort file.txt | uniq        # unique lines
uniq -c file.txt            # count occurrences
uniq -d file.txt            # only duplicates

# cut - extract columns
cut -f1 file.txt            # first field (tab-delimited)
cut -f1,3 file.txt          # fields 1 and 3
cut -d',' -f2 file.csv      # 2nd field (comma-delimited)
cut -c1-10 file.txt         # characters 1-10

# paste - merge lines
paste file1 file2           # side by side (tab-separated)
paste -d',' file1 file2     # comma-separated

# tr - translate/delete characters
tr 'a-z' 'A-Z' < file       # lowercase to uppercase
tr -d '0-9' < file          # delete digits
tr -s ' '                   # squeeze repeated spaces

# grep - search patterns
grep "pattern" file.txt     # search for pattern
grep -i "pattern" file      # case-insensitive
grep -v "pattern" file      # invert match (exclude)
grep -n "pattern" file      # with line numbers
grep -c "pattern" file      # count matches
grep -r "pattern" dir/      # recursive
grep -E "regex" file        # extended regex
grep -P "regex" file        # Perl regex
grep -o "pattern" file      # only matching part
grep -A 3 "pattern" file    # 3 lines after match
grep -B 3 "pattern" file    # 3 lines before match
grep -C 3 "pattern" file    # 3 lines around match

# sed - stream editor
sed 's/old/new/' file       # replace first occurrence per line
sed 's/old/new/g' file      # replace all occurrences
sed 's/old/new/2' file      # replace 2nd occurrence
sed -i 's/old/new/g' file   # in-place edit
sed -n '10,20p' file        # print lines 10-20
sed '5d' file               # delete line 5
sed '/pattern/d' file       # delete matching lines
sed 's/^/PREFIX/' file      # add prefix to lines
sed 's/$/SUFFIX/' file      # add suffix to lines

# awk - pattern scanning and processing
awk '{print $1}' file       # print first column
awk '{print $1, $3}' file   # print columns 1 and 3
awk -F',' '{print $2}' file # custom delimiter
awk '$3 > 100' file         # filter rows
awk '{sum+=$1} END {print sum}' file  # sum column
awk 'NR==10' file           # print line 10
awk 'NR>=10 && NR<=20' file # print lines 10-20
awk '/pattern/' file        # print matching lines
awk '{print NF}' file       # number of fields per line
awk '{print NR, $0}' file   # line number and line
```

> `grep` for searching, `sed` for simple substitution, `awk` for column processing. Each has unique strengths.

---

## 9. File Operations

```bash
# ls - list files
ls                      # list files
ls -l                   # long format (permissions, size, date)
ls -a                   # include hidden files
ls -h                   # human-readable sizes
ls -t                   # sort by time
ls -r                   # reverse order
ls -R                   # recursive

# cd - change directory
cd /path/to/dir         # absolute path
cd ../                  # parent directory
cd ~                    # home directory
cd -                    # previous directory

# pwd - print working directory
pwd                     # current directory

# mkdir - make directory
mkdir dir               # create directory
mkdir -p dir/subdir     # create nested directories

# rm - remove
rm file                 # remove file
rm -f file              # force (no confirmation)
rm -r dir               # remove directory recursively
rm -rf dir              # force remove directory

# cp - copy
cp src dest             # copy file
cp -r src dest          # copy directory
cp -a src dest          # preserve attributes
cp -u src dest          # update (copy if newer)

# mv - move/rename
mv src dest             # move or rename
mv file dir/            # move to directory

# touch - create empty file or update timestamp
touch file              # create if not exists
touch -t 202301011200 file  # set specific time

# ln - create link
ln -s target link       # symbolic link
ln target link          # hard link

# find - search for files
find . -name "*.txt"        # find by name
find . -type f              # files only
find . -type d              # directories only
find . -size +1M            # larger than 1MB
find . -mtime -7            # modified in last 7 days
find . -name "*.txt" -exec cat {} \;    # execute command
find . -name "*.txt" -delete            # delete matches

# locate - fast file search (uses database)
locate filename         # find file
updatedb                # update database (run as root)

# which - locate command
which python            # show path to python
which -a python         # show all instances

# file - determine file type
file filename           # show file type
```

> `find` is powerful but slow. `locate` is fast but requires updated database.

---

## 10. Permissions and Ownership

```bash
# chmod - change permissions
chmod 755 file          # rwxr-xr-x
chmod +x file           # add execute
chmod -w file           # remove write
chmod u+x file          # user: add execute
chmod g-w file          # group: remove write
chmod o+r file          # others: add read
chmod a+x file          # all: add execute

# Permission numbers
# 4 = read (r)
# 2 = write (w)
# 1 = execute (x)
# 7 = rwx, 6 = rw-, 5 = r-x, 4 = r--, etc.

# chown - change owner
chown user file         # change owner
chown user:group file   # change owner and group
chown -R user dir       # recursive

# chgrp - change group
chgrp group file        # change group
```

> Permissions: user-group-others. Each has read-write-execute (rwx). `755` means `rwxr-xr-x`.

---

## 11. Process Management

```bash
# ps - process status
ps                      # current user processes
ps aux                  # all processes (BSD style)
ps -ef                  # all processes (Unix style)
ps -u user              # user's processes

# top - dynamic process viewer
top                     # interactive view
htop                    # enhanced version (if installed)

# kill - terminate process
kill PID                # graceful termination
kill -9 PID             # force kill
kill -15 PID            # SIGTERM (default)
killall name            # kill by name
pkill pattern           # kill by pattern

# Background/foreground
command &               # run in background
jobs                    # list background jobs
fg %1                   # bring job 1 to foreground
bg %1                   # resume job 1 in background
Ctrl+Z                  # suspend current job
Ctrl+C                  # terminate current job

# nohup - run immune to hangups
nohup command &         # keeps running after logout
```

> `&` runs in background. `kill -9` is last resort. Use `htop` if available.

---

## 12. Networking

```bash
# wget - download files
wget url                    # download file
wget -O output url          # save as output
wget -c url                 # continue incomplete download
wget -r url                 # recursive download

# curl - transfer data
curl url                    # display content
curl -o file url            # save to file
curl -O url                 # save with original name
curl -I url                 # show headers only
curl -X POST url            # POST request
curl -d "data" url          # send data

# ssh - secure shell
ssh user@host               # connect to host
ssh -p port user@host       # specify port
ssh -i keyfile user@host    # use key file

# scp - secure copy
scp file user@host:/path    # copy to remote
scp user@host:/path file    # copy from remote
scp -r dir user@host:/path  # copy directory

# rsync - sync files
rsync -av src dest          # archive mode, verbose
rsync -av --delete src dest # delete extraneous files
rsync -avz src user@host:dest  # compress during transfer

# ping - test connectivity
ping host                   # ping host
ping -c 4 host              # send 4 packets

# netstat - network statistics
netstat -tuln               # listening ports
netstat -an                 # all connections
```

> Use `curl` for APIs, `wget` for downloads. `rsync` is better than `scp` for large transfers.

---

## 13. Archives and Compression

```bash
# tar - archive files
tar -cf archive.tar files   # create archive
tar -czf archive.tar.gz files  # create gzip compressed
tar -cjf archive.tar.bz2 files # create bzip2 compressed
tar -xf archive.tar         # extract
tar -xzf archive.tar.gz     # extract gzip
tar -xjf archive.tar.bz2    # extract bzip2
tar -tf archive.tar         # list contents
tar -xf archive.tar -C dir  # extract to directory

# gzip/gunzip - compress files
gzip file                   # compress (creates file.gz)
gzip -d file.gz             # decompress
gunzip file.gz              # decompress
gzip -c file > file.gz      # keep original

# zip/unzip
zip archive.zip files       # create zip
zip -r archive.zip dir      # compress directory
unzip archive.zip           # extract
unzip -l archive.zip        # list contents
```

> `tar` for archiving, `gzip` for compression. `.tar.gz` (or `.tgz`) is common. `-c` create, `-x` extract, `-f` file, `-z` gzip, `-j` bzip2, `-v` verbose.

---

## 14. System Information

```bash
# System
uname -a                # all system info
uname -r                # kernel version
hostname                # system name
uptime                  # uptime and load
date                    # current date/time
cal                     # calendar

# Disk usage
df -h                   # disk space (human-readable)
du -h dir               # directory size
du -sh dir              # summary only
du -h --max-depth=1     # one level deep

# Memory
free -h                 # memory usage
cat /proc/meminfo       # detailed memory info

# CPU
lscpu                   # CPU info
cat /proc/cpuinfo       # detailed CPU info

# Users
whoami                  # current user
who                     # logged in users
w                       # who and what they're doing
id                      # user/group IDs
groups                  # user's groups
```

> `-h` flag usually means "human-readable" (KB, MB, GB instead of bytes).

---

## 15. Scripting Best Practices

```bash
#!/usr/bin/env bash
# Script description

# Exit on error, undefined variables, pipe failures
set -euo pipefail

# Enable debug mode
set -x                  # print commands
set -v                  # print input

# Functions first
main() {
    # Main logic
}

# Error handling
error_exit() {
    echo "Error: $1" >&2
    exit 1
}

# Check arguments
if [[ $# -lt 1 ]]; then
    echo "Usage: $0 <arg>"
    exit 1
fi

# Variable validation
[[ -z "${VAR:-}" ]] && error_exit "VAR not set"

# Cleanup on exit
cleanup() {
    rm -f /tmp/$$_*
}
trap cleanup EXIT

# Run main
main "$@"
```

> Use `set -euo pipefail` for robust scripts. Always quote variables. Check arguments. Use functions. Clean up with trap.

```bash
# Script template
#!/usr/bin/env bash
set -euo pipefail

readonly SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
readonly SCRIPT_NAME="$(basename "$0")"

usage() {
    cat << EOF
Usage: $SCRIPT_NAME [OPTIONS] <input>

Options:
    -h, --help      Show this help
    -v, --verbose   Verbose output
    -o, --output    Output file
EOF
}

main() {
    local input=$1
    local output=${2:-output.txt}
    
    # Your logic here
    echo "Processing $input"
}

# Parse options
while [[ $# -gt 0 ]]; do
    case $1 in
        -h|--help)
            usage
            exit 0
            ;;
        -v|--verbose)
            VERBOSE=1
            shift
            ;;
        -o|--output)
            OUTPUT=$2
            shift 2
            ;;
        *)
            INPUT=$1
            shift
            ;;
    esac
done

# Check required args
[[ -z "${INPUT:-}" ]] && { usage; exit 1; }

main "$INPUT"
```

---

## Common Patterns for Bioinformatics

### Process FASTA files

```bash
# Count sequences
grep -c "^>" file.fasta

# Extract sequence IDs
grep "^>" file.fasta | sed 's/^>//'

# Get sequence lengths
awk '/^>/ {if (seqlen){print seqlen}; seqlen=0; next} {seqlen+=length($0)} END {print seqlen}' file.fasta
```

### Process FASTQ files

```bash
# Count reads
echo $(($(wc -l < file.fastq) / 4))

# Extract reads
sed -n '2~4p' file.fastq

# Extract quality scores
sed -n '4~4p' file.fastq

# Convert FASTQ to FASTA
sed -n '1~4s/^@/>/p;2~4p' file.fastq > file.fasta
```

### Process delimited files

```bash
# CSV/TSV operations
cut -f1,3 -d$'\t' file.tsv          # extract columns
awk -F'\t' '$3 > 100' file.tsv      # filter rows
sort -t$'\t' -k2,2n file.tsv        # sort by column

# Count columns
awk -F'\t' '{print NF; exit}' file.tsv

# Remove duplicates based on column
sort -t$'\t' -k1,1 -u file.tsv
```

### Parallel processing

```bash
# GNU parallel (if installed)
parallel -j 4 process_file {} ::: *.fastq

# Simple loop with background jobs
for file in *.txt; do
    process "$file" &
    # Limit concurrent jobs
    if [[ $(jobs -r -p | wc -l) -ge 4 ]]; then
        wait -n
    fi
done
wait

# xargs parallel
find . -name "*.txt" | xargs -P 4 -I {} process {}
```

---

## Quick Reference

### Special Characters

- `$` - variable prefix, command substitution end
- `#` - comment, string length, parameter patterns
- `&` - background job
- `*` - wildcard (any characters)
- `?` - wildcard (single character)
- `[ ]` - test command, character class
- `|` - pipe
- `>` - redirect output
- `<` - redirect input
- `;` - command separator
- `&&` - AND operator
- `||` - OR operator
- `!` - negation, history
- `~` - home directory
- `` ` `` - command substitution (old)
- `$( )` - command substitution (new)

### Shortcuts

- `Ctrl+C` - interrupt (SIGINT)
- `Ctrl+Z` - suspend (SIGTSTP)
- `Ctrl+D` - EOF / exit shell
- `Ctrl+L` - clear screen
- `Ctrl+A` - beginning of line
- `Ctrl+E` - end of line
- `Ctrl+K` - delete to end of line
- `Ctrl+U` - delete to beginning of line
- `Ctrl+W` - delete word backward
- `Ctrl+R` - reverse search history
- `!!` - previous command
- `!$` - last argument of previous command
- `!*` - all arguments of previous command

### Exit Codes

- `0` - success
- `1` - general error
- `2` - misuse of shell command
- `126` - command cannot execute
- `127` - command not found
- `130` - terminated by Ctrl+C
- `255` - exit status out of range
