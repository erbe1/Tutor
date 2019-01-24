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
    Link("https://fontawesome.com/", "Font Awesome", ["Frontend"], ["Fonts"], ["Fonts", "Frontend", "Style", "Styling"], "Awesome fonts for awesome developers"),
    Link("https://getbootstrap.com/", "Bootstrap", ["Frontend"], ["Styling"], ["Frontend", "Styling", "Bootstrap", "Layout", "Css"], "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS."),
    Link("https://www.youtube.com/watch?v=gwD9awr3NNo", "Linq video tutorial", ["Backend"], ["C#"], ["Linq", "Video"], "Tutorial for learning queary-expressions with Linq", true),
    Link("https://www.codecademy.com/learn/learn-git", "Tutorial  GIT", ["Version control"], ["Git"], ["Git"], "Tutorial for the version control system GIT"),
    Link("https://www.youtube.com/watch?v=0pUVC3trvHc", "What's New in Entity Framework Core 2.0", ["DB"], ["EF Core 2.0"], ["EF", "DB", "EF Core", "Entity Framework", "Database"], "Video presentation from the microsoft-team on whats new in EF Core 2.0 and what the team has planned for upcoming releases.", true),
Link("https://www.learncs.org/", "Learn C#", ["Backend"], ["C#"], ["C#", "Backend", "Interactive"], "Free interactive C# tutorial"),
    Link("https://csharpskolan.se/", "C# skolan", ["Backend"], ["C#"], ["C#", "Svenska", "Backend"], "Utbildningsmaterial i form av instruktionsvideor och artiklar på svenska"),
    Link("https://www.learnjavaonline.org/"), "Learn Java", ["Backend"], ["Java"], ["Java", "Backend", "Interactive"], "Free interactive Java tutorial"),
    Link("https://www.codecademy.com/learn/learn-java"), "Codeacademy", ["Backend"], ["Java"], ["Java", "Backend", "Interactive"], "Fundamental programming concepts, including object-oriented programming (OOP) using Java"),
    Link("https://www.techbeamers.com/python-tutorial-step-by-step/"), "TechBeamers", ["Backend"], ["Python"], ["Python", "Backend", "Free"], "This Python tutorial is a one-stop programming guide for all beginners"),


];


