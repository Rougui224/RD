const animationsSkillsCards = [
  "slide-in-tl",
  "slide-in-top",
  "slide-in-tr",
  "slide-in-bl",
  "slide-in-bottom",
  "slide-in-br",
];
const animationAboutCards = ["slide-in-bl", "slide-in-br"];
const animationblogCards = ["slide-in-bl", "slide-in-top", "slide-in-br"];
// Fonction pour gérer l'animation d'un élément
function animateElement(element, animation, visible) {
  // Créer un observateur d'intersection avec un seuil de 1 (élément entièrement visible)
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio >= 0.1) {
          // Lorsque l'élément est visible à 10% ou plus
          entry.target.classList.add(animation, visible);

          // Arrêter l'observation de cet élément
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: [0.1], // Déclencher l'animation à 10% de visibilité
    }
  );

  // Observer l'élément
  observer.observe(element);
}

// Appliquer l'animation à l'élément cible

animateElement(document.querySelector("#home img"), "slide-in-left", "visible");
animateElement(
  document.querySelector("#home .p-2"),
  "slide-in-right",
  "visible"
);

animateElement(
  document.querySelector("#resume h2"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#resume p"),
  "scale-in-center",
  "visible"
);

animateElement(
  document.querySelector("#portfolio h2"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#portfolio p"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#blog h2"),
  "scale-in-center",
  "visible"
);
animateElement(document.querySelector("#blog p"), "scale-in-center", "visible");
animateElement(
  document.querySelector("footer p"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("footer .copy-right"),
  "scale-in-center",
  "visible"
);
$("#resume li").each(function (index, element) {
  animateElement(element, animationAboutCards[index], "visible");
});
$(".skills li").each(function (index, element) {
  animateElement(element, animationsSkillsCards[index], "visible");
});
$("#portfolio li").each(function (index, element) {
  animateElement(element, animationsSkillsCards[index], "visible");
});
$("#blog li").each(function (index, element) {
  animateElement(element, animationblogCards[index], "visible");
});
$("#contact li").each(function (_, element) {
  animateElement(element, "scale-in-center", "visible");
});
