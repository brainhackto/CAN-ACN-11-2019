$(function() {
    
    $.getJSON("assets/data/submissions.json", function(data){
        let submissions = [];
        $.each(data, function(key,val){
            submissions.push("<h3>" + data.project_title + "</h3>" +
            "<p>" + data.project_desc + "</p>" + "<p><b>Name: </b>" + data.user_name + "</p>" +
            "<p><b>Contact: </b>" + data.contact_address + "</p><p><b>GitHub: </b>" + data.github_link + "</p>" +
            "<p><b>Institution/Company: </b>" + data.affiliation + "</p><p><b>Areas of Interest: </b>" + data.area_of_interest + "</p>" +
            "<p><b>Desired Skills: </b>" + data.desired_skills + "</p><p><b>Goals: </b>" + data.goals + "</p><br>");
        });
        $("<div/>", {
            "class": "prj",
            html: submissions.join("")
        }).appendTo("#projects");
    });
})