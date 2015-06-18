// get the count of high level activity categories
Template.mwCategories.categoriesExist = function() {
    return Categories.find().fetch().length;
}
// list all activity categories
Template.mwCategories.categories = function() {
    return Categories.find();
}
// scheduable tasks within each activity
Template.mwCategories_tasks.tasks = function() {
    return Activities.find({parent:this.name},{fields:{name:1,tasks:1}});
}

Template.mwCategories_tasks.activity = function() {
    return Activities.find({category:this.name,parent:null},{fields:{name:1}});
}

Template.mwCategories_tasks.hasSubTasks = function(){

    return Activities.find({parent:this.name}).fetch().length
}

Template.mwCategories_tasks.hasChildren = function() {
    var name = this.name;
    return Activities.find({parent: name},
        {fields: {name: 1, tasks: 1}, sort: { name: 1}}).fetch().length;
}

var categoryChildrenSub;
Session.setDefault('categoryChildren', []);
Deps.autorun(function() {
    var cats = Session.get('categoryChildren');
    categoryChildrenSub = Meteor.subscribe('categoryChildren', cats);
});

Template.mwCategories_tasks.isReady = function() {
    return categoryChildrenSub.ready();
}

Template.mwCategories_tasks.isOpen = function() {
    var name = this.name;
    bool= isolateValue(function () {
        return _.contains(Session.get('categoryChildren'), name);
    return bool;
    });
}

Template.mwCategories.events({
    'click span.catOpen': function(event) {
        var name = this.name;
        var open = Session.get('categoryChildren');
        var idx = open.indexOf(name);
        if (idx == -1)
            open.push(name);
        else
            open.splice(idx, 1);
        Session.set('categoryChildren', open);
    }
});