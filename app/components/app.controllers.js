"use strict";

/**
 * Home view controller
 */
app.controller("homeCtrl", ["Task", function(Task)
{
    var self = this;

    /**
     * Active list
     * @type {Number}
     */
    self.currentList = 0;

    /**
     * All tasks from active list
     * @type {Array}
     */
    self.tasks = Task.getTasks(self.currentList);

    /**
     * Add new task to active list
     * @return {Void}
     */
    self.addTask = function()
    {
        if(!self.taskText)                                  // Prevent if empty
            return false;

        var id = Task.addTask(self.taskText);               // add task to collection
        self.taskText = "";                                 // Clean input
        return Task.changeTaskList(id, self.currentList);   // Assign to current active list
    };

    self.completeTask = function(taskId)
    {
        Task.toggleCompleteTask(taskId);
    };

    self.changeListTo = function(listId)
    {
        self.tasks = Task.getTasks(self.currentList);
    };

    self.removeTask = function(taskId)
    {
        Task.archiveTask(taskId);
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
