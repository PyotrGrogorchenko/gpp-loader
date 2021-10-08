<h1 align="center">gpp-loader</h1>

[![NPM Status](https://img.shields.io/badge/build-passing-green)](https://www.npmjs.com/package/gpp-loader)

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

* [PyotrGrigorchenko](https://github.com/PyotrGrogorchenko) - Developer
