document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behaviour : "smooth"
    });   
  });
});

const sections = document.querySelectorAll("div[id], h2[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollPos = window.scrollY + 150; // adjust if you want to highlight sooner/later

  sections.forEach(section => {
    const id = section.getAttribute("id");
    const top = section.offsetTop;
    const height = section.offsetHeight;

    if (scrollPos >= top && scrollPos < top + height) {
      navLinks.forEach(link => {
        link.classList.remove("text-white", "underline", "font-bold");
        link.classList.add("text-gray-200");
        if (link.getAttribute("href") === `#${id}`) {
          link.classList.add("text-white", "underline", "font-bold");
          link.classList.remove("text-gray-200");
        }
      });
    }
  });
}

window.addEventListener("scroll", onScroll);
document.addEventListener("DOMContentLoaded", onScroll);