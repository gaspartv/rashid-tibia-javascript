let localRashid = new Array (
    "Carlin", // 0
    "Svargrond", // 1
    "Liberty Bay", // 2
    "Port Hope", // 3
    "Ankrahmun", // 4
    "Darashia", // 5
    "Edron" // 6
    );

let imgRashid = new Array(
    "./img/carlinmap.png", // 0
    "./img/svarmap.png", // 1
    "./img/lbmap.png", // 2
    "./img/phmap.png", // 3
    "./img/ankmap.png", // 4
    "./img/daramap.png", // 5
    "./img/edronmap.png" // 6
    );

let dia = new Date();
let h = dia.getHours();
let m = dia.getMinutes();
let formato = (h < 10 ? '0'+ h : h) + ":" + (m < 10 ? '0' + m : m);
let cidade = (localRashid[dia.getDay()]);
let servesave = 5;
let classRashid = "criatura-dia-img-1";

function time() {
    if (cidade == localRashid[0]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[0];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[0] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[6];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[6] + "'>";
        }
    }
    if (cidade == localRashid[1]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[1];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[1] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[0];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[0] + "'>";
        }
    }
    if (cidade == localRashid[2]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[2];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[2] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[1];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[1] + "'>";
        }
    }
    if (cidade == localRashid[3]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[3];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[3] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[2];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[2] + "'>";
        }
    }
    if (cidade == localRashid[4]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[4];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[4] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[3];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[3] + "'>";
        }
    }
    if (cidade == localRashid[5]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[5];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[5] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[4];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[4] + "'>";
        }
    }
    if (cidade == localRashid[6]) {
        if (h >= servesave) {
            document.getElementById('rashid-day').innerHTML = localRashid[6];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[6] + "'>";
        } else {
            document.getElementById('rashid-day').innerHTML = localRashid[5];
            document.getElementById("rashid-img").innerHTML = "<img class='" + classRashid + "' src='" + imgRashid[5] + "'>";
        }
    }
}
