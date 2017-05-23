/* eslint-env node */
'use strict';

module.exports = {
  name: 'ember-material-design-icons-shim',
  included(appOrAddon) {
    this._super.included(appOrAddon);
    let app = appOrAddon;
    if (typeof appOrAddon.import !== 'function' && appOrAddon.app) {
      app = appOrAddon.app;
    }
    this.app = app;
    app.import('vendor/iconfont/MaterialIcons-Regular.eot', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.ijmap', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.svg', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.ttf', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.woff', { destDir: 'assets' });
    app.import('vendor/iconfont/MaterialIcons-Regular.woff2', { destDir: 'assets' });
    app.import('vendor/iconfont/material-icons.css');
  }
};
