# Ember Material Design Icons

[![npm version](https://badge.fury.io/js/ember-mdi.svg)](https://www.npmjs.com/package/ember-mdi)
[![npm monthly downloads](https://img.shields.io/npm/dm/ember-mdi.svg)](https://www.npmjs.com/package/ember-mdi)
[![Ember Observer Score](https://emberobserver.com/badges/ember-mdi.svg)](https://emberobserver.com/addons/ember-mdi)
[![Build Status](https://travis-ci.org/kaermorchen/ember-mdi.svg?branch=master)](https://travis-ci.org/kaermorchen/ember-mdi)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

An [ember-cli](http://www.ember-cli.com) addon for using [Material Design Icons](https://materialdesignicons.com/) in Ember applications. All icons (about 2000) are added into project as single **SVG** file `/assets/icons.svg`.

### [Demo](https://kaermorchen.github.io/ember-mdi/)

## Getting Started

Install in ember-cli application

```
ember install ember-mdi
```

Then include the following in your app.scss file:

```
@import "ember-mdi";
```

And configure fingerprinting for work with svg files.

```
// ember-cli-build.js
const broccoliAssetRevDefaults = require('broccoli-asset-rev/lib/default-options');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    fingerprint: {
      extensions: broccoliAssetRevDefaults.extensions.concat(['svg']), //add svg extension
      prepend: '/ember-mdi/' //if do you have rootURL use `prepend` option
    }
  });
  
  ...
```

## Usage

```
{{mdi-icon "bug"}}
```

We get follow html:

```
<svg viewBox="0 0 24 24" width="24" height="24" role="img" class="mdi-icon ember-view">
   <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="/assets/icons.svg#bug"></use>
</svg>
```

Component mdi-icon has some options with default values: 

```
{{mdi-icon "alert" 
  size=24
  fill="black"
  spin=false 
  flipH=false 
  flipV=false 
  rotate=0}}
```

## Configuration
By default ember-mdi store all icon in `icons.svg`. And it has the size about 750KB. If you don't need all icons, use the option `icons` for limit their. And ember-mdi will store only your specific icons. Don't forget restart `ember serve`.

```
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

```
import mdiIcon from 'ember-mdi/components/mdi-icon';

export default mdiIcon.extend({
  // Place here your preferences
  size: 28,
  fill: 'blue'
});
```

## License
ember-mdi is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
