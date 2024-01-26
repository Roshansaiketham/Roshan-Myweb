/* ----- NAVIGATION BAR FUNCTION ----- */
function myMenuFunction() {
  let menuBtn = document.getElementById("myNavMenu");

  if (menuBtn.className === "nav-menu") {
    menuBtn.className += " responsive";
  } else {
    menuBtn.className = "nav-menu";
  }
}

document.getElementById("html").querySelector(".bar").style.width = "79%";
document.getElementById("css").querySelector(".bar").style.width = "60%";
document.getElementById("js").querySelector(".bar").style.width = "92%";

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
window.onscroll = function () {
  headerShadow();
};

function headerShadow() {
  const navHeader = document.getElementById("header");

  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
    navHeader.style.height = "70px";
    navHeader.style.lineHeight = "70px";
  } else {
    navHeader.style.boxShadow = "none";
    navHeader.style.height = "90px";
    navHeader.style.lineHeight = "90px";
  }
}

/* ----- TYPING EFFECT ----- */
let typingEffect = new Typed(".typedText", {
  strings: ["Designer", "Ethical Hacker", "Data Analyst"],
  loop: true,
  typeSpeed: 100,
  backSpeed: 80,
  backDelay: 2000,
});

/* ----- SCROLL REVEAL ANIMATION ----- */
// (Remaining code unchanged)

/* ----- CHANGE ACTIVE LINK ----- */
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute("id");

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.add("active-link");
    } else {
      document
        .querySelector(".nav-menu a[href*=" + sectionId + "]")
        .classList.remove("active-link");
    }
  });
}

window.addEventListener("scroll", scrollActive);

/* ----- CODEPEN IMPORT FUNCTION ----- */
function importCodePen() {
  // Add your CodePen import logic here
  console.log("Importing CodePen...");
  // Add more code as needed
}

// Call the importCodePen function when the CodePen icon is clicked
document
  .querySelector(".fab.fa-codepen")
  .addEventListener("click", importCodePen);

// Alert for mobile view
if (window.innerWidth <= 767) {
  alert("For the best experience, please view this site on a desktop or turn on desktop site mode on your mobile device.");
}
window.onload = function() {
            checkScreenSize();
            window.addEventListener('resize', checkScreenSize);
        };

        function checkScreenSize() {
            var screenWidth = window.innerWidth;

            if (screenWidth <= 768) { // You can adjust this value based on your design
                alert("For better performance, consider switching to desktop view.");
            }
        }
