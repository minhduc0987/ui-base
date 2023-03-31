# Base design system for T1 project. 
Required:

`Node.js >= v16`

`yarn >= v1.22`

## Install dependencies
```shell
yarn install
```
## Create new component
All of components are defined in `src/core/components` folder
To start creating new component, needed to understand the type of component before creating new folder in the corresponding component type.

### Example 
Create new `Input` component
- Go to the `atoms` folder, create `Button` folder contains those files:
```
├── Button
│   └── Button.tsx
│   └── Button.module.scss
│   └── index.ts
```

- Button.tsx: Contains the React component of Button, contains HTML and logic inside component.
- Button.module.scss: Contains Button's style
- index.ts: To contains file export component

Then, in `core/components/index.ts`, declare the module component there to resolve the component.
```js
export { default as Button } from './atoms/Button'
```

### Visualize component using Storybook
- Go to folder `src/stories/` to see the structure corresponding with `src/core/components/` folder
- Create a file eg: `Button.stories.tsx` then write your story there. 

All of the configurations of Storybook are in the `.storybook` folder

## Storybook
To visualize components, run the Storybook by command:
```bash
yarn run storybook
```

or with `npm`
```
npm run storybook
```

## Eslint
To see the error/warning about ESLint, run the command below

With `yarn`:
```
yarn lint
```

with `npm`:
```
npm run lint
```

To fix the warning ESLint, run the command below

With `yarn`:
```
yarn lint:fix
```

with `npm`:
```
npm run lint:fix
```

To format code using Prettier, run the command below

With `yarn`:
```
yarn format
```

with `npm`:
```
npm run format
```

## Stylelint
To check the warning/error about Stylelint, run the command below

With `yarn`:
```
yarn lint:style
```

with `npm`:
```
npm run lint:style
```

## Stylelint
To fix the warning/error about Stylelint, run the command below

With `yarn`:
```
yarn lint:style:fix
```

with `npm`:
```
npm run lint:style:fix
```

## Commit conventional
All of the commits must be clearly and follow by [Commitlint](https://github.com/conventional-changelog/commitlint#what-is-commitlint).

If you want to skip commit following Commit conventional, you can pass params `--no-verify` in the commit, but not recommended.
## Build
- For development or local mode:
```
yarn run build-dev
```
- For development or local mode:
```
yarn run build-prod
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
