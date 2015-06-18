// pages and subcategories of the given category pages
Meteor.publish('categoryChildren', function(tasks) {
    return Activities.find({name: {$in: tasks}},
        {fields: {name: 1, tasks: 1, root: 1}});
});