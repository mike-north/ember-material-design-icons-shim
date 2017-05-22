# Ember-material-design-icons-shim [![Build Status](https://travis-ci.org/mike-north/ember-material-design-icons-shim.svg?branch=master)](https://travis-ci.org/mike-north/ember-material-design-icons-shim) [![Ember Observer Score](https://emberobserver.com/badges/ember-material-design-icons-shim.svg)](https://emberobserver.com/addons/ember-material-design-icons-shim)

[![Greenkeeper badge](https://badges.greenkeeper.io/mike-north/ember-material-design-icons-shim.svg)](https://greenkeeper.io/)

**[FASTBOOT](http://ember-fastboot.com) COMPATIBLE**

A very simple shim to add [material-design-icons](https://github.com/google/material-design-icons) to your Ember.js app, without having to rely on Google's CDN.

## Use
Install this addon with ember-cli

```
ember install ember-material-design-icons-shim
```
And this addon will take care of adding the appropriate CSS and icon fonts into your app's asset pipeline. You can use google material design icons in your app [as described in the official Google Material Design Icons documentation](https://design.google.com/icons/)

### Example
```html
<!-- For modern browsers. -->
<i class="material-icons">alarm</i>

<!-- For IE9 or below. -->
<i class="material-icons">&#xE855;</i>
```

## Contributing

* `git clone` this repository
* `npm install`
* `bower install`

## Running

* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests

* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).
