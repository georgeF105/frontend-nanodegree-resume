/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
  "name":"George Francis",
  "role":"Developer",
  "contacts": {
    "email":"georgefrancis105@gmail.com",
    "mobile":"0276352933",
    "github":"georgeF105",
    "location":"Wellington"
  },
  "pictureURL":"images/george.png", 
  "welcomeMessage":"Welcome to my bio",
  "skills":["Greatness","Programing","Electrical Design","Embedded Design"]
}

var work = {
  "jobs":[
    {
      "employer":"Fraser Fire and Rescue",
      "title":"Design Engineer",
      "location":"Wellington",
      "dates":"2008 - 2016",
      "description":"Responsible for producing designs and working drawings based on customer specifications."
    }
  ]
}

var projects = {
  "projects":[
    {
      "title":"Fire Fighting Monitor Controller",
      "dates":"2015",
      "description":"Development of remote control firefighting nozzle",
      "images":""
    }
  ]
}

projects.display = function(){
  for(key in this.projects){
    $("#projects").append(HTMLprojectStart);
    $(".project-entry:last").append(HTMLprojectTitle.replace("%data%", this.projects[key].title));
    $(".project-entry:last").append(HTMLprojectDates.replace("%data%", this.projects[key].dates));
    $(".project-entry:last").append(HTMLprojectDescription.replace("%data%", this.projects[key].description));
    $(".project-entry:last").append(HTMLprojectImage.replace("%data%", this.projects[key].images));

  }
  // console.log(this.projects[0].title);
}
projects.display();
var education = {
  "schools": [
    {
      "name":"Massey University",
      "location":"Wellington",
      "degree":"BE (Not Completed)",
      "major":["Mechatronics"],
      "dates":"2006 - 2008"
    },
    {
      "name":"Wellington Institute of Technology",
      "location":"Wellington",
      "degree":"BE(tech)",
      "major": ["Electronics"],
      "dates":"2013 - 2015"
    }
  ]
}


//$("#main").append(internationalizeButton);

function displayBio(){
  $("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
  $("#header").prepend(HTMLheaderName.replace("%data%",bio.name));

  $("#topContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#topContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#topContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#topContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));


  $("#header").append(HTMLbioPic.replace("%data%",bio.pictureURL));
  $("#header").append(HTMLwelcomeMsg.replace("%data%",bio.welcomeMessage));


  if(bio.skills.length > 0){
    $("#header").append(HTMLskillsStart);
    for(var i = 0; i < bio.skills.length; i++){
      $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
    }
    
  }

  $("#footerContacts").append(HTMLmobile.replace("%data%",bio.contacts.mobile));
  $("#footerContacts").append(HTMLemail.replace("%data%",bio.contacts.email));
  $("#footerContacts").append(HTMLgithub.replace("%data%",bio.contacts.github));
  $("#footerContacts").append(HTMLlocation.replace("%data%",bio.contacts.location));
}
displayBio();



function displayWork(){
  for(key in work.jobs){
    $('#workExperience').append(HTMLworkStart);
    var formattedEmployer = HTMLworkEmployer.replace("%data%",work.jobs[key].employer);
    var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[key].title);
    var formattedLocation = HTMLworkLocation.replace("%data%",work.jobs[key].location);
    var formattedDates = HTMLworkDates.replace("%data%",work.jobs[key].dates);
    var formattedDescription = HTMLworkDescription.replace("%data%",work.jobs[key].description);

    $(".work-entry:last").append(formattedEmployer.concat(formattedTitle));
    $(".work-entry:last").append(formattedDates);
    $(".work-entry:last").append(formattedLocation);
    $(".work-entry:last").append(formattedDescription);
  }
}
displayWork();
function inName(oldName){
  var names = oldName.split(" ");
  console.log(names[0][0]);

  names[0]= names[0].slice(0,1).toUpperCase() + names[0].slice(1).toLowerCase();

  names[1] = names[1].toUpperCase();
  // console.log(names.join(" "))
  return names.join(" ");
}
/*
$(document).click(function(loc){

});*/

/*
formattedName = HTMLheaderName.replace("%data%", bio.name);
formattedRole = HTMLheaderRole.replace("%data%", bio.role);
*/
