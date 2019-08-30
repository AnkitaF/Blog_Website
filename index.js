let nav_hambg = document.getElementById("hamburg");
let nav_menu = document.getElementById("menu_list");

// nav_hambg.addEventListener('click', () => {
// 	if (nav_menu.style.display === "none") {
//     nav_menu.style.display = "block";
//   } else {
//     nav_menu.style.display = "none";
//   }
    
// })

nav_hambg.addEventListener("click", function(){ 
    if (nav_menu.style.display === "none") {
    nav_menu.style.display = "block";
  } else {
    nav_menu.style.display = "none";
  }
}); 
