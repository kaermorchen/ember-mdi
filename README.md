# Ember Material Design Icons

An [ember-cli](http://www.ember-cli.com) addon for using [Material Design Icons](https://materialdesignicons.com/) in Ember applications. All icons (about 2000) are added into project as single **SVG** file `/assets/icons.svg`.

## Getting Started

Install in ember-cli application

```
ember install ember-mdi
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
By default ember-mdi store all icon in `icons.svg`. And it is has the size about 750KB. If you don't need all icons, use the option `icons` for limit their. And ember-mdi will store only your specific icons. Don't forget restart `ember serve`.

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

## License
ember-mdi is released under the MIT License. See the bundled [LICENSE](LICENSE.md) file for details.
