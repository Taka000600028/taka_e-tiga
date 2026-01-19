// // ハンバーガーボタンとドロワー
// $("#js-button-drawer").on("click", function () {
//   $(this).toggleClass("is-checked");
//   $("#js-drawer").toggleClass("is-open");
//   $("body").toggleClass("is-fixed");
// });

const drawerIcon = document.querySelector("#js-button-drawer");
const headerNav = document.querySelector("#js-drawer");

if (drawerIcon) {
  document;
  drawerIcon.addEventListener("click", function (e) {
    e.preventDefault();
    drawerIcon.classList.toggle("is-checked");
    headerNav.classList.toggle("is-checked");
  });
}
