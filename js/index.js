const menuBtn = document.querySelector(".menuBtn");

menuBtn.onclick = () => {
  const navLinks = document.querySelector(".navLinks");
  const closeBtn = document.querySelector(".closeBtn");

  if (!navLinks.classList.contains("active")) {
    navLinks.classList.add("active");
    menuBtn.classList.add("active");
    closeBtn.classList.add("active");
  } else {
    navLinks.classList.remove("active");
    menuBtn.classList.remove("active");
    closeBtn.classList.remove("active");
  }
};

const closeBtn = document.querySelector(".closeBtn");

closeBtn.onclick = () => {
  const navLinks = document.querySelector(".navLinks");
  const menuBtn = document.querySelector(".menuBtn");

  navLinks.classList.remove("active");
  menuBtn.classList.remove("active");
};