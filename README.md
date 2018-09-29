# repo-templete

## Aim

sometimes you want to do some test by js,but you has to config many things like babel ,eslint ,jest ,etc.so i create the repo to config it to help you code carefree.

## A Modern FE Project Need This

> you will install a lot of npm packages

### Webpack(Module Package)

#### Base

Webpack Base

- webpack
- webpack-cli
- webpack-merge

Asset Management

- style-loader
- css-loader
- url-loader
- html-webpack-plugin

`yarn add --dev webpack webpack-cli webpack-merge style-loader css-loader url-loader html-webpack-plugin`

#### Development

Server

- webpack-dev-server

`yarn add --dev webpack-dev-server`

#### Production

- clean-webpack-plugin
- mini-css-extract-plugin
- mini-css-extract-plugin
- uglifyjs-webpack-plugin
- webpack-manifest-plugin

`yarn add --dev clean-webpack-plugin mini-css-extract-plugin mini-css-extract-plugin uglifyjs-webpack-plugin webpack-manifest-plugin`

### Babel

- babel-core
- babel-loader
- babel-preset-env
- babel-preset-stage-2
- [babel-plugin-transform-runtime](https://babeljs.io/docs/en/babel-plugin-transform-runtime):enables the re-use of Babel's injected helper code to save on codesize.

`yarn add --dev babel-core babel-loader babel-preset-env babel-preset-stage-2 babel-plugin-transform-runtime`

### CSS

- normalize.css
- autoprefixer
- postcss-loader

`yarn add --dev normalize.css autoprefixer postcss-loader`

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
