function sidebarButton(x) {
    let menuSidebar = document.getElementById("sidebar");
    x.classList.toggle("change");
    if (menuSidebar.classList.contains("active")) {
        menuSidebar.classList.remove("active");
        document.body.style.overflow = "visible";
    } else {
        menuSidebar.classList.add("active");
        document.body.style.overflow = "hidden";
    }
}

