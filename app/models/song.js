import Ember from 'ember';
import DS from 'ember-data';

var attr      = DS.attr,
    belongsTo = DS.belongsTo;

export default Ember.Object.extend({
  title: attr('string'),
  rating: attr('number'),
  band: belongsTo('band'),
});
