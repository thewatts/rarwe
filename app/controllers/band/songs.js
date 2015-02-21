import Ember from 'ember';

export default Ember.Controller.extend({
  title: '',
  songCreationStarted: false,
  isDisabled: Ember.computed.empty('title'),
  noSongs: Ember.computed.equal('model.length', 0),
  hasSongs: Ember.computed.not('noSongs'),
  canCreateSong: Ember.computed.or('songCreationStarted', 'hasSongs'),

  actions: {
    enableSongCreation: function() {
      this.set('songCreationStarted', true);
    },
  }
});
