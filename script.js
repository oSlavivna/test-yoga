const hamburger = document.querySelector(".hamburger");
// const nav = document.querySelector("nav");
const menuList = document.querySelector(".menu-list");
// const ulList = document.querySelector("ul");

// hamburger.addEventListener("click", () => {
//   menuList.classList.toggle("ul-list");
// });

hamburger.addEventListener('click', function () {
   // Toggle the 'active' class on the menu list to show/hide it
   menuList.classList.toggle('active');
 });