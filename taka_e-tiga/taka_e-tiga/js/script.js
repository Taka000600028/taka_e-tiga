// ハンバーガーボタンとドロワー
$("#js-button-drawer").on("click", function () {
  $(this).toggleClass("is-checked");
  $("#js-drawer").toggleClass("is-open");
  $("body").toggleClass("is-fixed");
});
