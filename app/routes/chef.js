import Ember from 'ember';

export default Ember.Route.extend({
  // same as default 
  model(params) {
  return this.store.findRecord('chef',params.chef_id);
}
});
