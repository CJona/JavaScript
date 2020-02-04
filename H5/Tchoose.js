pics = document.getElementById("pics");
createPictureHolders();
createAapPics();

function createPictureHolders() {
    for (var i = 0; i < 9; i++) {
        pictureHolders = document.createElement("div");
        pictureHolders.className = "picture-holder";
        pictureHolders.id = "picture-holder-" + i;
        pics.appendChild(pictureHolders);
    }
}

function createAapPics() {
    pictureHolders = document.getElementsByClassName("picture-holder");
    for(var i = 0; i < pictureHolders.length; i++) {
        favoriet = document.createElement("div");
        favoriet.className = "favoriet";
        favoriet.id = "favoriet_" + (i+1);
        tijgerPlaatje= document.createElement("img");
        tijgerPlaatje.src = "img/Tijger" + (i  + 1) + ".jpg";
        tijgerPlaatje.id = (i+1);
        tijgerPlaatje.addEventListener("click", function () {
            maakFavoriet(this.id)
        });
        pictureHolders[i].appendChild(favoriet);
        pictureHolders[i].appendChild(tijgerPlaatje);
    }
}

function maakFavoriet(id) {
    notsofavoriet = document.getElementsByClassName("favoriet");

    for (var i = 0; i < notsofavoriet.length; i++) {
        notsofavoriet[i].style.backgroundImage = "none";
    }

    favoriet = document.getElementById("favoriet_" + id);
    favoriet.style.backgroundImage = "url('img/heart.png')";
}