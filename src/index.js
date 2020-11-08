
window.addEventListener("load", () => {
    document.querySelector("#menuIcon").addEventListener("click", e => {
        var x = document.getElementById("menuNav");
        if (x.className === "menu") {
            x.className += " responsive";
        } else {
            x.className = "menu";
        }
    });
});

