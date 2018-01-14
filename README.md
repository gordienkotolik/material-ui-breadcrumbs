material-ui-breadcrumbs
=======================

## [Material-UI Breadcrumbs](https://github.com/gordienkotolik/material-ui-breadcrumbs)

Breadcrumbs component for React integrated with material-ui package.


## Requirements

- [React](https://reactjs.org/) 16.2.0 (not tested on other versions)
- [Material-UI](http://www.material-ui.com) 0.20.0 (not tested on other versions)


## Required Knowledge

I recommend that you get to know [React](http://facebook.github.io/react/) and [Material-UI](http://material-ui.com/).

## Installation
```sh
npm i material-ui-breadcrumbs --save
```
or
```sh
yarn add material-ui-breadcrumbs
```

## Usage
Once installed, just import and use the component:
```javascript
import React from 'react';
import {Breadcrumbs} from 'material-ui-breadcrumbs/Breadcrumbs';

const className = 'custom-class';
const style = {
  width: '50%',
  height: '48px',
};

export const Example = () => (
  <Breadcrumbs
    className={className}
    style={style}
    transparentBackground={true}
  />
);

export default Example;
```


#### Properties
| Props        | Options           | Default  | Description |
| ------------- |-------------| -----| -------- |
| className | String | '' | Adds custom class to breadcrumbs container.|
| style | Object | {} | Adds custom inline styles to breadcrumbs container. |
| itemClassName | String | '' | Adds custom class to breadcrumbs item.|
| itemStyle | Object | {} | Adds custom inline styles to breadcrumbs item. |
| activeItemClassName | String | '' | Adds custom class to active breadcrumbs item.|
| activeItemStyle | Object | {} | Adds custom inline styles to active breadcrumbs item. |
| separatorClassName | String | '' | Adds custom class to breadcrumbs separator.|
| separatorStyle | Object | {} | Adds custom inline styles to breadcrumbs separator. |
| separator | ReactElement | null | Adds custom breadcrumbs separator element. |
| transparentBackground | boolean | false | sets no background to breadcrumbs container. |
| customBackgroundClassName | String | '' | Adds custom class to custom breadcrumbs container.|
| customBackgroundStyle | Object | {} | Adds custom inline styles to custom breadcrumbs container. |
| customBackground | ReactElement | null | Adds custom breadcrumbs container element. |
| currentStep | string | null | sets current active breadcrumb link. |
| steps | {label: string; uri: string;} | [] | sets breadcrumb links list. |


## Contribute

1. [Submit an issue](https://github.com/gordienkotolik/material-ui-breadcrumbs/issues)
2. Fork the repository
3. Create a dedicated branch (never ever work in `master`)
4. The first time, run command: `yarn` into the directory
5. Fix bugs or implement features


## Future
- Add tests
- Add examples


## License
This project is licensed under the terms of the
[MIT license](https://github.com/gordienkotolik/material-ui-breadcrumbs/blob/master/LICENSE)