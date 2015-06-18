Template.sideTreeTemplate.treeItems = function() {

    var items = Activities.find({"parent" : null});
    console.log("treeItems length=" + items.count());
    items.forEach(function(item){
        item.newAtt = "Item";
        getChildren(item);
    });
    return items;

};


var getChildren = function(parent) {
    console.log("sidetree.getChildren called");
    var items = Activities.find({"parent" : parent._id});
    if (items.count() > 0) {
        parent.hasChildren = true;
        parent.children = items;
        console.log(
            "children count for folder " + parent.name +
            "=" + items.count() + ",hasChildren=" + parent.hasChildren
    );
        items.forEach(function(item) {
            getChildren(item);
        });
    }
};