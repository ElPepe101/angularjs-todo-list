"use strict";

/**
 * Home view controller
 */
app.controller("homeCtrl", ["Task", function(Task)
{
    var self = this;

    self.currentList = 0;

    self.tasks = Task.getTasks(self.currentList);

    self.addTaskInList = function()
    {
        console.log(self.taskText)
        if(!self.taskText)
            return false;

        var id = Task.addTask(self.taskText);
        return Task.changeTaskList(id, self.currentList);
    };

    self.completeTaskInList = function(taskId)
    {

    };

    self.changeList = function(listId)
    {
        self.tasks = Task.getTasks(self.currentList);
    };
}]);

/**
 * Archive view controller
 */
app.controller("archiveCtrl", ["Task", function(Task)
{
    var self = this;
}]);

/**
 * Search view controller
 */
app.controller("searchCtrl", ["Task", function(Task)
{
    var self = this;
}]);
