import DS from 'ember-data';

var attr    = DS.attr,
    hasMany = DS.hasMany;

export default DS.Model.extend({
  name: attr('string'),
  description: attr('string'),
  songs: hasMany('song'),

  slug: function() {
    if (this.get('name')) {
      return this.get('name').dasherize();
    }
  }.property('name'),
});
