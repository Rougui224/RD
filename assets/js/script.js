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
