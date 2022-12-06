let menu = document.querySelector('nav ul');
let hamburger = document.querySelector('nav .burgermenu');

hamburger.addEventListener('click',function(){
    if (menu.style.display === "none") {
        menu.style.display = "block";
      } else {
        menu.style.display = "none";
      }
});
