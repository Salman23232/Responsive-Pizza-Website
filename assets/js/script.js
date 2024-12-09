/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById("nav-menu");
const navToggle = document.getElementById("nav-toggle");
const navClose = document.getElementById("nav-close");
const navLink = document.querySelectorAll("#nav-link")

if (navToggle) {
  navToggle.addEventListener("click", () =>
    navMenu.classList.add("show-menu")
  );
}

if (navClose) {
  navClose.addEventListener("click", () =>
    navMenu.classList.remove("show-menu")
  );

  if (navLink) {
    navLink.forEach(link => {
        link.addEventListener("click",()=>{

            navMenu.classList.remove("show-menu")

        })
    });
    
}
}
/*=============== REMOVE MENU MOBILE ===============*/

/*=============== ADD SHADOW HEADER ===============*/

/*=============== SWIPER POPULAR ===============*/

/*=============== SHOW SCROLL UP ===============*/

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/

/*=============== SCROLL REVEAL ANIMATION ===============*/
