import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  numberOfStudents: DS.attr('number'),
  cookingToday: DS.attr('boolean')
});
