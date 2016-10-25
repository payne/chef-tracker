import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  newChefName: '',
  cookingChefs: Ember.computed.filterBy('model','cookingToday',true)
});
