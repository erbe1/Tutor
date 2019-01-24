
function Link(linkadress, title, category, subCategory, tag, description, embedded = false) {
    this.Linkadress = linkadress;
    this.Titel = title;
    this.Category = category;
    this.SubCategory = subCategory;
    this.Tag = tag;
    this.Description = description;
    this.Embedded = embedded;
}


let links = [
    new Link("https://fontawesome.com/", "Font Awesome", "Frontend", "Fonts", ["Fonts", "Frontend", "Style", "Styling"], "Awesome fonts for awesome developers"),
    new Link("https://getbootstrap.com/", "Bootstrap", "Frontend", "Styling", ["Frontend", "Styling", "Bootstrap", "Layout", "Css"], "Bootstrap is an open source toolkit for developing with HTML, CSS, and JS."),
    new Link("https://www.youtube.com/watch?v=gwD9awr3NNo", "Linq video tutorial", "Backend", "C#", ["Linq", "Video"], "Tutorial for learning queary-expressions with Linq", true),
    new Link("https://www.codecademy.com/learn/learn-git", "Tutorial  GIT", "Version control", "Git", ["Git"], "Tutorial for the version control system GIT"),
    new Link("https://www.youtube.com/watch?v=0pUVC3trvHc", "What's New in Entity Framework Core 2.0", "DB", "EF Core 2.0", ["EF", "DB", "EF Core", "Entity Framework", "Database"], "Video presentation from the microsoft-team on whats new in EF Core 2.0 and what the team has planned for upcoming releases.", true),
    new Link("https://www.learncs.org/", "Learn C#", "Backend", "C#", ["C#", "Backend", "Interactive"], "Free interactive C# tutorial"),
    new Link("https://csharpskolan.se/", "C# skolan", "Backend", "C#", ["C#", "Svenska", "Backend"], "Utbildningsmaterial i form av instruktionsvideor och artiklar på svenska"),
    new Link("https://www.learnjavaonline.org/", "Learn Java", "Backend", "Java", ["Java", "Backend", "Interactive"], "Free interactive Java tutorial"),
    new Link("https://www.codecademy.com/learn/learn-java", "Codeacademy", "Backend", "Java", ["Java", "Backend", "Interactive"], "Fundamental programming concepts, including object-oriented programming (OOP) using Java"),
    new Link("https://www.techbeamers.com/python-tutorial-step-by-step/", "TechBeamers", "Backend", "Python", ["Python", "Backend", "Free"], "This Python tutorial is a one-stop programming guide for all beginners"),
];


let buttons = {
    Backend: document.getElementById('Backend'),
    Frontend: document.getElementById('Frontend'),
    DB: document.getElementById('DB'),
    Software: document.getElementById('Software'),
    VersionControl: document.getElementById('VersionControl')
};


buttons.Backend.addEventListener('click', () => {
    ShowSubcategories('Backend');
})
buttons.Frontend.addEventListener('click', () => {
    ShowSubcategories('Frontend');
})
buttons.Frontend.addEventListener('click', () => {
    ShowSubcategories('DB');
})
buttons.Frontend.addEventListener('click', () => {
    ShowSubcategories('Software');
})
buttons.Frontend.addEventListener('click', () => {
    ShowSubcategories('Version Control');
})

let subcategoriesDiv = document.getElementById('subcategories');
let linksDiv = document.getElementById('links');


function ShowSubcategories(Category) {

    let linksInThisCategory = links.filter(l => l.Category == Category);
    console.log(linksInThisCategory);
    for (var i = 0; i < linksInThisCategory.length; i++) {

        let subcategoryButton = document.createElement('button');
        subcategoryButton.classList.add("btn", "btn-primary", "btn-lg", "m-2");
        subcategoryButton.appendChild(document.createTextNode(linksInThisCategory[i].SubCategory)); // lägger till en text med subkategorinamnet

        subcategoriesDiv.appendChild(subcategoryButton);

        subcategoryButton.Category = Category;
        subcategoryButton.SubCategory = linksInThisCategory[i].SubCategory;


        subcategoryButton.addEventListener('click', () => {

            ShowLinks(subcategoryButton.Category, subcategoryButton.SubCategory);
        })
    }
}

function ShowLinks(Category, SubCategory) {

    let linksInThisSubCategory = links.filter(l => l.Category == Category && l.SubCategory == SubCategory);

    for (var link of linksInThisSubCategory) {

        let linkElement = createLinkElementToDisplay(link);

        linksDiv.appendChild(linkElement);

    }
}

function createLinkElementToDisplay(link) {

    let elementToDisplay = document.createElement('div');

    let title = document.createTextNode(link.Titel);
    elementToDisplay.appendChild(title);

    let linkAdress = document.createElement('a');
    linkAdress.appendChild(document.createTextNode(link.Linkadress));
    elementToDisplay.appendChild(linkAdress);



    return elementToDisplay;
}