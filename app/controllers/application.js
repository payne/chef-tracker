import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  newChefName: '',
  actions: {
    toggleCookingToday(chef) {
      console.log("About to toggle: " + chef.get('name'));
      Ember.set(chef, 'cookingToday', !chef.get('cookingToday'));
      chef.save();
      console.log("\tNew value is " + chef.get('cookingToday'));
    },
    saveNewChef() {
      console.log('saveNewChef: newChefName=' + this.newChefName);
        this.store.createRecord('chef',{name: this.newChefName, cookingToday: false}).save();
        this.set('newChefName','');
    },
    destroyChef(chef) {
      chef.destroyRecord();
    }
  }
});
