"use strict";

app.service("Task", ["_", function(_)
{
    /**
     * Private property
     *
     * The task collection
     * Every object has the following attributes:
     * 		id {Integer} Autoincrement
     * 		text {String} The text to display
     * 		status {Integer} 0=incomplete, 1=complete
     * 		list {Integer} n:1 relation for the list catalog
     * @type {Array}
     */
    var collection = [
        {
            "id": 0,
            "text": "Sample text for To-Do list",
            "status": 0,
            "list": 0
        }
    ];

    /**
     * Private property
     *
     * Trash collector
     * @type {Array}
     */
    var collector = [];

    /**
     * Isolated service object
     * @type {Object}
     */
    var task = {};

    /**
     * Public method
     *
     * Add a task to the collection
     * @param  {String} text The text to display on task
     * @return {Integer} New task id
     */
    task.addTask = function(text)
    {
        // Autoincrement id value based on active and archived tasks
        var id = collection.length + collector.length;
        collection.push({
            "id": id,
            "text": text,
            "status": 0,
            "list": 0
        });
        return id;
    };

    /**
     * Public method
     *
     * Remove a task from collection and
     * add it to the garbage collector
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    task.archiveTask = function(id)
    {
        var task = {};
        return task;
    };

    /**
     * Public method
     *
     * Toggle completion status of a task from collection
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    task.toggleCompleteTask = function(id)
    {
        var task = {};
        return task;
    };

    /**
     * Public method
     *
     * Obtain an specific task in collection
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    task.getTask = function(id)
    {
        var task = {};
        return task;
    };

    /**
     * Search tasks in the collection by given text
     * @param  {String} text String to match in collection[i].text
     * @return {Array} Matched objects
     */
    task.searchTasks = function(text)
    {
        return [];
    };

    /**
     * [function description]
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    task.restoreTask = function(id)
    {
        var task = {};
        return task;
    };

    /**
     * Move task to given list id
     * @param  {Integer} taskId id Int to match in collection[i].id
     * @param  {Integer} listId list id
     * @return {Boolean} True if changed, false on error
     */
    task.changeTaskList = function(taskId, listId)
    {
        return true;
    };

    /**
     * Obtain all task in collection
     * @param  {Integer} listId id Int to match in collection[i].list
     * @return {Array} Matched objects
     */
    task.getTasks = function(listId)
    {
        var tasks = collection;
        return tasks;
    };

    return task;
}]);
