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

function hideAllPages() {
    var pages = document.querySelectorAll(".page");
    for (var i = 0; i < pages.length; i++) {
        const page = pages[i];
        var id = page.id;
        console.info("i=", i, pages[i]);
        hide(id);
    }
}

function showPage(pageId) {
    hideAllPages();
    document.getElementById(pageId).style.display = "";
}

function initMenu() {
    console.warn('prepare click on links');
    document.addEventListener("click", function (e) {
        var link = e.target;
        if (link.matches("#top-menu-bar a"))
            var id = link.innerHTML.toLowerCase();
        console.info("click", id,);
        showPage(id);
    });
}

initMenu();

showPage("skills");

var skills = ["HTML", "CSS", "JS"];

// TODO add "favorite skill"

var ul = document.querySelector("#skills ul");
ul.innerHTML =  "<li>" + skills[0] + "</li>" +
                "<li>" + skills[1] + "</li>" +
                "<li>" + skills[2] + "</li>";