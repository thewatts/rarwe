import Ember from 'ember';
import Song from '../models/song';
import Band from '../models/band';

var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['rating'],
  sortAscending: false,
  content: [],
});

var songs = SongCollection.create();

var blackDog = Song.create({
  title: "Black Dog",
  band: "Led Zeppelin",
  rating: 3,
});

var yellowLedbetter = Song.create({
  title: "Yello Ledbetter",
  band: "Pearl Jam",
  rating: 4,
});

var pretender = Song.create({
  title: "The Pretender",
  band: "Foo Fighters",
  rating: 2,
});

var daughter = Song.create({
  title: "Daughter",
  band: "pearlJam",
  rating: 4,
});

songs.pushObjects([ blackDog, yellowLedbetter, pretender ]);

var ledZeppelin = Band.create({ name: "Led Zeppelin" });
var pearlJam    = Band.create({ name: "Pearl Jam" });
var fooFighters = Band.create({ name: "Foo Fighters" });

ledZeppelin.get('songs').pushObjects([blackDog]);
pearlJam.get('songs').pushObjects([daughter, yellowLedbetter]);
fooFighters.get('songs').pushObjects([pretender]);

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function() {
    return bands;
  },

  actions: {
    createBand: function() {
      var name = this.get('controller').get('name');
      var band = Band.create({ name: name });
      bands.pushObject(band);
      this.get('controller').set('name', '');
    }
  }
});
