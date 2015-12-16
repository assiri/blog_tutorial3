import Ember from 'ember';
export default Ember.Route.extend({
  model:function(){
      return this.store.findAll('blog');
    },
actions:{
  newcomment:function(blogid){
    var self=this;
    this.store.findRecord('blog',blogid).then(function(blog){
      self.store.createRecord('comment',{blog:blog,body:''}).save().then(function(comment){
        //self.redirect('comments.comment',comment);
        self.transitionTo('comments.comment',comment);
      });
     });
  }
}
});
