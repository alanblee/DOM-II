//prevent links from refreshing page

document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
  });
});

//stop propagation

document.querySelector(".nested-p").addEventListener("click", e => {
  console.log(e.target);
});
document.querySelector(".stop-prop2").addEventListener("click", e => {
  console.log(e.target + " bubble");
  e.stopPropagation();
});
document.querySelector(".stop-prop").addEventListener("click", e => {
  console.log(e.target + " bubble2");
});

//keydown
document.addEventListener("keydown", e => {
  if (e.key.toLocaleLowerCase() === "a") {
    const destination = document.querySelector(".content-destination");
    destination.scrollIntoView();
  }
});

//drag to scale images
let drag;
document.addEventListener("drag", e => {});
document.addEventListener("dragstart", e => {
  if (e.target.classList.contains("img-scale")) {
    drag = e.target;
    drag.style.transform = "scale(2,2)";
  }
});

//rotate button on mouse over
document.querySelectorAll(".btn").forEach(btn => {
  btn.addEventListener("mouseover", e => {
    e.target.style.transition = "transform 1s ease-in";
    e.target.style.transform = "rotate(180deg)";
  });
});

// scroll
const logoHeader = document.querySelector(".logo-heading");
document.addEventListener("scroll", () => {
  logoHeader.style.transform = `rotate(${window.scrollY}deg)`;
});

//wheel
function colors(event) {
  event.preventDefault();
  event.target.style.backgroundColor = `rgba(${Math.floor(
    Math.random() * (255 - 122 + 1)
  ) + 122},${Math.floor(Math.random() * (255 - 45 + 1)) + 45},${Math.floor(
    Math.random() * (255 - 87 + 1)
  ) + 87})`;
}

document.querySelectorAll("h2").forEach(heading => {
  heading.addEventListener("wheel", colors);
});

//dbclick on p
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("dblclick", e => {
    e.target.style.color = "red";
  });
});

//click
document.querySelector(".nav-link").addEventListener("click", e => {
  e.target.style.transform = `skew(3deg, -129deg)`;
});

//mouseenter
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseenter", e => {
    e.target.style.border = `3px dashed purple`;
  });
});

//mouseleave
document.querySelectorAll("p").forEach(p => {
  p.addEventListener("mouseleave", e => {
    e.target.style.border = `none`;
  });
});

//focus
document.querySelectorAll(".nav-link").forEach(btn => {
  btn.addEventListener("focus", e => {
    e.target.style.transition = "all 1s ease-in";
    e.target.style.transform = "scale(1,1.5)";
    e.target.style.backgroundColor = "purple";
    e.target.style.color = "white";
  });
});

//stretch
document.querySelector(".home").addEventListener("click", () => {
  gsap.to("footer", { rotate: -110, duration: 10, scale: 2, duration: 2 });
});
