/* jshint node: true */
'use strict';

var path = require('path');
var mergeTrees = require('broccoli-merge-trees');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-material-design-icons-shim',
  included: function() {
    this._super.included.apply(this, arguments);

    var app;

    // If the addon has the _findHost() method (in ember-cli >= 2.7.0), we'll just
    // use that.
    if (typeof this._findHost === 'function') {
      app = this._findHost();
    } else {
      // Otherwise, we'll use this implementation borrowed from the _findHost()
      // method in ember-cli.
      var current = this;
      do {
        app = current.app || app;
      } while (current.parent.parent && (current = current.parent));
    }

    app.import(this.treePaths.vendor + '/material-design-icons/material-icons.css');
  },
  _materialIconsPath() {
    var iconsPath;

    try {
      var resolve = require('resolve');
      iconsPath = path.dirname(resolve.sync('material-design-icons/package.json', {
        basedir: this.project.root
      }));
    } catch (error) {
      iconsPath = path.dirname(require.resolve('material-design-icons/package.json'));
    }

    return path.join(iconsPath, 'iconfont');
  },
  treeForVendor: function(tree) {
    var trees = [
      new Funnel(this._materialIconsPath(), {
        files: [
          'material-icons.css'
        ],
        destDir: '/material-design-icons',
        srcDir: '/'
      })
    ];

    if (tree) {
      trees.push(tree);
    }

    return mergeTrees(trees, { overwrite: true });
  },
  treeForPublic: function(tree) {
    var trees = [
      new Funnel(this._materialIconsPath(), {
        files: [
          'MaterialIcons-Regular.eot',
          'MaterialIcons-Regular.ijmap',
          'MaterialIcons-Regular.ttf',
          'MaterialIcons-Regular.svg',
          'MaterialIcons-Regular.woff',
          'MaterialIcons-Regular.woff2'
        ],
        destDir: '/assets',
        srcDir: '/'
      })
    ];

    if (tree) {
      trees.push(tree);
    }

    return mergeTrees(trees, { overwrite: true });
  }
};
