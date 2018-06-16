# EventAll Mobile App

## Table of Contents

- [Getting Started](#getting-started)
- [Development Environment](#development-environment)
- [Testing](#testing)
- [Overview of Commands](#overview-of-commands)

## Getting Started

1.  Install XDE (Expo development environment) from [here](https://docs.expo.io/versions/latest/introduction/installation). XDE will serve as our way to easily run the React Native packager, simulator, and publish our app. Also, you will want to create an Expo account.
2.  Install Node.js and make sure your version is at least version 8.9.0.
3.  Install Yarn from [here](https://yarnpkg.com/en/). We will be using it in place of npm because it's faster.
4.  Make sure you have the latest version of XCode installed, as well as an iOS simulator installed. For consistency's sake, we will be testing with the iPhone X.
5.  Run `yarn install` to install the project's dependencies.
6.  Open XDE and open up the project and start up the simulator by either pressing `cmd + I` or hitting the "Devices" tab and clicking on the simulator option.

## Development Environment

Code will not build on the build server if there are linting errors. We will be using eslint to lint our code (following [Airbnb's guide](https://github.com/airbnb/javascript)). In order to make linting less of a pain, I **strongly** recommend using VSCode and installing the following extensions to help with formatting:

- ESLint
- Trailing Spaces

Additionally, I recommend changing your editor settings `cmd + ,` to add the following User Settings:

```js
"editor.formatOnSave": true,
"eslint.autoFixOnSave": true,
"[javascript]": {
    "editor.tabSize": 2
},
"files.trimTrailingWhitespace": true,
"files.insertFinalNewline": true,
```

Other great packages that will make development *much* easier include:
- Jest
- Auto Close Tag
- Auto Rename Tag
- Import Cost
- Path Intellisense
- npm Intellisense
- Color Highlight
- JavaScript (ES6) code snippets

Either way, there is a pre-commit hook that should run the linter right after you type `git commit` and fix any formatting issues that you have.

## Folder Structure
We will be putting all of our React Native components and styling underneath the `src/` folder. Inside that, we will be organizing our code by functionality. For example, we might have a "Login" folder that holds all of our code dealing with login. Inside of that, we would have a `screens` folder that contains our container component. Typically, most of the business logic and state for a component should be held in a screen. The screen would be connected to the redux store and be responsible for passing down the appropriate props down to the children. *Components*, on the other hand, should typically be simpler and more presentational. Here is a great article explaining this design principle on [Medium](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0).

The only files that are exempt to this contraint are the `Navigator`, `Actions.js`, and `Reducer.js` files, which should sit at the same level as the Components and Screens folder.

## Testing
Our testing framework will [Jest](https://facebook.github.io/jest/docs/en/tutorial-react-native.html), which is a great testing framework published and maintained by Facebook. Front end tests serve to make sure that changes to one part of the app don't affect others. Tests should only be written if they are meaningful, AKA don't test to make sure that a Button appears when you've very clearly programmed a button there. You should be testing for things such as how a component interacts given a different set of props, or how an entire screen reacts to a button press.

Tests should typically be written for components and screens and should be named as <Component-Name>.test.js in the same level as the actual react file itself. See the "Demo" component for an example.

You can run the test suite by typing `yarn test`. Ignore all of the `console.error` messages for now, it's a stupid React bug.


## Overview of Commands

These commands can also be found the `package.json` file under `‘scripts’`

- `yarn run lint`
  - Runs the linter and fixes any formatting issues
- `yarn test`
  - Runs the Testing Suite in Jest
