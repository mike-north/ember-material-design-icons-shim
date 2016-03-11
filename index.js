/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-material-design-icons-shim',
  included: function(app) {
    this._super.included(app);
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.eot', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.ijmap', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.svg', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.ttf', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/MaterialIcons-Regular.woff2', { destDir: 'assets' });
    app.import(app.bowerDirectory + '/material-design-icons/iconfont/material-icons.css');
  }
};
