import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  chefs: [
    {name: 'Gordon Ramsay', cookingToday: true},
    {name: 'Anthony Bourdain', cookingToday: false},
  ],
  actions: {
    toggleCookingToday(chef) {
      Ember.set(chef, 'cookingToday', !chef.cookingToday);
    }
  }
});
