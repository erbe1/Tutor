$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


function Link(linkadress, title, category, subCategory, tag, description, embedded = false) {
    Linkadress = linkadress;
    Titel = title;
    Category = category;
    SubCategory = subCategory;
    Tag = tag;
    Description = description;
    Embedded = embedded;
}

let links = [
    Link("https://fontawesome.com/", "Font Awesome", ["Frontend"], ["Fonts"]),
    Link("https://fontawesome.com/", "Font Awesome", ["Frontend"], ["Fonts"]),





    Link("https://www.learncs.org/", "Learn C#", ["Backend"], ["C#"], ["C#", "Backend", "Interactive"], "Free interactive C# tutorial"),
    Link("https://csharpskolan.se/", "C# skolan", ["Backend"], ["C#"], ["C#", "Svenska", "Backend"], "Utbildningsmaterial i form av instruktionsvideor och artiklar på svenska"),
    Link("https://www.learnjavaonline.org/"), "Learn Java", ["Backend"], ["Java"], ["Java", "Backend", "Interactive"], "Free interactive Java tutorial"),
    Link("https://www.codecademy.com/learn/learn-java"), "Codeacademy", ["Backend"], ["Java"], ["Java", "Backend", "Interactive"], "Fundamental programming concepts, including object-oriented programming (OOP) using Java"),
    Link("https://www.techbeamers.com/python-tutorial-step-by-step/"), "TechBeamers", ["Backend"], ["Python"], ["Python", "Backend", "Free"], "This Python tutorial is a one-stop programming guide for all beginners"),



];


