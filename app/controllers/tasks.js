import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTask: function(){
			var title = this.get('newTitle');
			var task = this.store.createRecord('task',{
				title: title,
				done: 0
			})
			task.save();
		},
		deleteTask: function(id){
			this.store.findRecord('task', id).then(function(task){
				task.destroyRecord();
			})
		},
		openModal: function(id){
			this.store.findRecord('task', id).then(function(task){
				Ember.$(".titleEdit").val(task.title);
				Ember.$(".titleEdit").attr("id",task.id);
				$("#exampleModal").modal('toggle');
			})
		},
		editTask: function(){
			var taskId = Ember.$(".titleEdit").attr("id");
			var title = Ember.$(".titleEdit").val();
			this.store.findRecord('task', taskId).then(function(task){
				task.set('title', title);
				task.save();
			}).then(function(){
				$("#exampleModal").modal('toggle');	
			})
		},
		doneTask: function(id, title, done){
			this.store.findRecord('task', id).then(function(task){
				task.set('done', !done);
				task.save();
			})
		}
	}
});
