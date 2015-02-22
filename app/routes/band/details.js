import Ember from 'ember';

export default Ember.Route.extend({
  actions: {
    didTransition: function() {
      var name = this.modelFor('band').get('name');
      Ember.$(document).attr('title', '%@ songs = Rock & Roll'.fmt(name));
    },

    willTransition: function(transition) {
      var controller = this.controller,
          leave;

      if (controller.get('isEditing')) {
        leave = window.confirm("You Have unsaved changes. You sure you wanna leave?");

        if (leave) {
          controller.set('isEditing', false);
        } else {
          transition.abort();
        }
      }
    }
  }
});
