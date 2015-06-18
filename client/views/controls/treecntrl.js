var data = [
    {
        label: 'node1', id: 1,
        children: [
            { label: 'child1', id: 2 },
            { label: 'child2', id: 3 }
        ]
    },
    {
        label: 'child2', id: 4,
        children: [
            { label: 'child4', id: 5 }
        ]
    }
];

Template.treecntrl.rendered = function () {
    $('#tree1').tree({
        data: data,
        autoOpen: true,
        dragAndDrop: true
    });
}