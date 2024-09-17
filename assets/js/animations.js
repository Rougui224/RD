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

animateElement(
  document.querySelector("#home img"),
  "scale-in-hor-left",
  "visible"
);
animateElement(
  document.querySelector("#home .p-2"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#about h2"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#about p"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#skills h2"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("#skills p"),
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
  document.querySelector("footer p"),
  "scale-in-center",
  "visible"
);
animateElement(
  document.querySelector("footer .copy-right"),
  "scale-in-center",
  "visible"
);
$("#about li").each(function (index, element) {
  animateElement(element, "scale-in-center", "visible");
});
$("#skills li").each(function (_, element) {
  animateElement(element, "scale-in-center", "visible");
});
$("#portfolio li").each(function (_, element) {
  animateElement(element, "scale-in-tl", "visible");
});
$("#contact li").each(function (_, element) {
  animateElement(element, "scale-in-center", "visible");
});
