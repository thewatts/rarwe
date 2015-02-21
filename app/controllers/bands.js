import Ember from 'ember';

export default Ember.Controller.extend({
  name: '',
  isDisabled: Ember.computed.empty('name'),
});
