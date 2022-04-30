# Button

Buttons can be used for actions in a app, from submitting forms to menus or applying filters

## Installation guide

```
yarn add @monstera/ui-components-button
# or
npm install @monstera/ui-components-button
```


## Usage

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

## Props

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
