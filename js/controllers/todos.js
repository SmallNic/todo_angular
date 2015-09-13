var app = angular.module("todo")

app.controller("todosController", function(){
  //This controller is where all the logic will be contained.
  this.todos=[
    {task:"Learn Meteor", deadline:"December 2015"},
    {task:"Review AngularJS", deadline:"October 2015"},
    {task:"Learn Swift", deadline:"September 2015"}
  ]

  this.formIsVisible = false

  this.toggleForm = function(){
    if(this.formIsVisible){
      this.formIsVisible = false
    }
    else {
      this.formIsVisible = true
    }
  }

  this.create = function(){
    this.todos.unshift({task:this.task, deadline:this.deadline})
  }

  this.edit = function(index){
    //use index to find the index of the clicked on task
    var todo = this.todos[index]
    //set the value of the html ng-model to the value of the clicked on task
    this.task = todo.task
    this.deadline = todo.deadline
  }

  this.update = function(index){
    //set the value of the clicked on task to the value of the data entered in on the form
    this.todos[index].task =  this.task
    this.todos[index].deadline = this.deadline
  }

  this.delete = function(index){
    console.log(index)
    this.todos.splice(index,1)
  }


})
