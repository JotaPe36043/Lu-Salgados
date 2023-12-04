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

function exibirPreview(input) {
    if (input.files && input.files[0]) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const preview = document.getElementById('preview');
            preview.src = e.target.result;
        }

        reader.readAsDataURL(input.files[0]);
    }
}
