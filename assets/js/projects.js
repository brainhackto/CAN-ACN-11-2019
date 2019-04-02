$(function() {
    
    $.getJSON("assets/data/submissions.json", function(data){
        let submissions = [];
        $.each(data, function(i,val){
            submissions.push("<h3>" + val.project_title + "</h3>" +
            "<p>" + val.project_desc + "</p>" + "<p><b>Name: </b>" + val.user_name + "</p>" +
            "<p><b>Contact: </b>" + val.contact_address + "</p><p><b>GitHub: </b>" + val.github_link + "</p>" +
            "<p><b>Institution/Company: </b>" + val.affiliation + "</p><p><b>Areas of Interest: </b>" + val.area_of_interest + "</p>" +
            "<p><b>Desired Skills: </b>" + val.desired_skills + "</p><p><b>Goals: </b>" + val.goals + "</p><br><hr>");
        });
        $("<div/>", {
            "class": "prj",
            html: submissions.join("")
        }).appendTo("#projects");
    });
})