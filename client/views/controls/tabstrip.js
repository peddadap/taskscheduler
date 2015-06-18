Template.tabstriptemplate.rendered = function () {
    $("#tabstrip_here").kendoTabStrip({
        select: onSelect,
        animation: {
            open: {
                effects: "fadeIn"
            }
        }
    }).data("kendoTabStrip").select(1);
}
function onSelect(e) {
    if($(e.item).find("> .k-link").text() == "WEEK3"){
        scheduler.init("scheduler_here", new Date(), "week");

    }
    if($(e.item).find("> .k-link").text() == "DAY4"){
        scheduler.init("scheduler_here", new Date(), "day");

    }
}
Template.createlist.events({
    'click': function() {
        $("[id=groupname]").attr('class','show');
        $("[id=groupname]").focus();
    }}
);
Template.grpname.events({
    'keypress #groupname': function (e,template) {
        if (e.keyCode == 13)
        {
            alert("KEY DOWN ENTER");
            var grname = template.find(".show").value;
            Groups.insert({name: grname});
            $("[id=groupname]").attr('class', 'hide');
        }

    }}
);

if (Meteor.isClient){
    // This code only runs on the client
    Template.tabstriptemplate.helpers({
        groups: function () {
            return Groups.find({});
        }
    });
}

