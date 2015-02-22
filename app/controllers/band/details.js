import Ember from 'ember';

export default Ember.Controller.extend({
  isEditing: false,
  description: Ember.computed.alias('model.description'),

  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    save: function() {
      var band = this.get('model'),
          description = this.get('description'),
          self = this;

      band.set('description', description).save().then(function() {
        self.set('isEditing', false);
      });
    },
  }
});
