import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  actions: {
    toggleCookingToday(chef) {
      Ember.set(chef, 'cookingToday', !chef.cookingToday);
    }
  }
});
