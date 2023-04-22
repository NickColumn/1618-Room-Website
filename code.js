// Getting Top Off-canvas menu to work?
var dropBlock = document.getElementById("dropdown-block");
var dropLogo = document.getElementById("drop-logo");
var dropX = document.getElementById("drop-x");
let dropHead = [dropLogo, dropX];
var dropProjects = document.getElementById("projects-link");
var dropAbout = document.getElementById("about-link");
var dropContacts = document.getElementById("contacts-link");
var dropBehance = document.getElementById("behance");
var dropFacebook = document.getElementById("facebook");
var dropInstagram = document.getElementById("instagram");
let dropSocials = [dropBehance, dropFacebook, dropInstagram];
var socialsClass = document.getElementsByClassName("drop-link");

function dropOpen(){
    dropBlock.style.transitionDelay = "";
    dropHead.forEach(element => element.style.transitionDelay = '0.2s');
    dropContacts.style.transitionDelay = "0.8s";
    dropAbout.style.transitionDelay = "0.6s";
    dropProjects.style.transitionDelay = "0.4s";
    dropSocials.forEach(element => element.style.transitionDelay = '1s');
    dropBlock.style.top = "0px";
    for (link of socialsClass) {
        link.style.transitionDuration = "0.4s";
        link.style.opacity = "100%";
        link.style.marginTop = "10px";
    }
 }

function dropClose(){
    dropHead.forEach(element => element.style.transitionDelay = '0.8s');
    dropContacts.style.transitionDelay = "0.4s";
    dropAbout.style.transitionDelay = "0.2s";
    dropProjects.style.transitionDelay = "0s";
    dropSocials.forEach(element => element.style.transitionDelay = '0.6s');
    for (link of socialsClass) {
        link.style.transitionDuration = "0.5s";
        link.style.opacity = "0";
        link.style.marginTop = "-20px";
    }
    dropBlock.style.transitionDelay = "0.6s";
    dropBlock.style.top = "-1100px";
}

// Arrow buttons behaviour
// Button 1 Commercial
var commercialButton = document.getElementById("commercial-button");
var commercialArrow = document.getElementById("arrow-button-1");
commercialButton.onmouseover = function() {
    commercialArrow.style.transitionDuration = "0.5s";
    commercialArrow.style.marginRight = "-10px";
}
commercialButton.onmouseout = function() {
    commercialArrow.style.marginRight = "0px";
    setTimeout(() => {
        commercialArrow.style.transitionDuration = "";
      }, 4000);
}

// Button 2 Residental
var residentalButton = document.getElementById("residental-button");
var residentalArrow = document.getElementById("arrow-button-2");
residentalButton.onmouseover = function() {
    residentalArrow.style.transitionDuration = "0.5s";
    residentalArrow.style.marginRight = "-10px";
}
residentalButton.onmouseout = function() {
    residentalArrow.style.marginRight = "0px";
    setTimeout(() => {
        residentalArrow.style.transitionDuration = "";
      }, 4000);
}

// Commercial next img
var commercialNextButton = document.getElementById("next-commercial");
var commercialNextArrow = document.getElementById("next-commercial-arrow");
commercialNextButton.onmouseover = function() {
    commercialNextArrow.style.transitionDuration = "0.5s";
    commercialNextArrow.style.marginLeft = "10px";
}
commercialNextButton.onmouseout = function() {
    commercialNextArrow.style.marginLeft = "0px";
    setTimeout(() => {
        commercialNextArrow.style.transitionDuration = "";
      }, 4000);
}
var image1Commercial = "./images/commersial-photo-1.png";
var image2Commercial = "./images/commersial-photo-2.png";
var image3Commercial = "./images/commersial-photo-3.png";
var image4Commercial = "./images/commersial-photo-4.png";
var image5Commercial = "./images/commersial-photo-5.png";
let imagesCommercial = [image1Commercial, image2Commercial, image3Commercial, image4Commercial, image5Commercial];
var currentImg = 1;
var counterNumberCommercial = 1;
var counterCommercial = document.getElementById("counter-commercial");
function nextCommercial() {
    var imageContainer1 = document.getElementById("commercial-photo-1");
    var imageContainer2 = document.getElementById("commercial-photo-2");
    imageContainer1.style.transition = "opacity 0.6s";
    imageContainer2.style.transition = "opacity 0.6s";
    imageContainer1.style.opacity = 0;
    imageContainer2.style.opacity = 0;
    setTimeout(function() {
        imageContainer1.src = imagesCommercial[currentImg];
        if (currentImg === 4) {
            imageContainer2.src = image1Commercial;
        }
        else {
            imageContainer2.src = imagesCommercial[currentImg + 1];
        }
        if (currentImg < 4) {
            currentImg += 1;
        }
        else {
            currentImg = 0;
        }
        if (counterNumberCommercial < 5) {
            counterNumberCommercial += 1;
        }
        else {
            counterNumberCommercial = 1;
        }
        counterCommercial.innerHTML = `${counterNumberCommercial} / 5`;
        setTimeout(function() {
            imageContainer1.style.opacity = 1;
            imageContainer2.style.opacity = 1;
        }, 300);
    }, 500);
}

// Residental next img
var residentalNextButton = document.getElementById("next-residental");
var residentalNextArrow = document.getElementById("next-residental-arrow");
residentalNextButton.onmouseover = function() {
    residentalNextArrow.style.transitionDuration = "0.5s";
    residentalNextArrow.style.marginLeft = "10px";
}
residentalNextButton.onmouseout = function() {
    residentalNextArrow.style.marginLeft = "0px";
    setTimeout(() => {
        residentalNextArrow.style.transitionDuration = "";
      }, 4000);
}
var image1Residental = "./images/residental-photo-1.png";
var image2Residental = "./images/residental-photo-2.png";
var image3Residental = "./images/residental-photo-3.png";
var image4Residental = "./images/residental-photo-4.png";
var image5Residental = "./images/residental-photo-5.png";
let imagesResidental = [image1Residental, image2Residental, image3Residental, image4Residental, image5Residental];
var currentImgR = 1;
var counterNumberResidental = 1;
var counterResidental = document.getElementById("counter-residental");
function nextResidental() {
    var imageContainer3 = document.getElementById("residental-photo-1");
    var imageContainer4 = document.getElementById("residental-photo-2");
    imageContainer3.style.transition = "opacity 0.6s";
    imageContainer4.style.transition = "opacity 0.6s";
    imageContainer3.style.opacity = 0;
    imageContainer4.style.opacity = 0;
    setTimeout(function() {
        imageContainer3.src = imagesResidental[currentImgR];
        if (currentImgR === 4) {
            imageContainer4.src = image1Residental;
        }
        else {
            imageContainer4.src = imagesResidental[currentImgR + 1];
        }
        if (currentImgR < 4) {
            currentImgR += 1;
        }
        else {
            currentImgR = 0;
        }
        if (counterNumberResidental < 5) {
            counterNumberResidental += 1;
        }
        else {
            counterNumberResidental = 1;
        }
        counterResidental.innerHTML = `${counterNumberResidental} / 5`;
        setTimeout(function() {
            imageContainer3.style.opacity = 1;
            imageContainer4.style.opacity = 1;
        }, 300);
    }, 500);
}