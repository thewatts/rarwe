import DS from 'ember-data';

var attr      = DS.attr,
    belongsTo = DS.belongsTo;

export default DS.Model.extend({
  title: attr('string'),
  rating: attr('number'),
  band: belongsTo('band'),
});
