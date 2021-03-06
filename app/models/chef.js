// app/models/chef.js
import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  numberOfStudents: DS.attr('number', {defaultValue:0}),
  cookingToday: DS.attr('boolean'),
  description: DS.attr('string', {defaultValue: 'Up and comming Culinary artist!'})
});
