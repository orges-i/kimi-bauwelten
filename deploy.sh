#!/bin/bash

# Exit on error
set -e

# Install dependencies
echo "Installing dependencies..."
npm install

# Build the project
echo "Building the project..."
npm run build

# Create a temporary directory for the deployment
TEMP_DIR="$(mktemp -d)"
REPO_URL="https://github.com/orges-i/kimi-bauwelten.git"

# Clone the repository into the temporary directory
echo "Cloning repository..."
git clone --depth 1 --branch gh-pages $REPO_URL $TEMP_DIR

# Remove the old files
echo "Cleaning up old files..."
rm -rf $TEMP_DIR/*

# Copy the new build files
echo "Copying new build files..."
cp -r dist/* $TEMP_DIR/

# Add a no-jekyll file to bypass Jekyll processing
touch $TEMP_DIR/.nojekyll

# Commit and push the changes
echo "Deploying to GitHub Pages..."
cd $TEMP_DIR
git add .
git commit -m "Deploy to GitHub Pages"
git push origin gh-pages

# Clean up
echo "Cleaning up..."
rm -rf $TEMP_DIR

echo "Deployment successful!"
echo "Your site should be live at: https://orges-i.github.io/kimi-bauwelten"
