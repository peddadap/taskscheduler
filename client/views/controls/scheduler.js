 Template.schedulertemplate.rendered = function () {

    scheduler.init("scheduler_here", new Date(), "week");

     var taskCursor = Tasks.find();
     taskCursor.forEach(function(task) {
         scheduler.parse([
             {text: task.name, start_date: task.startdate, end_date: task.enddate}
         ], "json");
     });

     $("#scheduler_here").kendoDropTarget({
         dragenter: droptargetOnDragEnter,
         dragleave: droptargetOnDragLeave,
         drop: droptargetOnDrop
     });

     function droptargetOnDragEnter(e) {
     }

     function droptargetOnDragLeave(e) {
     }

     function droptargetOnDrop(e) {

         var drop = scheduler.getActionData(e);

         //node is dropped on a valid scheduler date
         if (drop.date) {
             scheduler.parse([
                 {text: e.target.innerText, start_date: drop.date, end_date: new Date(drop.date.getTime() + 36000)}
             ], "json");
             Tasks.insert({
                 name: e.target.innerText,
                 startdate: drop.date,
                 enddate: new Date(drop.date.getTime() + 36000)
             });
         }
     }
  }