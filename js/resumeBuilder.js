/*** JSON Data *************************************************************************/
/* Bio object */
var myBio = {
	"name" : "Tim Gamboa",
	"role" : "Web Developer",
	"welcomemsg" : "Welcome to Tim Gamboa's Resume",
	"contacts": {
		"home" : "999-555-1201",
		"mobile" : "999-555-1200",
		"email" : "fake-email@fake-mailservice.com",
		"twitter" : "@faketwitter",
		"github" : "fakegithubhandle",
		"blog" : "fakeblog",
		"location" : "Kansas City, MO"
	},	
	"biopic" : "images/fry.jpg",	
	"skills" : ["Hard Working", "Dedicated", "Adapts to Change"]
}

/* Education object */
var myEducation = {
	"schools": [
	{
		"name": "University of Missouri - Columbia",
		"location": "Columbia, MO",
		"degree": "Bachelors of Science",
		"major": ["Computer Science"],
		"date": "May 1999",
		"url": "http://missouri.edu/"
	}],
	"online": [
	{
		"school": "Udacity",
		"title": "Front-End Web Developer Nanodegree",
		"date": "TBD 2015",
		"url": "http://www.udacity.com/"
	}]
}

/* Work object */
var myWork = {
	"jobs": [
	{
		"employer": "AT&T",
		"title": "Senior - IT Service Management / Web Developer",
		"dates": "Jan 2015 - Present",
		"location": "Kansas City, MO",
		"description": "Currently working as a web developer within the service management organization providing " +
		               "support for internal tools primarily for Incident Management, Problem Management, " +
		               "Change Management, Availability Management and Service Desk groups. In addition to that, " +
		               "I support various other tools including reporting/metrics applications.",
		"url": "http://www.att.com/"
	},
	{
		"employer": "AT&T",
		"title": "Senior - IT Service Management / Incident Manager",
		"dates": "Jan 2011 - Dec 2014",
		"location": "Kansas City, MO",
		"description": "I worked as tier 2 incident manager facilitating high visibility mission critical application " +
					   "incidents across various product lines and platforms. My main goal was to reduce Mean Time To " +
					   "Restoral for incidents, perform post incident reviews to address gaps and prevent reoccurrences.",
		"url": "http://www.att.com/"
	}, 
	{
		"employer": "AT&T",
		"title": "Senior Implementation Manager / Outage Manager",
		"dates": "Sept 2006 - Jan 2011",
		"location": "Kansas City, MO",
		"description": "I worked as a tier 1 outage manager running outages for non-mission critical outage incidents " +
					   "enterprise wide and across all platforms. These are generally applications that do not significant " +
					   "impact to the business. My primary goal was to lead in application restoral as quickly as possible.",
		"url": "http://www.att.com/"
	},
	{
		"employer": "Southwestern Bell/SBC/AT&T",
		"title": "Senior Implementation Manager  / Mainframe Operations",
		"dates": "Sept 1999 - Sept 2006",
		"location": "St. Louis, MO",
		"description": "I provided tier 1 system support for 50+ mainframe systems enterprise wide. This involved technical " +
					   "troubleshooting in response to automated alarms or user reports and working with next level " +
					   " support teams with system maintenance.",
		"url": "http://www.att.com/"
	}]
}

/* Project object */
var myProjects = {
	"project": [
	{
		"title": "CCB",
		"dates": "Apr 2015 - Present",
		"description": "For my current project, I'm working to replace an existing table display with a jqGrid as well as trouble shoot a ckeditor issue.",
		"image": "images/ccb.jpg",
		"url": "http://www.att.com/"
	},
	{
		"title": "RTFS",
		"dates": "Jan 2015 - Apr 2015",
		"description": "As part of this project, I added new functionality to support SLA tracking and metrics for retail store equipment incidents. This was mostly accomplished using backend SQL code.",
		"image": "images/rtfs.jpg",
		"url": "http://www.att.com/"
	}]
}


/*** Function Definitions *************************************************************/
// Header Info
myBio.display = function() {
	var formattedName = HTMLheaderName.replace("%data%", myBio.name);
	var formattedRole = HTMLheaderRole.replace("%data%", myBio.role);
	var formattedBioPic = HTMLbioPic.replace("%data%", myBio.biopic);
	var formattedWelcomeMsg = HTMLWelcomeMsg.replace("%data%", myBio.welcomemsg);
	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);
	$("#header").append(formattedBioPic);
	$("#header").append(formattedWelcomeMsg);
	$("#header").append(HTMLskillsStart);
	for (n=0; n<myBio.skills.length; n++) {
		var formattedSkills = HTMLskills.replace("%data%", myBio.skills[n]);
		$("#skills").append(formattedSkills);
	};
}

//Contacts
myBio.contacts.display = function() {
	var formattedContact = HTMLcontactGeneric.replace("%data%", myBio.contacts.home);
	var formattedMobile = HTMLmobile.replace("%data%", myBio.contacts.mobile);
	var formattedEmail = HTMLemail.replace("%data%", myBio.contacts.email);
	var formattedTwitter = HTMLtwitter.replace("%data%", myBio.contacts.twitter);
	var formattedGithub = HTMLgithub.replace("%data%", myBio.contacts.github);
	var formattedBlog = HTMLblog.replace("%data%", myBio.contacts.blog);
	var formattedLocation = HTMLlocation.replace("%data%", myBio.contacts.location);
	$("#topContacts").append(formattedContact);
	$("#topContacts").append(formattedMobile)
	$("#topContacts").append(formattedEmail);
	$("#topContacts").append(formattedTwitter);
	$("#topContacts").append(formattedGithub);
	$("#topContacts").append(formattedBlog);
	$("#topContacts").append(formattedLocation);
	$("#footerContacts").append(formattedContact);
	$("#footerContacts").append(formattedMobile)
	$("#footerContacts").append(formattedEmail);
	$("#footerContacts").append(formattedTwitter);
	$("#footerContacts").append(formattedGithub);
	$("#footerContacts").append(formattedBlog);
	$("#footerContacts").append(formattedLocation);
}

// Work Experience
myWork.display = function() {
	for (n=0; n<myWork.jobs.length; n++) {
		var formattedEmployer = HTMLworkEmployer.replace("%data%", myWork.jobs[n].employer);
		formattedEmployer = formattedEmployer.replace("#", myWork.jobs[n].url);
		var formattedTitle = HTMLworkTitle.replace("%data%", myWork.jobs[n].title);
		var formattedDates = HTMLworkDates.replace("%data%", myWork.jobs[n].dates);
		var formattedWorklocation = HTMLworkLocation.replace("%data%", myWork.jobs[n].location);
		var formatedDescription = HTMLworkDescription.replace("%data%", myWork.jobs[n].description);
		$("#workExperience").append(HTMLworkStart);
		$(".work-entry:last").append(formattedEmployer + formattedTitle);
		$(".work-entry:last").append(formattedDates);
		$(".work-entry:last").append(formattedWorklocation);
		$(".work-entry:last").append(formatedDescription);	
	};
}

//School
myEducation.schools.display = function() {	
	for(n=0; n<myEducation.schools.length; n++) {
		var formattedschoolName = HTMLschoolName.replace("%data%", myEducation.schools[n].name);
		formattedschoolName = formattedschoolName.replace("#", myEducation.schools[n].url);
		var formattedschoolDegree = HTMLschoolDegree.replace("%data%", myEducation.schools[n].degree);
		var formattedschoolDates = HTMLschoolDates.replace("%data%", myEducation.schools[n].date);
		var formattedschoolLocation = HTMLschoolLocation.replace("%data%", myEducation.schools[n].location);
		var formattedschoolMajor = HTMLschoolMajor.replace("%data%", myEducation.schools[n].major);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedschoolName + formattedschoolDegree);
		$(".education-entry:last").append(formattedschoolDates);
		$(".education-entry:last").append(formattedschoolLocation);
		$(".education-entry:last").append(formattedschoolMajor);
	};	
}

myEducation.online.display = function() {
	$("#education").append(HTMLonlineClasses);
	for(n=0; n<myEducation.online.length; n++) {	
		var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", myEducation.online[n].title);
		formattedOnlineTitle = formattedOnlineTitle.replace("#", myEducation.online[n].url);
		var formattedSchool = HTMLonlineSchool.replace("%data%", myEducation.online[n].school);
		var formattedDates = HTMLonlineDates.replace("%data%", myEducation.online[n].date);
		var formattedOnlineURL = HTMLonlineURL.replace("%data%", myEducation.online[n].url);
		formattedOnlineURL = formattedOnlineURL.replace("#", myEducation.online[n].url);
		$("#education").append(HTMLschoolStart);
		$(".education-entry:last").append(formattedOnlineTitle + formattedSchool);
		$(".education-entry:last").append(formattedDates);
		$(".education-entry:last").append(formattedOnlineURL);
	};
}

//Projects
myProjects.display = function() {
	for(n=0; n<myProjects.project.length; n++) {
		var formattedProjectTitle = HTMLprojectTitle.replace("%data%", myProjects.project[n].title);
		formattedProjectTitle = formattedProjectTitle.replace("#", myProjects.project[n].url);
		var formattedProjectDates = HTMLprojectDates.replace("%data%", myProjects.project[n].dates);
		var formattedProjectDescription = HTMLprojectDescription.replace("%data%", myProjects.project[n].description);
        var formattedProjectImage = HTMLprojectImage.replace("%data%", myProjects.project[n].image);
		$("#projects").append(HTMLprojectStart);
		$(".project-entry:last").append(formattedProjectTitle);
		$(".project-entry:last").append(formattedProjectDates);
		$(".project-entry:last").append(formattedProjectDescription);
		$(".project-entry:last").append(formattedProjectImage);
	};
}

//Map
function displayMap() {
	$("#mapDiv").append(googleMap);
};

//This function invokes the entire read less/more functionality to the resume
function descriptionMoreLess() {
	var desc = $(".work-entry").find("p");
	var n = 0;
	desc.each(function(n) {
		var oldHTML;
		var readLess = '<span id="workdesc' + n + '"' + 'class="moreless" onclick="descriptionLess(' + n  + ')"> Read less...</span>';
		oldHTML = $(this).html();
		$(this).html(oldHTML + readLess);
		n++;
	});
}

//This function "minimizes" the amount of description text
function descriptionLess(descID) {
	var id = "workdesc" + descID;
	var parentElement = $('#' + id).parent();
	var lessText = "<br>" + parentElement.text().slice(0,55) + ".....";
	var moreText = '<span id="' + id + '"' + 'class="moreless" onclick="descriptionMore(' + descID + ')">Read more</span>';
	parentElement.html(lessText + moreText);
}

//This function returns all of the description text back to the resume
function descriptionMore(descID) {
	var id = "workdesc" + descID;
	var parentElement = $('#' + id).parent();
	var moreText = "<br>" + myWork.jobs[descID].description;
	var lessText = '<span id="' + id + '"' + 'class="moreless" onclick="descriptionLess(' + descID + ')"> Read less...</span>';
	parentElement.html(moreText + lessText);
}

/*** Called Functions ******************************************************************/
myProjects.display();
myBio.display();
myWork.display();
myEducation.schools.display();
displayMap();
myEducation.online.display();
myBio.contacts.display();
descriptionMoreLess();

