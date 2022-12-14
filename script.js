const getEle = (cls) => document.querySelector(`.${cls}`);
const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");

// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// console.log(allSections);

const btns = document.getElementsByTagName("button"); // live collections
// console.log(btns);

// console.log(document.getElementsByClassName("btn")); // live collection

//creating elemenet
const msg = document.createElement("div");

//adding class
msg.classList.add("cookie-msg");

//adding text
// msg.textContent = "We use cookied for improved functionality and analytics.";

//adding html
msg.innerHTML = `We use cookies for improved functionality and analytics.<button class="btn btn-close-cookie">Got it!</button>`;

//adding created element to the dom
//header.prepend(msg); // first child of header

//header.append(msg); //as last child of header

//we can use at multiple places just by cloning node

// header.append(msg.cloneNode(true)); //copy of msg element, placed at multiple position at same time.

//header.before(msg); // before header as a sibling
//header.after(msg); //after header as a sibling

//deleteing elements

// document.body.style.overflow = "hidden";
// header.style.opacity = 0.1;

// document
//   .querySelector(".btn-close-cookie")
//   .addEventListener("click", function (e) {
//     e.preventDefault();
//     // msg.remove();
//     msg.parentElement.removeChild(msg);
//   });

//remove() method is new, back then we use to delete child elemet by selecting parentElement first.

//styles, attribute and clases
msg.style.backgroundColor = "#37383d";
msg.style.width = "105%";

// console.log(msg.style.color); // will get nothing

// console.log(msg.style.backgroundColor); // because that is inline

// console.log(getComputedStyle(msg).height);

msg.style.height =
  Number.parseFloat(getComputedStyle(msg).height, 10) + 20 + "px";

//attribute
const logo = getEle("logo");
// console.log(logo);
// console.log(logo.src);
// console.log(logo.alt);
logo.alt = "logo";
// console.log(logo.alt);
// logo.src = "/img/img-3.jpg";
// console.log(logo.classList.contains("logo"));

//smooth scrollling - 1 old way

const btnScrollTo = getEle("hero-btn");
const section1 = getEle("section-1");

btnScrollTo.addEventListener("click", function (e) {
  const s1Coord = section1.getBoundingClientRect();
  // console.log(s1Coord);

  // console.log(e);

  // console.log(e.target.getBoundingClientRect());

  // console.log("current Scroll", window.pageXOffset, window.pageYOffset);
  // console.log("current Scroll", window.scrollX, window.scrollY);

  // console.log(document.documentElement.clientHeight);
  // console.log(document.documentElement.clientWidth);

  //scrolling
  // window.scrollTo(s1Coord.left + window.scrollX, s1Coord.top + window.scrollY);

  // window.scrollTo({
  //   left: s1Coord.left + window.scrollX,
  //   top: s1Coord.top + window.scrollY,
  //   behavior: "smooth",
  // });

  section1.scrollIntoView({ behavior: "smooth" });
});

//randome color
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randdomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

// console.log(randdomColor());

// getEle("nav-link").addEventListener("click", function (e) {
//   this.style.backgroundColor = randdomColor();
//   console.log("link", e.target, e.currentTarget);
// });

getEle("nav-links").addEventListener("click", function (e) {
  e.preventDefault();
  // console.log(e.target);
  if (e.target.classList.contains("nav-link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// getEle("header-nav").addEventListener("click", function (e) {
//   this.style.backgroundColor = randdomColor();
//   console.log("nav", e.target, e.currentTarget);
// });

const h1 = getEle("hero-heading");

//going downward, selecting child elemetn
// 1. querySelectror & querySelectorAll
// 2. childeNodes
// 3. children
// 4. fist and last child

// console.log(h1.querySelectorAll(".highlight"));
// console.log(h1.childNodes); // direct child node

// console.log(h1.children);

// console.log(h1.firstElementChild);
h1.firstElementChild.style.color = "white";
// h1.lastElementChild.style.color = "orange";

// going upward
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// h1.closest(".header").style.backgroundColor = "yellow";
// console.log(h1.closest("html"));

//tabed component

// const tabs = document.querySelectorAll(".tab-btn");
const operations = document.querySelectorAll(".operation");

getEle("tab-btns").addEventListener("click", function (e) {
  e.preventDefault();

  if (!e.target.classList.contains("tab-btn")) return;

  const tabs = [...e.target.parentElement.children];

  tabs.forEach((el) => el.classList.remove("active-tab-btn"));
  operations.forEach((el) => el.classList.add("hidden"));

  // if (e.target.classList.contains("tab-btn")) {
  e.target.classList.add("active-tab-btn");

  // const data = e.target.getAttribute("data-tab");
  const data = e.target.dataset.tab;
  document.querySelector(`.operation-${data}`).classList.remove("hidden");
  // }
});

const fadeOutEffect = function (e) {
  if (e.target.classList.contains("nav-link")) {
    const hoverLink = e.target;
    const siblingLinks = hoverLink
      .closest(".header-nav")
      .querySelectorAll(".nav-link"); // ned to select all the siblings
    const logo = hoverLink.closest(".header-nav").querySelector("img");

    siblingLinks.forEach((el) => {
      if (el !== hoverLink) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

getEle("header-nav").addEventListener("mouseover", fadeOutEffect.bind(0.5));

getEle("header-nav").addEventListener("mouseout", fadeOutEffect.bind(1));

//sticky navigation-bar, scroll event
// const initialCord = section1.getBoundingClientRect();
// window.addEventListener("scroll", function () {
//   if (window.scrollY >= initialCord.top)
//     getEle("header-nav").classList.add("sticky");
//   else getEle("header-nav").classList.remove("sticky");
// });

// intersection obeserver
// const obsCallBack = function (entries, obeserver) {
//   entries.forEach((entry) => {
//     console.log(entries);
//   });
// };

// const obsOption = {
//   root: null, // for entire viwport
//   // threshold: 0.1,
//   threshold: [0, 0.1],
// };

// const observer = new IntersectionObserver(obsCallBack, obsOption);
// observer.observe(section1);

const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);
  if (!entry.isIntersecting) {
    getEle("header-nav").classList.add("sticky");
  } else {
    getEle("header-nav").classList.remove("sticky");
  }
};

const navHeight = getEle("header-nav").getBoundingClientRect().height;

const headerObeserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `${-navHeight}px`,
});
headerObeserver.observe(header);

// reveal on scroll
const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section-hidden");
});

//Lazy loaing images
const imgTarget = document.querySelectorAll("img[data-src]");
console.log(imgTarget);

const loadImage = function (entries, obeserver) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  //replace src with dataScr
  // console.log(entry.target.dataset.src);
  entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener("load", () => {
    entry.target.classList.remove("lazy-img");
  });

  obeserver.unobserve(entry.target);
};

const imgObserver = new IntersectionObserver(loadImage, {
  root: null,
  threshold: 0,
  rootMargin: "10px",
});

imgTarget.forEach((img) => imgObserver.observe(img));

//events

// document.addEventListener("DOMContentLoaded", function (e) {
//   console.log("html parsed and dom tree built!", e);
// });

// window.addEventListener("load", function () {
//   console.log("all the documents and images are ready");
// });

window.addEventListener("beforeunload", function (e) {
  // e.preventDefault();
  console.log(e);
  e.returnValue = "";
});
