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
