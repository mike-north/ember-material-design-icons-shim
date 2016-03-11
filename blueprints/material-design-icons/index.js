/*jshint node:true*/
module.exports = {
  description: 'Material Design Icons installation blueprint',
  normalizeEntityName: function() {},
  beforeInstall: function(options) {
    return this.addBowerPackageToProject('material-design-icons', '^2.2.1');
  }
};
