import Ember from 'ember';
import Song  from '../../models/song';

export default Ember.Route.extend({
  model: function() {
    return this.modelFor('band').get('songs');
  },

  actions: {
    createSong: function() {
      var band  = this.modelFor('band');
      var title = this.controller.get('title');
      var song  = Song.create({ title: title, band: band });

      band.get('songs').pushObject(song);
      this.get('controller').set('title', '');
    },

    updateRating: function(params) {
      var song   = params.item,
          rating = params.rating;

      song.set('rating', rating);
    },
  }
});
