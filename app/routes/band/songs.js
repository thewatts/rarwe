import Ember from 'ember';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band').get('songs');
  },

  actions: {
    createSong: function() {
      var band       = this.modelFor('band'),
          controller = this.get('controller'),
          title     = controller.get('title'),
          song;

      song = this.store.createRecord('song', {
        title: title,
        band: band,
        rating: 0,
      });

      song.save().then(function() {
        band.get('songs').pushObject(song);
        controller.set('title', '');
      });
    },

    updateRating: function(params) {
      var song   = params.item,
          rating = params.rating;

      song.set('rating', rating);

      song.save();
    },

    didTransition: function() {
      var name = this.modelFor('band').get('name');
      Ember.$(document).attr('title', '%@ songs = Rock & Roll'.fmt(name));
    },
  }
});
