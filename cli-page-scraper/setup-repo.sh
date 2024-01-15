#!/bin/bash

# Navigate to your project directory (replace with your actual directory path)
cd /Users/tomdegerlia/gpt-pilot/workspace/cli-page-scraper

# Initialize the local directory as a Git repository
git init

# Add all files in the directory to staging (or specify specific files)
git add .

# Commit the files with a message
git commit -m "Initial commit"

# Add the URL of the remote repository (replace with your repository's URL)
git remote add origin https://github.com/denverdata/cli-page-scraper

# Push the changes to the remote repository (master or main depending on your default branch)
git push -u origin master

# Print a completion message
echo "Project has been pushed to the GitHub repository successfully."
