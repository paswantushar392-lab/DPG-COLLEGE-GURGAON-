new Typed(".typing", {
  strings: [
    "Web Developer",
    "Programmer",
    "B.Tech Student"
  ],
  typeSpeed: 100,
  backSpeed: 60,
  loop: true
});

tsParticles.load("particles-js", {
  particles: {
    number: {
      value: 60
    },
    color: {
      value: "#00e5ff"
    },
    links: {
      enable: true,
      color: "#00e5ff"
    },
    move: {
      enable: true,
      speed: 2
    }
  }
});

const themeBtn = document.getElementById("theme");

themeBtn.onclick = () => {
  document.body.classList.toggle("light");
};
