#!/bin/bash

# pack component
npm pack

# get version from package.json file
RELEASE_VERSION=$(node -p -e "require('./package.json').version")

# checkout to branch name
git checkout -b release/v${RELEASE_VERSION}

# tagging version with branch
git tag -a ${RELEASE_VERSION} -m ${RELEASE_VERSION}

# push to the repository
git push origin HEAD --tags
