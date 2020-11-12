
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
window.addEventListener("load", () => {
    const saved = JSON.parse(localStorage.getItem('favorites'));

    for (let i = 0; i < saved.length; i++) {
        let divCard = document.getElementById(saved[i]);

        if (divCard != null) {


            let icon = divCard.getElementsByTagName('i');

            for (element of icon) {

                element.className = 'fas fa-heart';
            }
        }

    }
    let llista = document.getElementById('fav');
    while (llista.hasChildNodes()) {
        llista.removeChild(llista.firstChild);
    }

    for (element of saved) {
        llista.innerHTML += '<li>' + element + '</li>';
    }
});
/* Favorite */

let favButons = document.getElementsByClassName("btnFavorite");

Array.from(favButons).forEach(favButon => {
    favButon.addEventListener('click', () => {
        let icon = favButon.firstChild;
        let div = favButon.parentNode.id;

        if (icon.className == 'fas fa-heart') {
            icon.className = 'far fa-heart';

            const saved = JSON.parse(localStorage.getItem('favorites'));

            for (let i = 0; i < saved.length; i++) {
                if (saved[i] === div) {
                    saved.splice(i, 1);
                }
            }

            localStorage.setItem('favorites', JSON.stringify(saved));

            let llistaFav = JSON.parse(localStorage.getItem('favorites'));
            let llista = document.getElementById('fav');

            while (llista.hasChildNodes()) {
                llista.removeChild(llista.firstChild);
            }

            for (element of llistaFav) {

                llista.innerHTML += '<li>' + element + '</li>';
            }

        } else {
            icon.className = 'fas fa-heart';

            const saved = JSON.parse(localStorage.getItem('favorites'));

            if (saved !== null) {

                saved.push(div);
                localStorage.setItem('favorites', JSON.stringify(saved));
                let llistaFav = JSON.parse(localStorage.getItem('favorites'));
                let llista = document.getElementById('fav');

                while (llista.hasChildNodes()) {
                    llista.removeChild(llista.firstChild);
                }

                for (element of llistaFav) {
                    llista.innerHTML += '<li>' + element + '</li>';
                }
            } else {
                const fav = [];
                fav.push(div);

                localStorage.setItem('favorites', JSON.stringify(fav));
                let llistaFav = JSON.parse(localStorage.getItem('favorites'));
                let llista = document.getElementById('fav');

                while (llista.hasChildNodes()) {
                    llista.removeChild(llista.firstChild);
                }

                for (element of llistaFav) {
                    llista.innerHTML += '<li>' + element + '</li>';
                }
            }
        }
    });
});






