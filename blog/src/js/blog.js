// / ***********Header************
const header = $("header");
const navbar = $("nav.navbar");
const links = $("nav.navbar a");
let lastScrollTop = 0;
let click = false,
  clickTimeout;
let enableScrollHeader = true; // Variable pour activer/désactiver les fonctionnalités du header
function hideHeader() {
  header.addClass("hidden-header");
  navbar.addClass("hidden-navbar");
}
function showHeader() {
  header.removeClass("hidden-header");
  navbar.removeClass("hidden-navbar");
}
window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (enableScrollHeader) {
    if (this.window.innerWidth <= 1200) {
      if (scrollTop > lastScrollTop) {
        // l'utilisateur defile vers le bas

        hideHeader();
      } else {
        // l'utilisateur defile vers le haut
        if (click) {
          hideHeader();
          return;
        } else {
          showHeader();
        }
      }
      lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
    }
  }
});

links.each(function (_, link) {
  $(this).on("click", function () {
    if (enableScrollHeader) {
      if (window.innerWidth <= 1200) {
        click = true;
        hideHeader();

        if (clickTimeout) {
          clearTimeout(clickTimeout);
        }
        clickTimeout = setTimeout(function () {
          click = false;
        }, 1000);
      }
    }
  });
});
// *********** événement sur la largeur de la fenêtre
window.addEventListener("resize", function () {
  if (this.window.innerWidth > 1200) {
    enableScrollHeader = false;
    showHeader();
  } else {
    enableScrollHeader = true;
  }
});

// **************Collapse****************
$(".content_sectionHeading span").on("click", function () {
  // Trouve le parent .content_sectionHeading du span cliqué
  const $parent = $(this).closest(".content_sectionHeading");
  // Trouve le wrapper voisin suivant
  const $wrapper = $parent.next(".content_sectionWrapper");
  console.log($parent);
  console.log($wrapper);
  if ($wrapper.hasClass("open")) {
    $wrapper.removeClass("open");
    $parent.find("i").removeClass("rotate");
  } else {
    $wrapper.addClass("open");
    $parent.find("i").addClass("rotate");
  }
});
