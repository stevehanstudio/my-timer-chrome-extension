# My Timer

A simple timer Chrome extension based on my usage.

## Languages and Tools

Javascript, React, Typescript, Material UI, Webpack, Chrome Extension

<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/javascript/javascript.png" width="24" height="24px" />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/react/react.png" width="24" height="24px" />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/typescript/typescript.png" width="24" height="24px" />
<img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/webpack/webpack.png" width="24" height="24px" />
<img src="https://camo.githubusercontent.com/306dedb9426f1d93a981d305a0a18164932ece8dca4d5fd820b1d3c36625b218/68747470733a2f2f6d75692e636f6d2f7374617469632f6c6f676f2e737667" width="24" height="24px" />

## Getting Started

1. `npm i` to install dependancies
2. `npm start` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
3. `npm i --save-dev <package_name>` to install new packages

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

## Production Build

1. `npm run build` to generate a minimized production build in the `dist` folder
2. ZIP the entire `dist` folder (e.g. `dist.zip`)
3. Publish the ZIP file on the Chrome Web Store Developer Dashboard!

## Initial Steps

1. `git init` to start a new git repo for tracking your changes, do an initial base commit with all the default files
2. Update `package.json`, important fields include `author`, `version`, `name` and `description`
3. Update `manifest.json`, important fields include `version`, `name` and `description`
4. Update `webpack.commmon.js`, the title in the `getHtmlPlugins` function should be your extension name

## Default Boilerplate Notes

- Folders get flattened, static references to images from HTML do not need to be relative (i.e. `icon.png` instead of `../static/icon.png`)
- Importing local ts/tsx/css files should be relative, since Webpack will build a dependancy graph using these paths
- Update the manifest file as per usual for chrome related permissions, references to files in here should also be flattened and not be relative

## Resources

Udemy course on Chrome Extension instructed by Jason Xian
[https://www.udemy.com/course/chrome-extension/](https://www.udemy.com/course/chrome-extension/)

Boilerplate from the course above for building Chrome Extensions in React and TypeScript using a Webpack build process.
[https://www.udemy.com/course/chrome-extension/](https://github.com/JasonXian/react-chrome-extension-boilerplate)