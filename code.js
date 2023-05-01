// Galleries Behaviour
const imagesCommercial = ["./images/commersial-photo-1.png", "./images/commersial-photo-2.png", "./images/commersial-photo-4.png", "./images/commersial-photo-5.png"];
const imagesResidental = ["./images/residental-photo-1.png", "./images/residental-photo-2.png", "./images/residental-photo-3.png", "./images/residental-photo-5.png"];
const commercialGalleryButton = document.getElementById("next-commercial");
const residentalGalleryButton = document.getElementById("next-residental");

let imgIndexCommercial = 0;
let imgIndexResidental = 0;
// Commercial Photos
let foregroundPhoto1C = document.getElementById("commercial-photo-1");
let backgroundPhoto1C = document.getElementById("commercial-animation-box-1");
let foregroundPhoto2C = document.getElementById("commercial-photo-2");
let backgroundPhoto2C = document.getElementById("commercial-animation-box-2");
let counterCommercial = document.getElementById("counter-commercial");
//Residental Photos
let foregroundPhoto1R = document.getElementById("residental-photo-1");
let backgroundPhoto1R = document.getElementById("residental-animation-box-1");
let foregroundPhoto2R = document.getElementById("residental-photo-2");
let backgroundPhoto2R = document.getElementById("residental-animation-box-2");
let counterResidental = document.getElementById("counter-residental");

// Main function to get the next IMG in the gallery:
function changeOpacity(whatGallery, foregroundOpacity, backgroundOpacity, isFinalPhoto) {
    if (whatGallery == "commercial") {
        commercialGalleryButton.disabled = true;
        foregroundPhoto1C.style.opacity = foregroundPhoto2C.style.opacity = foregroundOpacity;
        backgroundPhoto1C.style.opacity = backgroundPhoto2C.style.opacity = backgroundOpacity;
        if (isFinalPhoto) {
            imgIndexCommercial = 0;
            counterCommercial.innerHTML = "1 / 4";
        } else {
            imgIndexCommercial += 1;
            counterCommercial.innerHTML = `${imgIndexCommercial + 1} / 4`;
        }
    } else {
        residentalGalleryButton.disabled = true;
        foregroundPhoto1R.style.opacity = foregroundPhoto2R.style.opacity = foregroundOpacity;
        backgroundPhoto1R.style.opacity = backgroundPhoto2R.style.opacity = backgroundOpacity;
        if (isFinalPhoto) {
            imgIndexResidental = 0;
            counterResidental.innerHTML = "1 / 4";
        } else {
            imgIndexResidental += 1;
            counterResidental.innerHTML = `${imgIndexResidental + 1} / 4`;
        }
    }
}
// Function to change IMGes in the background:
function changeImg(whatGallery, whichImgToChange, imgIndexOne, imgIndexTwo) {
    if (whatGallery == "commercial") {
        if (whichImgToChange == "foreground") {
            foregroundPhoto1C.src = imagesCommercial[imgIndexOne];
            foregroundPhoto2C.src = imagesCommercial[imgIndexTwo];
        } else {
            backgroundPhoto1C.src = imagesCommercial[imgIndexOne];
            backgroundPhoto2C.src = imagesCommercial[imgIndexTwo];
        }
        commercialGalleryButton.disabled = false;
    } else {
        if (whichImgToChange == "foreground") {
            foregroundPhoto1R.src = imagesResidental[imgIndexOne];
            foregroundPhoto2R.src = imagesResidental[imgIndexTwo];
        } else {
            backgroundPhoto1R.src = imagesResidental[imgIndexOne];
            backgroundPhoto2R.src = imagesResidental[imgIndexTwo];
        }
        residentalGalleryButton.disabled = false;
    }
}

function nextPhotoGallery(whatGallery, imgIndex) {
    if (whatGallery == "commercial") {
        if (imgIndex == 0) {
            changeOpacity(whatGallery, "0%", "100%", false);
            setTimeout(() => {
                changeImg(whatGallery, "foreground", 2, 3);
            }, 1000);
        } else if (imgIndex == 1) {
            changeOpacity(whatGallery, "100%", "0%", false);
            setTimeout(() => {
                changeImg(whatGallery, "background", 3, 0);
            }, 1000);
        } else if (imgIndex == 2) {
            changeOpacity(whatGallery, "0%", "100%", false);
            setTimeout(() => {
                changeImg(whatGallery, "foreground", 0, 1);
            }, 1000);
        } else if (imgIndex == 3) {
            changeOpacity(whatGallery, "100%", "0%", true);
            setTimeout(() => {
                changeImg(whatGallery, "background", 1, 2);
            }, 1000);
        }
    } else {
        if (imgIndex == 0) {
            changeOpacity(whatGallery, "0%", "100%", false);
            setTimeout(() => {
                changeImg(whatGallery, "foreground", 3, 2);
            }, 1000);
        } else if (imgIndex == 1) {
            changeOpacity(whatGallery, "100%", "0%", false);
            setTimeout(() => {
                changeImg(whatGallery, "background", 0, 3);
            }, 1000);
        } else if (imgIndex == 2) {
            changeOpacity(whatGallery, "0%", "100%", false);
            setTimeout(() => {
                changeImg(whatGallery, "foreground", 1, 0);
            }, 1000);
        } else if (imgIndex == 3) {
            changeOpacity(whatGallery, "100%", "0%", true);
            setTimeout(() => {
                changeImg(whatGallery, "background", 2, 1);
            }, 1000);
        }
    }
}


// Getting Top Off-canvas menu to work..?
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

function preventDefaultScroll(e) {
    e.preventDefault();
    window.scrollTo(0, 0);
}
function enableScroll() {
    window.removeEventListener('scroll', preventDefaultScroll);
  }

function dropOpen(){
    window.addEventListener('scroll', preventDefaultScroll);
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
    enableScroll();
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

// Little Arrow that Changes to next Photo on Residental
const residentalNextButton = document.getElementById("next-residental");
const residentalNextArrow = document.getElementById("next-residental-arrow");
residentalNextButton.onmouseover = function() {
    residentalNextArrow.style.transitionDuration = "0.5s";
    residentalNextArrow.style.marginLeft = "-10px";
}
residentalNextButton.onmouseout = function() {
    residentalNextArrow.style.marginLeft = "0px";
    setTimeout(() => {
        residentalNextArrow.style.transitionDuration = "";
      }, 4000);
}