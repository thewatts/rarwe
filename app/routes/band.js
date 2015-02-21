import Ember from 'ember';

export default Ember.Route.extend({
  model: function(params) {
    var bands = this.modelFor('bands');
    var band = bands.findBy('slug', params.slug);

    if (Ember.isNone(band)) {
      this.transitionTo('bands');
    } else {
      return band;
    }
  },
});
