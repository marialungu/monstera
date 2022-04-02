# Text

The Text component is used for rendering copy in the app

## Installation guide

```
yarn add @monstera/ui-components-text
# or
npm install @monstera/ui-components-text
```

## Usage

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

## Props

| Name | Type    | Default Value | Available values                                                     | Description |
| --- |---------|--------------|----------------------------------------------------------------------| --- |
| `type` | string  | `body`       | `hero` <br/> `h1` <br/> `h2` <br/> `h3` <br/> `body` <br/> `caption` | Applies styling according to styleguide |
| `disabled` | bool    | `false`      | `true` <br /> `false`                                                | Disables button when value is `true`|
| `className` | string  | `''` | `custom` | Component can accept custom styling |