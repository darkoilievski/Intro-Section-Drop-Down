"use strict";
const features = document.querySelector(".features");
const company = document.querySelector(".company");
const hiddenFeatures = document.querySelector(".features-hidden");
const arrowDown = document.querySelector(".hide-arrow");
const arrowDown2 = document.querySelector(".hide-arrow2");
const arrowUp = document.querySelector(".hidden-arrow");
const arrowUp2 = document.querySelector(".hidden-arrow2");
const companyHidden = document.querySelector(".company-hidden");

let click = 0;
let click2 = 0;

const showFeatures = () => {
  features.style.color = "black";
  arrowDown.style.display = "none";
  hiddenFeatures.style.display = "flex";
  arrowUp.style.display = "inline";
};
const hideFeatures = () => {
  features.style.color = "hsl(0, 0%, 41%)";
  arrowDown.style.display = "inline";
  hiddenFeatures.style.display = "none";
  arrowUp.style.display = "none";
};

const showCompany = () => {
  company.style.color = "black";
  arrowDown2.style.display = "none";
  companyHidden.style.display = "flex";
  arrowUp2.style.display = "inline";
};
const hideCompany = () => {
  company.style.color = "hsl(0, 0%, 41%)";
  arrowDown2.style.display = "inline";
  companyHidden.style.display = "none";
  arrowUp2.style.display = "none";
};
features.addEventListener("click", (e) => {
  e.preventDefault();
  click++;

  if (click <= 1) {
    showFeatures();
  } else {
    click = 0;
    hideFeatures();
  }
});

company.addEventListener("click", (e) => {
  e.preventDefault();
  click2++;
  if (click2 <= 1) {
    showCompany();
  } else {
    click2 = 0;
    hideCompany();
  }
});

/*

MOBILE MENU

*/

const showHamburger = document.querySelector(".links-hamburger");
const hamburgerMenu = document.querySelector(
  ".hamburger-hidden[name='menu-btn']"
);
const hamburgerClose = document.querySelector(
  ".hamburger-hidden[name='close-btn']"
);
const featuresMobile = document.querySelector(".features-mobile");
const companyMobile = document.querySelector(".company-mobile");
const hiddenFeaturesMobile = document.querySelector(".features-hidden-mobile");
const arrowDownMobile = document.querySelector(".hide-arrow-mobile");
const arrowDown2Mobile = document.querySelector(".hide-arrow2-mobile");
const arrowUpMobile = document.querySelector(".hidden-arrow-mobile");
const arrowUp2Mobile = document.querySelector(".hidden-arrow2-mobile");
const companyHiddenMobile = document.querySelector(".company-hidden-mobile");

const showFeaturesMobile = () => {
  featuresMobile.style.color = "black";
  featuresMobile.style.marginBottom = "22rem";
  arrowDownMobile.style.display = "none";
  hiddenFeaturesMobile.style.display = "flex";
  arrowUpMobile.style.display = "inline";
};
const hideFeaturesMobile = () => {
  featuresMobile.style.color = "hsl(0, 0%, 41%)";
  arrowDownMobile.style.display = "inline";
  hiddenFeaturesMobile.style.display = "none";
  arrowUpMobile.style.display = "none";
  featuresMobile.style.marginBottom = "0rem";
};

const showCompanyMobile = () => {
  companyMobile.style.color = "black";
  arrowDown2Mobile.style.display = "none";
  companyHiddenMobile.style.display = "flex";
  arrowUp2Mobile.style.display = "inline";
  companyMobile.style.marginBottom = "22rem";
};
const hideCompanyMobile = () => {
  companyMobile.style.color = "hsl(0, 0%, 41%)";
  arrowDown2Mobile.style.display = "inline";
  companyHiddenMobile.style.display = "none";
  arrowUp2Mobile.style.display = "none";
  companyMobile.style.marginBottom = "0rem";
};
hamburgerMenu.addEventListener("click", () => {
  showHamburger.style.display = "flex";
  hamburgerMenu.style.display = "none";
  hamburgerClose.style.display = "block";
});

hamburgerClose.addEventListener("click", () => {
  showHamburger.style.display = "none";
  hamburgerMenu.style.display = "block";
  hamburgerClose.style.display = "none";
});

featuresMobile.addEventListener("click", (e) => {
  e.preventDefault();
  click++;

  if (click <= 1) {
    showFeaturesMobile();
  } else {
    click = 0;
    hideFeaturesMobile();
  }
});

companyMobile.addEventListener("click", (e) => {
  e.preventDefault();
  click2++;
  if (click2 <= 1) {
    showCompanyMobile();
  } else {
    click2 = 0;
    hideCompanyMobile();
  }
});
