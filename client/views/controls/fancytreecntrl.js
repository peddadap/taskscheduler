Template.treeCntrl.rendered= function(){
    $("#tree").fancytree({
        extensions: ["table","dnd"],
        checkbox: true,
        table: {
            indentation: 20,      // indent 20px per node level
            nodeColumnIdx: 2,     // render the node title into the 2nd column
            checkboxColumnIdx: 0  // render the checkboxes into the 1st column
        },
       // source: function(){ return Activities.find().fetch();},
        source:ActArrary,
        renderColumns: function(event, data) {
        var node = data.node;
            $tdList = $(node.tr).find(">td");
        // (index #0 is rendered by fancytree by adding the checkbox)
        $tdList.eq(1).text(node.getIndexHier()).addClass("alignRight");
        // (index #2 is rendered by fancytree)
        $tdList.eq(3).text(node.key);
        $tdList.eq(4).html("<input type='checkbox' name='like' value='" + node.key + "'>");
        },
        dnd: {
            autoExpandMS: 400,
            draggable: { // modify default jQuery draggable options
                zIndex: 1000,
                scroll: false,
                revert: "invalid"
            },
            preventVoidMoves: true, // Prevent dropping nodes 'before self', etc.
            preventRecursiveMoves: true, // Prevent dropping nodes on own descendants
            dragStart: function(node, data) {
                // This function MUST be defined to enable dragging for the tree.
                // Return false to cancel dragging of node.
//    if( data.originalEvent.shiftKey ) ...
                return true;
            },
            dragEnter: function(node, data) {
                /* data.otherNode may be null for non-fancytree droppables.
                 * Return false to disallow dropping on node. In this case
                 * dragOver and dragLeave are not called.
                 * Return 'over', 'before, or 'after' to force a hitMode.
                 * Return ['before', 'after'] to restrict available hitModes.
                 * Any other return value will calc the hitMode from the cursor position.
                 */
                // Prevent dropping a parent below another parent (only sort
                // nodes under the same parent):
//    if(node.parent !== data.otherNode.parent){
//      return false;
//    }
                // Don't allow dropping *over* a node (would create a child). Just
                // allow changing the order:
//    return ["before", "after"];
                // Accept everything:
                return true;
            },
            dragOver: function(node, data) {
            },
            dragLeave: function(node, data) {
            },
            dragStop: function(node, data) {
            },
            dragDrop: function(node, data) {
                // This function MUST be defined to enable dropping of items on the tree.
                // hitMode is 'before', 'after', or 'over'.
                // We could for example move the source to the new target:
                data.otherNode.moveTo(node, data.hitMode);
            },
            lazyLoad: function(event, data) {
                data.result = {url: "ajax-sub2.json"}
            }

        }
    });
}

Template.treeCntrl.helpers({
    data: function(){
            return Activities.find().fetch();

        }
})
