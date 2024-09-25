function hideMenuMobile() {
  $("#responsiveMenu").addClass("hide");
  setTimeout(function () {
    $("#responsiveMenu").removeClass("show").removeClass("hide");
  }, 500);
}
$(".openMenu").on("click", function () {
  $("#responsiveMenu").addClass("show");
});
$(".hideMenuMobile").on("click", function () {
  hideMenuMobile();
});
$(".nav-link").each(function (_, link) {
  $(link).click(function () {
    hideMenuMobile();
  });
});
// evenement pour le menu
let startX;
window.addEventListener("touchstart", function (event) {
  startX = event.touches[0].clientX;
});
window.addEventListener("touchend", function (event) {
  const endX = event.changedTouches[0].clientX;
  const deltaX = endX - startX;
  if (deltaX < -100) {
    $("#responsiveMenu").addClass("show");
  } else if (deltaX > 100) {
    hideMenuMobile();
  }
});
const innerCopyright = $("footer .copy-right");
const copyright = `© ${new Date().getFullYear()} Rouguiatou Diallo`;
innerCopyright.text(copyright);
