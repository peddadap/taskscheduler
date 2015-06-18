Template.taskcreatortemplate.rendered = function() {
    $("#draggable").kendoDraggable({
        hint: function() {
            return $("#draggable").clone().css({
                "opacity": 0.6,
                "background-color": "#0cf"
            });
        },
        dragstart: draggableOnDragStart,
        drag: draggableOnDrag,
        dragend: draggableOnDragEnd,
        dragcancel: draggableOnCancel
    });

    $("#todaysdatediv").append("<p>" + new Date().getDate() + " " +
        ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][(new Date()).getDay()] + "</p>")
        .css('fontSize', '20px');

    function draggableOnDragStart(e) {
    }

    function draggableOnDrag(e) {
    }

    function draggableOnCancel(e) {
    }

    function draggableOnDragEnd(e) {
    }
}

Template.taskcreatortemplate.events({

    'click #tasktextpara': function(){
        $("#tasktextbox").show();
        $("#tasktextbox").focus();
        $("#tasktextpara").hide();
    },

    'focusout #tasktextbox': function(){
        $("#tasktextbox").hide();

        $("#tasktextpara").show();

        if($("#tasktextbox").val().length>0){
            $("#tasktextlabel").text($("#tasktextbox").val());
        }
    }
});