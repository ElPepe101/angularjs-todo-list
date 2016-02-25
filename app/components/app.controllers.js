"use strict";

app.controller("homeCtrl", ["Task", function(Task)
{
    var self = this;

    self.currentList = 0;

    self.addTaskInList = function(taskText)
    {
        var id = Task.addTask();
        return Task.changeTaskList(id, self.currentList);
    };

    self.completeTaskInList = function(taskId)
    {

    };
}]);

app.controller("archiveCtrl", ["Task", function(Task)
{
    var self = this;
}]);
