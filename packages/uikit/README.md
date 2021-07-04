# Safari UIkit

Safari UIkit is a set of React components and hooks used to build pages on Safari's apps. It also contains a theme file for dark and light mode.

## Install

`yarn add @newtes/uikit`

## Setup

### Theme

Before using Pancake UIkit, you need to provide the theme file to styled-component.

```
import { ThemeProvider } from 'styled-components'
import { light, dark } from '@newtes/uikit'
...
<ThemeProvider theme={isDark}>...</ThemeProvider>
```

### Reset

A reset CSS is available as a global styled component.

```
import { ResetCSS } from '@newtes/uikit'
...
<ResetCSS />
```

### Types

This project is built with Typescript and export all the relevant types.

## How to use the UIkit

If you want to use components from the UIkit, check the [Storybook documentation](https://pancakeswap.github.io/pancake-uikit/)

## Github Package Registry

Authenticating with a personal access token

```
$ npm login --scope=@newtes --registry=https://npm.pkg.github.com

> Username: <Github-USERNAME> //e.g foo
> Password: <TOKEN> // your github access token, you can generate form here https://github.com/settings/tokens
> Email: <PUBLIC-EMAIL-ADDRESS> your public email address
```
