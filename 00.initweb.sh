#!/bin/bash

SCRIPT_NAME=$(basename "$0")
DATE=$(date +"%Y%m%d_%H%M%S")
BACKUP_NAME="backup_${DATE}.tar.gz"

# Step 1: Check if the directory has existing files (excluding this script)
EXISTING_FILES=$(ls -A | grep -v "^$SCRIPT_NAME$")

if [ -n "$EXISTING_FILES" ]; then
    echo "⚠️  Warning: Files already exist in the current directory:"
    echo "$EXISTING_FILES"

    read -p "Do you want to backup all existing contents (including this script)? (y/n): " do_backup
    if [ "$do_backup" == "y" ]; then
        tar -czvf "$BACKUP_NAME" ./*
        echo "✅ Backup created: $BACKUP_NAME"
    fi

    read -p "Do you want to clean the current directory (excluding this script and backups)? (y/n): " do_clean
    if [ "$do_clean" == "y" ]; then
        echo "🧹 Cleaning directory..."
        for item in *; do
            if [[ "$item" != "$SCRIPT_NAME" && "$item" != "$BACKUP_NAME" && "$item" != backup_* ]]; then
                rm -rf "$item"
            fi
        done
        echo "✅ Directory cleaned."
    fi
fi

echo "📁 Creating website folder structure..."

# Root level files
touch index.html README.md

# Asset folders
mkdir -p assets/css assets/js assets/images
touch assets/css/style.css assets/js/script.js

# About section
mkdir -p about
touch about/education.html about/research.html about/skills.html about/awards.html about/index.html

# Contact & Publications
mkdir -p contact publications
touch contact/index.html publications/index.html

# Projects
mkdir -p projects
touch projects/index.html

# Create 6 example projects
for i in {1..6}; do
    mkdir -p projects/project${i}/images
    touch projects/project${i}/index.html
done

echo "✅ Website structure created successfully."

# Show final structure using tree if available
if command -v tree >/dev/null 2>&1; then
    echo "📂 Final directory layout:"
    tree -I 'node_modules|.git'
else
    echo "📂 Final directory contents:"
    ls -R
fi

echo "🎉 Initialization complete. Start building your academic website!"
