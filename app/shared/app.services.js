"use strict";

app.service("Task", ["_", "$rootScope", "$window", function(_, $rootScope, $window)
{
    /**
     * [preprocesed description]
     * @type {String}
     */
    var preprocesed = "";

    /**
     * Private property
     *
     * The task collection
     * Every object has the following attributes:
     * 		id {Integer} Autoincrement
     * 		text {String} The text to display
     * 		status {Integer} false=incomplete, true=complete
     * 		list {Integer} n:1 relation for the list catalog
     * @type {Array}
     */
    var collection = [
        {
            "id": 0,
            "text": "Sample text for To-Do list",
            "stat": false,
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
    var addTask = function(text)
    {
        // Autoincrement id value based on active and archived tasks
        var id = collection.length + collector.length;
        collection.push({
            "id": id,
            "text": text,
            "stat": false,
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
    var archiveTask = function(id)
    {
        // Store task in collector
        var task = getTask(id);
        collector.push(task);
        // Remove task from collection
        var index = getTask(id, true);
        collection.splice(collection[index], 1);

        return task;
    };

    /**
     * Public method
     *
     * Toggle completion status of a task from collection
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    var toggleCompleteTask = function(id)
    {
        var task = getTask(id);
        task.stat = !task.stat;
        return task;
    };

    /**
     * Public method
     *
     * Obtain an specific task in collection
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    var getTask = function(id, index)
    {
        if(index)
            return _.findIndex(collection, { "id": id });

        return _.find(collection, { "id": id });
    };

    /**
     * Search tasks in the collection by given text
     * @param  {String} text String to match in collection[i].text
     * @return {Array} Matched objects
     */
    var searchTasks = function(text)
    {
        return _.find(collection, { "text": text });
    };

    /**
     * [function description]
     * @param  {Integer} id Int to match in collection[i].id
     * @return {Object} task object
     */
    var restoreTask = function(id)
    {
        // Restore task on collection
        var task = _.find(collector, { "id": id });
        collector.push(task);
        // Remove task from collector
        var index = _.findIndex(collector, { "id": id });
        collection.splice(collection[index], 1);

        return task;
    };

    /**
     * Move task to given list id
     * @param  {Integer} taskId id Int to match in collection[i].id
     * @param  {Integer} listId list id
     * @return {Object} task object
     */
    var changeTaskList = function(taskId, listId)
    {
        var task = getTask(taskId);
        task.list = listId;
        return task;
    };

    /**
     * Obtain all task in collection
     * @param  {Integer} listId id Int to match in collection[i].list
     * @return {Array} Matched objects
     */
    var getTasks = function(listId)
    {
        return collection;
    };


    $rootScope.$watch(function() {
        return collection;
    }, function(newCollection, oldCollection)
    {
        var result = [];
        for(var i in newCollection) {
            var fig = {};
            for(var j in newCollection[i]) {
                if(newCollection[i].hasOwnProperty(j) && j !== "$$hashKey") {
                    if(!oldCollection[i] || newCollection[i][j] !== oldCollection[i][j]) {
                        fig.id = newCollection[i].id;
                        fig[j] = newCollection[i][j];
                    }
                }
            }
            if(!_.isEmpty(fig))
                result.push(fig);
        }
        console.log("Collection changed: ", JSON.stringify(result), collection.length, collector.length);
        preprocesed = $window.btoa(JSON.stringify(collection + collector));
        //console.log(preprocesed, [collection + collector]);
    },
    true);

    return {
        getTasks: getTasks,
        changeTaskList: changeTaskList,
        restoreTask: restoreTask,
        searchTasks: searchTasks,
        getTask: getTask,
        addTask: addTask,
        archiveTask: archiveTask,
        toggleCompleteTask: toggleCompleteTask
    };
}]);
