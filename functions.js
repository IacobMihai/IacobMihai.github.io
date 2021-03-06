var activePage = "home";

function hide(id) {
    document.getElementById(id).style.display = "none";
    var el = document.getElementById(id);
    console.info("hide:" + id, el);
    if (el) {
        el.style.display = "none";
    } else {
        console.error("pagina nu exista")
    }
}




function hidePreviousPage() {
    hide(activePage);
    var link = document.querySelector(`#top-menu-bar a[data-page="${activePage}"]`);
    link.classList.remove("active");
}


function showPage(pageId) {
    hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    var link = document.querySelector(`#top-menu-bar a[data-page="${pageId}"]`);
    link.classList.add("active");
    activePage = pageId;
}

function initMenu() {
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a")) {
            var id = link.getAttribute("data-page");
            showPage(id);
        };
    });
}
initMenu();

showPage(activePage);

var allSkills = [
    { name: "HTML" , endorsements: 15 },
    { name: "CSS" , endorsements: 5},
    { name: "JS" , endorsements: 21},
];

function showSkills(skills) {

var skillsLi = skills.map(function (skill) {
    var endorsements = ` <span>&middot; ${skill.endorsements}</span>`;
    return "<li>" + skill.name + endorsements + "</li>";
});

// TODO add "favorite skill"
// TODO sort by endorsements
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");

}

fetch("data/skills.json").then(function(r) {
    return r.json()
}).then(function(allSkills) {
    showSkills(allSkills);
});

