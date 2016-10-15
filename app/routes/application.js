// app/routes/application.js
import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    // goal, change the old records to have numberOfStudents be 0 not null.
    let allChefs = this.store.findAll('chef');
    // this hints there is an isUpdating property, but there is not
    // http://stackoverflow.com/questions/18138383/iterating-over-ember-js-ember-data-record-arrays
    // outputs allChefs.isUpdating=undefined
    console.log("allChefs.isUpdating="+allChefs.isUpdating);
    allChefs.forEach(function(chef) {
      console.log(chef.name +" has " + chef.numberOfStudents + " students");
      chef.set('numberOfStudents',chef.get('numberOfStudents')+0);
      chef.save();
    });
    return allChefs;
  }
});
