
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

/* Favorite */

let favButons = document.getElementsByClassName("btnFavorite");

Array.from(favButons).forEach(favButon => {
    favButon.addEventListener('click', () => {
        let icon = favButon.firstChild;
        if (icon.className == 'far fa-heart') {
            icon.className = 'fas fa-heart';
        } else {
            icon.className = 'far fa-heart';
        }
    });
});






