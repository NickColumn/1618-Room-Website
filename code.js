// Getting Top Off-canvas menu to work?
const dropBlock = document.getElementById("dropdown-block");
const dropLogo = document.getElementById("drop-logo");
const dropX = document.getElementById("drop-x");
const dropHead = [dropLogo, dropX];
const dropProjects = document.getElementById("projects-link");
const dropAbout = document.getElementById("about-link");
const dropContacts = document.getElementById("contacts-link");
const dropBehance = document.getElementById("behance");
const dropFacebook = document.getElementById("facebook");
const dropInstagram = document.getElementById("instagram");
const dropSocials = [dropBehance, dropFacebook, dropInstagram];
const socialsClass = document.getElementsByClassName("drop-link");

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
// BIG Button that leads to Commercial Page
const commercialButton = document.getElementById("commercial-button");
const commercialArrow = document.getElementById("arrow-button-1");
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

// BIG Button that leads to Residental Page
const residentalButton = document.getElementById("residental-button");
const residentalArrow = document.getElementById("arrow-button-2");
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

// Little Arrow that Changes to next Photo on Commercial
const commercialNextButton = document.getElementById("next-commercial");
const commercialNextArrow = document.getElementById("next-commercial-arrow");
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




// Commercial Gallery Behaviour
let imagesCommercial = ["./images/commersial-photo-1.png", "./images/commersial-photo-2.png", "./images/commersial-photo-3.png", "./images/commersial-photo-4.png", "./images/commersial-photo-5.png"];
let imgIndex = 0;
// let counterNumberCommercial = 1;
// let counterCommercial = document.getElementById("counter-commercial");

function nextCommercial() {
    let foregroundPhoto1 = document.getElementById("commercial-photo-1");
    let backgroundPhoto1 = document.getElementById("commercial-animation-box-1");
    let foregroundPhoto2 = document.getElementById("commercial-photo-2");
    let backgroundPhoto2 = document.getElementById("commercial-animation-box-2");

    if (imgIndex == 0) {
        foregroundPhoto1.style.opacity = foregroundPhoto2.style.opacity = "0%";
        backgroundPhoto1.style.opacity = backgroundPhoto2.style.opacity = "100%";
        setTimeout(() => {
            foregroundPhoto1.src = imagesCommercial[2];
            foregroundPhoto2.src = imagesCommercial[3];
            }, 1500);
        imgIndex += 1;
    } else if (imgIndex == 1) {
        foregroundPhoto1.style.opacity = foregroundPhoto2.style.opacity = "100%";
        backgroundPhoto1.style.opacity = backgroundPhoto2.style.opacity = "0%";
        setTimeout(() => {
            backgroundPhoto1.src = imagesCommercial[3];
            backgroundPhoto2.src = imagesCommercial[4];
            }, 1500);
        imgIndex += 1;
    } else if (imgIndex == 2) {
        foregroundPhoto1.style.opacity = foregroundPhoto2.style.opacity = "0%";
        backgroundPhoto1.style.opacity = backgroundPhoto2.style.opacity = "100%";
        setTimeout(() => {
            foregroundPhoto1.src = imagesCommercial[5];
            foregroundPhoto1.src = imagesCommercial[0];
            }, 1500);
        imgIndex += 1;
    } else if (imgIndex == 3) {
        foregroundPhoto1.style.opacity = foregroundPhoto2.style.opacity = "100%";
        backgroundPhoto1.style.opacity = backgroundPhoto2.style.opacity = "0%";
        setTimeout(() => {
            backgroundPhoto1.src = imagesCommercial[0];
            backgroundPhoto2.src = imagesCommercial[1];
            }, 1500);
        imgIndex = 0;
    }
}