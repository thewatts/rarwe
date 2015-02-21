import Ember from 'ember';
// import Band from '../models/band';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('band');
  },

  actions: {
    // createBand: function() {
    //   var name = this.get('controller').get('name');
    //   var band = Band.create({ name: name });

    //   bands.pushObject(band);
    //   this.get('controller').set('name', '');
    //   this.transitionTo('band.songs', band);
    // },

    // didTransition: function() {
    //   Ember.$(document).attr('title', 'Bands - Rock & Roll');
    // },
  }
});
