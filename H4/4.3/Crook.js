var oogplaatjes = [1,2,3];
var teller = 0
var slideholder = document.getElementById("slideholder");
slideholder.style.backgroundImage = "url('img/gezichtboven1.jpg')";

slideholder.addEventListener("click", function () {
    slideholder.style.backgroundImage = "url('img/gezichtboven" + getface() + ".jpg')";

});

function getface() {
    if (teller >= oogplaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }

    console.log(teller);
    return teller;
}

var plaatjes = [1,2,3];
var teller = 0
var slideholder2 = document.getElementById("slideholder2");
slideholder2.style.backgroundImage = "url('img/gezichtmidden1.jpg')";

slideholder2.addEventListener("click", function () {
    slideholder2.style.backgroundImage = "url('img/gezichtmidden" + getfacemid() + ".jpg')";

});

function getfacemid() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }

    console.log(teller);
    return teller;
}


var plaatjes = [1,2,3];
var teller = 0;
var slideholder3 = document.getElementById("slideholder3");
slideholder3.style.backgroundImage = "url('img/gezichtonder1.jpg')";

slideholder3.addEventListener("click", function () {
    slideholder3.style.backgroundImage = "url('img/gezichtonder" + getfacemid() + ".jpg')";

});

function getfacemid() {
    if (teller >= plaatjes.length) {
        teller = 1;
    } else {
        teller++;
    }

    console.log(teller);
    return teller;
}
