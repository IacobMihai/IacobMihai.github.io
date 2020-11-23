var activePage = "skills";

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
}


function showPage(pageId) {
    //hideAllPages();
    hidePreviousPage();
    document.getElementById(pageId).style.display = "";
    activePage = pageId;
}

function initMenu() {
    console.warn('prepare click on links');
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a") {
            var id = link.innerHTML.toLowerCase();
            showPage(id);
        }

    });
}

initMenu();

showPage(activePage);

var skills = [
    "HTML",
    "CSS",
    "JS"
];

var skillsLi = skills.map(function (skill) {
    return "<li>" + skill + "</li>";
});

// TODO add "favorite skill"
var ul = document.querySelector("#skills ul");
ul.innerHTML = skillsLi.join("");