import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('chef');

    // return [
    //     {name: 'Gordon Ramsay', cookingToday: true},
    //     {name: 'Anthony Bourdain', cookingToday: false},
    //   ];
  }
});
