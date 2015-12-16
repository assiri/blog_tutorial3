import Ember from 'ember';
export default Ember.Route.extend({
model: function(params) {
  return this.store.findRecord('comment', params.comment_id);
},
actions:{
  update:function(model){
  var self=this;
  model.save().then(function(){
    self.transitionTo('comments');
  });
},
delete:function(model){
var self=this;
model.destroyRecord().then(function(){
  self.transitionTo('comments');
});
}
}
});
