import Controller from '@ember/controller';

export default Controller.extend({
	actions: {
		addTask: function(){
			// var temp = this.store.peekAll('task');
			// var title = this.get('newTitle');
			// Ember.$.ajax({
			// 	url: "http://localhost/missions/backend/public/api/tasks",
			// 	type: "POST",
			// 	data: {
			// 		title: title,
			// 		done: 0,
			// 	}
			// }).then(function(){
			// 	temp.update();
			// })
			var title = this.get('newTitle');
			var task = this.store.createRecord('task',{
				title: title,
				done: 0
			})
			task.save();
		},
		deleteTask: function(id){
			// Ember.$.ajax({
			// 	url: "http://localhost/missions/backend/public/api/tasks/"+id,
			// 	type: "DELETE",
				
				
			// }).then(function(resp){
			// 	alert("refresh");
			// })
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
			// var is_done = false;
			// this.store.findRecord('task', taskId).then(function(task){
			// 	is_done = task.done;
			// })
			// if(is_done)
			// 	is_done = 1;
			// else
			// 	is_done = 0;
			// var temp = this.store.peekAll('task');
			// var title = Ember.$(".titleEdit").val();
			// Ember.$.ajax({
			// 	url: "http://localhost/missions/backend/public/api/tasks/"+taskId,
			// 	type: "PUT",
			// 	data: {
			// 		title: title,
			// 		done: is_done,
			// 	}
			// }).then(function(){
			// 	$("#exampleModal").modal('toggle');
			// 	temp.update();
			// })
			var title = Ember.$(".titleEdit").val();
			this.store.findRecord('task', taskId).then(function(task){
				task.set('title', title);
				task.save();
			}).then(function(){
				$("#exampleModal").modal('toggle');	
			})
		},
		doneTask: function(id, title, done){
			// var temp = this.store.peekAll('task');
			// if(done)
			// 	done = 0;
			// else
			// 	done = 1;
			// Ember.$.ajax({
			// 	url: "http://localhost/missions/backend/public/api/tasks/"+id,
			// 	type: "PUT",
			// 	data: {
			// 		title: title,
			// 		done: done,
			// 	}
			// }).then(function(){
			// 	temp.update();
			// })
			this.store.findRecord('task', id).then(function(task){
				task.set('done', !done);
				task.save();
			})
		}
	}
});
