Ember Material Design Icons
==============================================================================

An [ember-cli](http://www.ember-cli.com) addon for using [Material Design Icons](https://materialdesignicons.com/) in Ember applications.

### [Demo](https://kaermorchen.github.io/ember-mdi/)

![demo](https://user-images.githubusercontent.com/11972062/216624380-2441ee4c-5040-4ae2-9d48-e00ad42c653b.png)

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.28 or above
* Embroider or ember-auto-import v2


Installation
------------------------------------------------------------------------------

```
ember install ember-mdi
```

Usage
------------------------------------------------------------------------------
There are more than 7k icons and we can't store they all in a build by an performance issue. For this reason import an icon into your project for use it in template. Example:

```js
//app/components/icons/github.js
export { Github as default } from 'ember-mdi';
```
```hbs
{{! app/templates/application.hbs }}
<Icons::Github/>
```

Another way to use the icons is import they in a controller or a component. Example:

```js
//app/controllers/application.js
import Controller from '@ember/controller';
import { Github } from 'ember-mdi';

export default class ApplicationController extends Controller {
  Github = Github;
}
```
```hbs
{{! app/templates/application.hbs }}
<this.Github/>
```

Options
------------------------------------------------------------------------------

All icons have some options with default values:

| Name              | Value |
|-------------------|-------|
| @size             | 24    |
| @title            | null  |
| @fill             | null  |
| @role             | "img" |
| @spin             | false |
| @flipH            | false |
| @flipV            | false |
| @rotate           | null  |
| @stroke           | null  |
| @strokeWidth      | null  |
| @strokeLinecap    | null  |
| @strokeLinejoin   | null  |
| @strokeDasharray  | null  |
| @strokeDashoffset | null  |
| @strokeOpacity    | null  |

System-wide config
------------------------------------------------------------------------------
Use a mixin-function for system-wide extending the icons:
```js
//app/components/submarine/github.js
import { Submarine } from 'ember-mdi';

// Mixin
function Yellow(BaseClass) {
  return class extends BaseClass {
    get fill() {
      return 'yellow';
    }
  };
}

export default Yellow(Submarine);
```

Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
