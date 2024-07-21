#!/bin/bash
# This script create a new release for the project
# It updates the version in package.json, commits the change
# creates a new tag and pushes the changes to the remote repository
# Usage: ./release.sh <new_version>

if [ -z "$1" ]; then
  echo "Usage: $0 <new_version>"
  exit 1
fi

NEW_VERSION=$1

jq --arg ver "$NEW_VERSION" '.version = $ver' package.json > tmp.$$.json && mv tmp.$$.json package.json

if [ $? -ne 0 ]; then
  echo "Error updating the version in package.json"
  exit 1
fi

git add package.json
git commit -m "Update version to $NEW_VERSION"
echo "The package.json files has been updated and committed"

git tag -a "v$NEW_VERSION" -m "Release $NEW_VERSION"
echo "A new tag v$NEW_VERSION has been created"

echo "The release is ready to be pushed to the remote repository"
