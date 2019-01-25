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
    new Link("https://code.visualstudio.com/", "Visual Studio Code", "Software", "Software", ["Microsoft", "Visual Studio Code", "Software"], "Free code editing software"),
];


let buttons = {
    Backend: document.getElementById('Backend'),
    Frontend: document.getElementById('Frontend'),
    DB: document.getElementById('DB'),
    Software: document.getElementById('Software'),
    VersionControl: document.getElementById('VersionControl'),
    SearchButton: document.getElementById('searchButton'),
    SearchField: document.getElementById('searchField')

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
buttons.SearchButton.addEventListener('click', () => {
    showSearchResults(buttons.SearchField.value)
})
buttons.SearchField.addEventListener('change', () => {
    showSearchResults(buttons.SearchField.value)
})

let subcategoriesDiv = document.getElementById('subcategories');
let linksDiv = document.getElementById('links');

let aboutThisAwesomePage = document.getElementById('about');

let logo = document.getElementById('logo');
logo.addEventListener('click', () => {
    aboutThisAwesomePage.classList.remove("d-none");
    aboutThisAwesomePage.classList.add("d-block");

    subcategoriesDiv.classList.remove("d-block");
    subcategoriesDiv.classList.add("d-none");

    linksDiv.classList.remove("d-block");
    linksDiv.classList.add("d-none");
});

function showSearchResults(searchstring) {
    //linksDiv.classList.add("d-block");
    ShowLinks(null, null, searchstring);
}



function ShowSubcategories(Category) {
    aboutThisAwesomePage.classList.remove("d-block");
    aboutThisAwesomePage.classList.add("d-none");

    subcategoriesDiv.classList.remove("d-none");
    subcategoriesDiv.classList.add("d-block");

    linksDiv.classList.remove("d-block");
    linksDiv.classList.add("d-none");


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
        subcategoryButton.classList.add("d-inline-block");

        subcategoryButton.appendChild(document.createTextNode(uniqeSubCategories[i])); // lägger till en text med subkategorinamnet

        subcategoriesDiv.appendChild(subcategoryButton);

        subcategoryButton.Category = Category;
        subcategoryButton.SubCategory = uniqeSubCategories[i];

        subcategoryButton.addEventListener('click', () => {
            ShowLinks(subcategoryButton.Category, subcategoryButton.SubCategory);
        })
    }
}
function onlyUnique(value, index, self) {
    return self.indexOf(value) === index;
}

function ShowLinks(Category = null, SubCategory = null, SearchTag = null) {

    while (linksDiv.firstChild) {
        linksDiv.removeChild(linksDiv.firstChild)
    }
    linksDiv.classList.remove("d-none");
    linksDiv.classList.add("d-block");
    console.log(Category);
    console.log(SubCategory);
    console.log(SearchTag);


    let linksInThisSubCategory = links.filter(l => (Category == null || l.Category == Category) && (SubCategory == null || l.SubCategory == SubCategory) && (SearchTag == null || l.Tag.includes(SearchTag)));

    for (let link of linksInThisSubCategory) {

        let linkElement = createLinkElementToDisplay(link);

        linksDiv.appendChild(linkElement);
    }
}

function createLinkElementToDisplay(link) {

    let elementToDisplay = document.createElement('div');

    let title = document.createTextNode(link.Titel);
    //elementToDisplay.appendChild(title);

    let showDescription = document.createElement('p');
    showDescription.appendChild(document.createTextNode(link.Description));
    //showDescription.innerText = link.Description;

    let linkAdress = document.createElement('a');
    linkAdress.href = link.Linkadress;
    linkAdress.target = "_blank";
    linkAdress.appendChild(title);
    elementToDisplay.appendChild(linkAdress);
    elementToDisplay.appendChild(showDescription);

    if (link.Embedded) {
        let embededVideo = document.createElement('div');
        embededVideo.classList.add("embed-responsive", "embed-responsive-16by9");

        let iframe = document.createElement('iframe');
        iframe.classList.add("embed-responsive-item");

        let videoId = link.Linkadress.split("?v=")[1];

        iframe.src = "https://www.youtube.com/embed/" + videoId;
        embededVideo.appendChild(iframe);
        elementToDisplay.appendChild(embededVideo);
    }

    return elementToDisplay;
}
