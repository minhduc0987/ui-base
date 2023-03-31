# Base design system for T1 project. 
Required:

`Node.js >= v16`

# Setup
## Mode `development`
- Copy `.env.example` file to `.env.development`
- Copy `APP_ENVIRONMENT=development` into the `.env.development` file
## Mode `production`
- Copy `.env.example` file to `.env.production`
- Copy `APP_ENVIRONMENT=production` into the `.env.production` file
## Install dependencies
```shell
npm install
```
## Build
- For development or local mode:
```
npm run build-dev
```
- For development or local mode:
```
npm run build-prod
```
The output directory is `dist/` will be bundled on your root directory.

## Change version
Based on the semantic versioning, you can change the version of the package by running the commands below

Major changed: 
```
npm run bump-version-major
```

or with `yarn`:
```
yarn bump-version-major
```

Minor changed: 
```
npm run bump-version-minor
```

or with `yarn`:
```
yarn bump-version-minor
```

Patch changed: 
```
npm run bump-version-patch
```

or with `yarn`:
```
yarn bump-version-patch
```
## Pack library
```
npm pack
```
You will see an extract file in your root project. Then you can install and use their applications

Or if you want to auto publish the package, you can run the following command:
```
npm run publish
```

or with `yarn`
```
yarn publish
```
Note: Must config version of package before publishing.
## Copyright (c) 2023 by Niteco
