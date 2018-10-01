# repo-templetes

## Goal

sometimes you want to do some test by js,but you has to config many things like babel ,eslint ,jest ,etc.so i create the repo to config it to help you code carefree.

## A Modern FE Project Need This

> you will install a lot of npm packages

### Webpack(Module Package)

#### Base

Webpack Base

- webpack
- webpack-cli
- [webpack-merge](https://github.com/survivejs/webpack-merge):provides a merge function that concatenates arrays and merges objects creating a new object.

Asset Management

- [style-loader](https://github.com/webpack-contrib/style-loader):Adds CSS to the DOM by injecting a `<style>` tag
- [css-loader](https://github.com/webpack-contrib/css-loader):interprets @import and url() like import/require() and will resolve them
- [url-loader](https://github.com/webpack-contrib/url-loader):transforms files into base64 URIs
- [html-webpack-plugin](https://github.com/jantimon/html-webpack-plugin):simplifies creation of HTML files to serve your webpack bundles

`yarn add --dev webpack webpack-cli webpack-merge style-loader css-loader url-loader html-webpack-plugin`

#### Development

Server

- [webpack-dev-server](https://github.com/webpack/webpack-dev-server):a development server that provides live reloading

`yarn add --dev webpack-dev-server`

#### Production

- [clean-webpack-plugin](https://github.com/johnagan/clean-webpack-plugin): remove/clean your build folder(s) before building
- [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin):It creates a CSS file per JS file which contains CSS. It supports On-Demand-Loading of CSS and SourceMaps.
- [uglifyjs-webpack-plugin](https://github.com/webpack-contrib/uglifyjs-webpack-plugin):uses uglify-js to minify your JavaScript.
- [webpack-manifest-plugin](https://github.com/danethurber/webpack-manifest-plugin):generating an asset manifest.

`yarn add --dev clean-webpack-plugin mini-css-extract-plugin uglifyjs-webpack-plugin webpack-manifest-plugin`

### Babel

> you could run `npx babel-upgrade --write --install` to update babel@7

- babel-core
- babel-loader
- babel-preset-env
- babel-preset-stage-2
- [babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime):enables the re-use of Babel's injected helper code to save on codesize.

`yarn add --dev babel-core babel-loader babel-preset-env babel-preset-stage-2 babel-plugin-transform-runtime`

### CSS

- [normalize.css](https://github.com/necolas/normalize.css):A modern alternative to CSS resets
- [autoprefixer](https://github.com/postcss/autoprefixer):parse CSS and add vendor prefixes to CSS rules
- [postcss-loader](https://github.com/postcss/postcss-loader#readme):Loader for webpack to process CSS with PostCSS

`yarn add --dev autoprefixer postcss-loader`
`yarn add normalize.css`

### Code style

#### Eslint

- eslint
- eslint-loader
- eslint-import-resolver-webpack

Config

- eslint-config-standard
- eslint-config-prettier


Plugin

- eslint-plugin-import
- eslint-plugin-prettier
- eslint-plugin-standard
- eslint-plugin-promise
- eslint-plugin-import
- eslint-plugin-node

`yarn add --dev eslint eslint-loader eslint-config-standard eslint-config-prettier eslint-config-standard eslint-plugin-standard eslint-plugin-promise eslint-plugin-import eslint-plugin-node eslint-import-resolver-webpack`

#### Prettier

`yarn add --dev prettier `

### Test

### Npm Package

- cross-env
  set and use environment variables across platforms

`yarn add --dev cross-env`

### Editor Config

the `.editorconfig` file only take effects by install the `EditorConfig for VS Code` ext in vscode

### Other
