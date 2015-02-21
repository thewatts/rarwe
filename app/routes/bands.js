import Ember from 'ember';

var Song = Ember.Object.extend({
  title: '',
  rating: 0,
  hand: '',
});

var SongCollection = Ember.ArrayProxy.extend(Ember.SortableMixin, {
  sortProperties: ['rating'],
  sortAscending: false,
  content: [],
});

var songs = SongCollection.create();

window.songs = songs;

var alwaysWaiting = Song.create({
  title: "Always Waiting",
  band: "Kaya Project",
  rating: 5,
});

window.newSong = alwaysWaiting;

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

songs.pushObjects([ blackDog, yellowLedbetter, pretender ]);

var Band = Ember.Object.extend({
  name: '',

  slug: function() {
    return this.get('name').dasherize();
  }.property('name'),

  songs: function() {
    return songs.filterBy('band', this.get('name'));
  }.property('name', 'songs.@each.band'),
});

var ledZeppelin = Band.create({ name: "Led Zeppelin" });
var pearlJam    = Band.create({ name: "Pearl Jam" });
var fooFighters = Band.create({ name: "Foo Fighters" });

var bands = [ledZeppelin, pearlJam, fooFighters];

export default Ember.Route.extend({
  model: function() {
    return bands;
  },
});
