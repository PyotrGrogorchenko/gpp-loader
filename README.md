# [gpp-loader](https://www.npmjs.com/package/gpp-loader) &middot; [![NPM Status](https://img.shields.io/badge/build-passing-green)](https://www.npmjs.com/package/gpp-loader)

## Languages and tools

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Javascript_Logo.png" width=20 height=20 alt="JavaScript"/> <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png" width=20 height=20 alt="TypeScript"/>

## Description

This package allows automatically put exports and imports in files of [gpp-templator](https://www.npmjs.com/package/gpp-templator) for [webpack](https://github.com/webpack/webpack).

<h2 align="center">Install</h2>

> webpack 5.x | gpp-loader 1.x | gpp-templator 1.x

```bash
npm install -D gpp-loader
```

<h2 align="center">Usage</h2>

webpack documentation: [Loaders](https://webpack.js.org/loaders/)

Within your webpack configuration object, you'll need to add the gpp-loader to the list of modules, like so:

```typescript
module: {
  rules: [
    {
      test: /\.ts$/,,
      exclude: /node_modules/,
      use: 'gpp-loader'
    }
  ]
}
```

### Options

You can pass options to the loader by using the [`options`](https://webpack.js.org/configuration/module/#ruleoptions--rulequery) property:

```typescript
module: {
  rules: [
    {
      test: /\.ts$/,,
      exclude: /node_modules/,
      use: {
        loader: 'gpp-loader',
        options: {
          componentsDir: 'components'
        }
      }
    }
  ]
}
```

* `componentsDir`: Default `''`. Path of gpp-components directory.

## Project phase

The project is completed, only bugs fix.

* [PyotrGrigorchenko](https://github.com/PyotrGrogorchenko) - Developer
