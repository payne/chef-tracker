import Ember from 'ember';

export default Ember.Controller.extend({
  name: `Matt "Nice Guy" Payne`,
  chefName: `chef`,
  newChefName: '',
  cookingChefs: Ember.computed.filterBy('model','cookingToday',true),
  numberOfStudentsArray: Ember.computed.mapBy('model', 'numberOfStudents'),
  numberOfStudents: Ember.computed.sum('numberOfStudentsArray'),
  actions: {
    toggleCookingToday(chef) {
      console.log("About to toggle: " + chef.get('name'));
      Ember.set(chef, 'cookingToday', !chef.get('cookingToday'));
      chef.save();
      console.log("\tNew value is " + chef.get('cookingToday'));
    },
    saveNewChef() {
      console.log('saveNewChef: newChefName=' + this.newChefName);
        this.store.createRecord('chef',{name: this.newChefName, cookingToday: false, numberOfStudents: 0}).save();
        this.set('newChefName','');
    },
    destroyChef(chef) {
      chef.destroyRecord();
    },
    incrementStudents(chef,amount) {
      Ember.set(chef, 'numberOfStudents', amount + Ember.get(chef,'numberOfStudents'));
      if (Ember.get(chef,'numberOfStudents') < 0) {
        Ember.set(chef, 'numberOfStudents', 0);
      }
      chef.save();
    }
  }
});
