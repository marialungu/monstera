# Monstera
A React UI Components library built with Lerna and deployed with shipjs.
![node](https://img.shields.io/badge/node-v17.8.0-blue) ![npm](https://img.shields.io/badge/npm-v8.5.5-blue) ![license](https://img.shields.io/badge/License-MIT-green) [![deploy](https://img.shields.io/badge/deploy-🛳%20Ship.js-blue?style=flat)](https://github.com/algolia/shipjs)

## About 

A simple UI components library for React, created with Lerna and showcased with React Storybook

Find live documentation [here](https://marialungu.github.io/monstera).

## Installation guide

All Monstera packages are available on npm

```
yarn add @monstera/ui-components
# or
npm install @monstera/ui-components
```

## Button

Buttons can be used for actions in a app, from submitting forms to menus or applying filters

### Usage

### Basic

```jsx
import React from "react";
import {Button} from "@monstera/ui-components";

const MyApp = () => (
    <div>
        <Button size="medium">Login</Button>
        <Button type="secondary" size="medium">Signup</Button>
    </div>
)
```

### Button with icon

```jsx
import React from "react";
import { Edit } from 'react-feather'
import {Button} from "@monstera/ui-components";

const EditIcon = () => <Edit strokeWidth={2} size={18}/>

const MyApp = () => (
    <Button label="Edit profile" Icon={EditIcon} />
)
```

### Props 

| Name | Type | Default Value | Available values | Description |
| --- | --- | --- | --- | --- |
| `type` | string | `primary` | `primary` <br/> `secondary` <br/> `tertiary` | Applies styling according to styleguide |
| `label` | string | `''` | - | The label of the button |
| `size` | string | `medium` | `large` <br/> `medium`  <br/> `small` | Defines the size of the button according to styleguide |
| `disabled` | bool | `false` | `true` <br /> `false` | Disables button when value is `true`|
| `fullWidth` | bool | `false` | `true` <br /> `false` | Button takes the width of the container when value is `true` |
| `onClick` | function | `null` | - | Callback function for `click` event |
| `className` | string  | `''` | `custom` | Component can accept custom styling |
| `icon` | svg | `''` | `any svg` | SVG Icon for the button |


## Text 

The Text component is used for rendering copy in the app 

### Usage 

```jsx
import React from "react";
import {Text} from "@monstera/ui-components";

const MyApp = () => (
    <div>
        <Text type="hero">Welcome, John</Text>
        <Text type="h2">Lorem ipsum dolor sit amet.</Text>
    </div>
)
```

### Props

| Name | Type    | Default Value | Available values                                                     | Description |
| --- |---------|--------------|----------------------------------------------------------------------| --- |
| `type` | string  | `body`       | `hero` <br/> `h1` <br/> `h2` <br/> `h3` <br/> `body` <br/> `caption` | Applies styling according to styleguide |
| `disabled` | bool    | `false`      | `true` <br /> `false`                                                | Disables button when value is `true`|
| `className` | string  | `''` | `custom` | Component can accept custom styling |
