/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-design-icons-shim',
  included: function(app) {
    this._super.included(app);
    app.import('vendor/iconfont/MaterialIcons-Regular.eot', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.ijmap', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.svg', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.ttf', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.woff', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.woff2', { destDir: 'assets' });
    app.import('vendor/iconfont/material-icons.css');
  }
};
