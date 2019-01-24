$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});


function Link(linkadress, title, category, subCategory, embedded = false) {
    Linkadress = linkadress;
    Titel = title;
    Category = category;
    SubCategory = subCategory;
    Embedded = embedded;
}

let links = [
    new {
        Linkadress: "https://fontawesome.com/",
        Title = "Font Awesome",
        Category =["Frontend"],
        SubCategory =["Fonts"],
        Embedded = false
    },

];

let links = [
    Link("https://fontawesome.com/", "Font Awesome", ["Frontend"], ["Fonts"]),
    Link("https://fontawesome.com/", "Font Awesome", ["Frontend"], ["Fonts"]),
];


