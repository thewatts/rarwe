import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.store.find('band');
  },

  actions: {
    createBand: function() {
      var route      = this,
          controller = this.get('controller'),
          rawBand    = controller.getProperties('name'),
          band       = this.store.createRecord('band', rawBand);

      band.save().then(function() {
        controller.set('name', '');
        route.transitionTo('band.songs', band);
      });
    },

    didTransition: function() {
      Ember.$(document).attr('title', 'Bands - Rock & Roll');
    },
  }
});
