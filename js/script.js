AOS.init();

var menuButton = document.getElementById("mobile-nav-icon");

menuButton.addEventListener('click',function(){
    var navMenu = document.getElementById("nav-menu");
   navMenu.style.left=='-200px'? navMenu.style.left='16px': navMenu.style.left="-200px"
})