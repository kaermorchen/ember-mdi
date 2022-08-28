Ember Material Design Icons
==============================================================================

An [ember-cli](http://www.ember-cli.com) addon for using [Material Design Icons](https://materialdesignicons.com/) in Ember applications.

All icons are stored in the file `vendor.js`.

### [Demo](https://kaermorchen.github.io/ember-mdi/)

Compatibility
------------------------------------------------------------------------------

* Ember.js v3.24 or above
* Embroider or ember-auto-import v2


Installation
------------------------------------------------------------------------------

```
ember install ember-mdi
```

Usage
------------------------------------------------------------------------------
Import an icon to your application

```js
//app/components/icons/github.js
export { Github as default } from 'ember-mdi';
```

```hbs
<Icons::Github/>
```

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


Contributing
------------------------------------------------------------------------------

See the [Contributing](CONTRIBUTING.md) guide for details.


License
------------------------------------------------------------------------------

This project is licensed under the [MIT License](LICENSE.md).
