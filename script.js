document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e){
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior : "smooth"
    });   
  });
});

const sections = document.querySelectorAll("div[id], h2[id]");
const navLinks = document.querySelectorAll(".nav-link");

function onScroll() {
  const scrollPos = window.scrollY + 150; 

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

class projectDisplayed {
  constructor(card, description, techUsed, icon){
    this.card = card;
    this.description = description;
    this.techUsed = techUsed;
    this.icon = icon;
  }
}

const projectOne = new projectDisplayed(
  "https://i.ibb.co/pjMLXM7J/wyxina-tresse-io-Z7-ZJp-Jo-Q8-unsplash.jpg",
  ["This is a hobby website showcasing personal hobbies with description and pictures"],
  ["Html and CSS (tailwind)"],
  "githublink"
);

const projectTwo = new projectDisplayed(
  "https://i.ibb.co/pjMLXM7J/wyxina-tresse-io-Z7-ZJp-Jo-Q8-unsplash.jpg",
  ["A quiz that test your knwledge of different countries capital cities."],
  ["Html and CSS (tailwind), javascript"],
  "githublink"
);

const projectThree = new projectDisplayed(
  "https://i.ibb.co/pjMLXM7J/wyxina-tresse-io-Z7-ZJp-Jo-Q8-unsplash.jpg",
  ["A Caesar Cipher build to encrypt messages with the puspose to use Jester testing"],
  ["Html and CSS (tailwind), javaScript, Jester"],
  "githublink"
);

const projectFour = new projectDisplayed(
  "https://i.ibb.co/pjMLXM7J/wyxina-tresse-io-Z7-ZJp-Jo-Q8-unsplash.jpg",
  ["A Weather app that shows the weather for a selected city for the next five days"],
  ["React, Api"],
  "githublink"
);

function showProject(){

}