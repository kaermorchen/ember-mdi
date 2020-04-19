<h1 align="center">Ember Material Design Icons</h1>

<p align="center">
  <a href="https://www.npmjs.com/package/ember-mdi"><img src="https://img.shields.io/npm/v/ember-mdi.svg?style=flat-square&colorB=44cc11" alt="npm version"></a>
  <a href="https://www.npmjs.com/package/ember-mdi"><img src="https://img.shields.io/npm/dm/ember-mdi.svg?style=flat-square" alt="npm monthly downloads"></a>  
  <a href="https://travis-ci.org/kaermorchen/ember-mdi"><img src="https://img.shields.io/travis/kaermorchen/ember-mdi.svg?style=flat-square" alt="Build Status"></a>
  <a href="https://emberobserver.com/addons/ember-mdi"><img src="https://emberobserver.com/badges/ember-mdi.svg" alt="Ember Observer Score"></a>
  <a href="https://opensource.org/licenses/MIT"><img src="https://img.shields.io/badge/License-MIT-blue.svg?style=flat-square" alt="License: MIT"></a>
</p>

An [ember-cli](http://www.ember-cli.com) addon for using [Material Design Icons](https://materialdesignicons.com/) in Ember applications. 

All icons are stored in the file `vendor.js`.

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.12 or above
* Ember CLI v2.13 or above
* Node.js v10 or above

### [Demo](https://kaermorchen.github.io/ember-mdi/)

<p align="center">
  <a href="https://kaermorchen.github.io/ember-mdi/" alt="Demo">
    <img src="https://github.com/kaermorchen/ember-mdi/raw/master/tests/dummy/public/assets/images/demo.png" alt="Demo">
  </a>
</p>

## Getting Started

Install in ember-cli application

```bash
ember install ember-mdi
```

Then include the following in your app.scss file:

```scss
@import "ember-mdi";
```

## Usage

```mustache
{{mdi-icon "alert"}}
```

We get follow html:

```html
<svg class="mdi-icon mdi-icon-alert" width="24" height="24" viewBox="0 0 24 24" role="img">
  <path d="M13,14H11V10H13M13,18H11V16H13M1,21H23L12,2L1,21Z" />
</svg>
```

Component mdi-icon has some options with default values: 

```mustache
{{mdi-icon "alert" 
  size=24
  title=null
  fill=null
  role="img"
  spin=false 
  flipH=false 
  flipV=false 
  rotate=null
  stroke=null,
  strokeWidth=null,
  strokeLinecap=null,
  strokeLinejoin=null,
  strokeDasharray=null,
  strokeDashoffset=null,
  strokeOpacity=null}}
```

## Configuration
By default ember-mdi stores **all** icons. And it has the size about 750KB. If you don't need all icons, use the option `icons` for limit their. And ember-mdi will store only your specific icons. Don't forget restart `ember serve`.

```js
// ember-cli-build.js

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    'ember-mdi': {
      icons: ['face', 'bug'],
    }
  });

  ...
};
```

## System-wide config
If you want to apply some options to all your icons, you need create the `mdi-icon` component and apply they inside it:

```js
import mdiIcon from 'ember-mdi/components/mdi-icon';

export default mdiIcon.extend({
  // Place here your preferences
  size: 28,
  fill: 'blue'
});
```

## Contributing
See the [Contributing](CONTRIBUTING.md) guide for details.

## License
ember-mdi is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
