"use strict";

/**
 * Home view controller
 */
app.controller("homeCtrl", ["Task", function(Task)
{
    var self = this;

    self.currentList = 0;

    self.tasks = Task.getTasks(self.currentList);

    self.addTask = function()
    {
        if(!self.taskText)
            return false;

        var id = Task.addTask(self.taskText);
        return Task.changeTaskList(id, self.currentList);
    };

    self.completeTask = function(taskId)
    {

    };

    self.changeListTo = function(listId)
    {
        self.tasks = Task.getTasks(self.currentList);
    };

    self.removeTask = function()
    {

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
