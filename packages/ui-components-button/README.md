# Button

Buttons can be used for actions in a app, from submitting forms to menus or applying filters

## Installation guide

```
yarn add @monstera/ui-components-button
# or
npm install @monstera/ui-components-button
```


## Usage

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

## Props

| Name | Type | Default Value | Available values | Description |
| --- | --- | --- | --- | --- |
| `type` | string | `primary` | `primary` <br/> `secondary` <br/> `tertiary` | Applies styling according to styleguide |
| `size` | string | `large` | `large` <br/> `medium` | Defines the size of the button |
| `disabled` | bool | `false` | `true` <br /> `false` | Disables button when value is `true`|
| `fullWidth` | bool | `false` | `true` <br /> `false` | Button takes the width of the container |
| `onClick` | function | `null` | - | Callback function for `click` event |
| `className` | string  | `''` | `custom` | Component can accept custom styling |

