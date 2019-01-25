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
buttons.DB.addEventListener('click', () => {
    ShowSubcategories('DB');
})
buttons.Software.addEventListener('click', () => {
    ShowSubcategories('Software');
})
buttons.VersionControl.addEventListener('click', () => {
    ShowSubcategories('Version control');
})

let subcategoriesDiv = document.getElementById('subcategories');
let linksDiv = document.getElementById('links');


function ShowSubcategories(Category) {
    while (subcategoriesDiv.firstChild) {
subcategoriesDiv.removeChild(subcategoriesDiv.firstChild)
    }
    linksDiv.classList.add()
    let linksInThisCategory = links.filter(l => l.Category == Category);

    const uniqeSubCategories = [];
    const map = new Map();
    for (const item of linksInThisCategory) {
        if (!map.has(item.SubCategory)) {
            map.set(item.SubCategory, true);    // set any value to Map
            uniqeSubCategories.push(item.SubCategory);
        }
    }
    //let linksInThisCategory = links.filter(l => l.Category);
    for (let i = 0; i < uniqeSubCategories.length; i++) {

        let subcategoryButton = document.createElement('button');
        subcategoryButton.classList.add("btn", "btn-primary", "btn-lg", "m-2");
        subcategoryButton.appendChild(document.createTextNode(uniqeSubCategories[i])); // lägger till en text med subkategorinamnet

        subcategoriesDiv.appendChild(subcategoryButton);

        subcategoryButton.Category = Category;
        subcategoryButton.SubCategory = uniqeSubCategories[i];

        subcategoryButton.addEventListener('click', () => {
            console.log(i);
            ShowLinks(subcategoryButton.Category, subcategoryButton.SubCategory);
        })
    }
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function ShowLinks(Category, SubCategory) {
    while (linksDiv.firstChild) {
        linksDiv.removeChild(linksDiv.firstChild)
    }
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
    linkAdress.href = link.Linkadress;
    linkAdress.appendChild(title);
    elementToDisplay.appendChild(linkAdress);

    return elementToDisplay;
}
