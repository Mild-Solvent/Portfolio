#!/bin/bash

# Deploy Vue Portfolio to GitHub Pages
# This script builds the Vue app and deploys it to the root of the Portfolio repo

set -e

echo "🚀 Starting deployment process..."

# Build the Vue application
echo "📦 Building Vue application..."
npm run build

# Copy built files to repository root
echo "📋 Copying files to repository root..."
cd ..
cp -r vue-portfolio/dist/* .

# Commit and push changes
echo "📤 Committing and pushing to GitHub..."
git add -A

# Check if there are changes to commit
if git diff --staged --quiet; then
    echo "✅ No changes to deploy"
else
    git commit -m "Deploy Vue portfolio build $(date +'%Y-%m-%d %H:%M:%S')"
    git push origin main
    echo "✅ Successfully deployed to GitHub Pages!"
    echo "🌐 Site will be available at: https://mild-solvent.github.io/Portfolio/"
fi

echo "🎉 Deployment process completed!"