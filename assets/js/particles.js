document.addEventListener("DOMContentLoaded", function () {
  // Constantes pour les valeurs réutilisées
  const PARTICLE_COLOR = "#ffffff";
  const PARTICLE_SPEED = 6;
  const PARTICLE_OPACITY = 0.5;
  const PARTICLE_SIZE = 3;
  const LINE_OPACITY = 0.4;
  const LINE_DISTANCE = 100;

  particlesJS("particles-js", {
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          value_area: 4000,
        },
      },
      color: {
        value: PARTICLE_COLOR,
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
        polygon: {
          nb_sides: 5,
        },
      },
      opacity: {
        value: PARTICLE_OPACITY,
      },
      size: {
        value: PARTICLE_SIZE,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: LINE_DISTANCE,
        color: PARTICLE_COLOR,
        opacity: LINE_OPACITY,
        width: 1,
      },
      move: {
        enable: true,
        speed: PARTICLE_SPEED,
        direction: "none",
        out_mode: "out",
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 1,
          },
        },
        bubble: {
          distance: 400,
          size: 40,
          duration: 2,
          opacity: 8,
          speed: 3,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
        remove: {
          particles_nb: 2,
        },
      },
    },
    retina_detect: true,
  });
});
