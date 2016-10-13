import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  actions: {
    toggleCookingToday(chef) {
      console.log("About to toggle: " + chef.get('name'));
      Ember.set(chef, 'cookingToday', !chef.get('cookingToday'));
      chef.save();
      console.log("\tNew value is " + chef.get('cookingToday'));
    }
  }
});
