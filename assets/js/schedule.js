// get modal
var modal = document.getElementById('infoModal');
let eventsModel = [];


$(function(){
    eventsModel = scheduleData;

    function showGenericModal(title, message) {
        // set content to passed parameters
        $(".modal-title").empty();
        $(".modal-body").empty();
        $(".modal-title").html(title);
        $(".modal-body").html(message);

        // $('#infoModal').modal('show');
       $("#infoModal").modal({
            //disable clicking on backdrop to close
            backdrop: 'static',
            //disable using the keyboard to close
            keyboard: false
        });

    }

    function getEventById(id) {
        let eventIdx = _.findIndex(eventsModel, function(events) {
            return events.id === id;
        });

        if (eventIdx != -1) return _.cloneDeep(eventsModel[eventIdx]);
        else null;
    }
    
    $(".table-responsive").on("click", ".sEvent", function(e) {
        e.stopPropagation();
        
        let clickedEvent = getEventById($(this).attr('data-id'));
        
        let modalTemplate = _.template(
            '<h3>Time: </h3> <%- scheduleData.time %><br>' +
            '<h3>Details: </h3> <%- scheduleData.details %>');
        
        // show employee detail 
        showGenericModal(
            clickedEvent.event,
            modalTemplate({ 'scheduleData':clickedEvent })
        )});  
  });





// Data
  let scheduleData = [
    {
        id: "breakfast1",
        event: "Breakfast",
        time: "09:00 - 9:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "welcome",
        event: "Opening and Welcome - Mingling",
        time: "09:30 - 09:45",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "ignite2",
        event: "Ignite Talk: Aman Badhwar",
        time: "09:45 - 10:15",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "coffee1",
        event: "Coffee Break",
        time: "10:15 - 10:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "pitch",
        event: "Project Pitches",
        time: "10:30 - 11:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "teaming",
        event: "Teaming and Hacking",
        time: "11:00 - 12:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "lunch1",
        event: "Lunch",
        time: "12:30 - 13:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "hack1T",
        event: "Open Hacking",
        time: "13:30 - 16:00",
        details:"Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "coffee2",
        event: "Coffee Break",
        time: "16:00 - 16:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "hack2T",
        event: "Open Hacking",
        time: "16:30 - 19:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "can-lect",
        event: "Canadian Association for Neuroscience 2019 Public Lectures",
        time: "18:30 - 20:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "osbee",
        event: "OSBee (3 Brewers)",
        time: "20:00 - 23:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "breakfast2",
        event: "Breakfast",
        time: "09:00 - 09:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "ignite1",
        event: "Ignite: Paul Pavlidis",
        time: "09:30 - 10:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "hack1W",
        event: "Open Hacking",
        time: "10:00 - 12:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "unconf-talks",
        event: "Unconference Talks",
        time: "11:30 - 12:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "lunch2",
        event: "Lunch",
        time: "12:30 - 13:30",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "hack2W",
        event: "Open Hacking",
        time: "13:30 - 15:45",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "coffee3",
        event: "Coffee Break",
        time: "15:45 - 16:15",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "wrap-up",
        event: "Wrap-up",
        time: "16:15 - 16:45",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "can-acn",
        event: "CAN-ACN Starts at the Sheraton",
        time: "17:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "can-keynote",
        event: "CAN Keynote Lecture",
        time: "17:15 - 18:15",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }, {
        id: "can-open",
        event: "CAN Opening Reception",
        time: "18:30 - 20:00",
        details: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsum provident fugit repellat voluptatum fugiat, vero beatae consequuntur ratione sed molestiae distinctio porro commodi vitae illo voluptates quos illum alias corrupti!"
    }
];
  