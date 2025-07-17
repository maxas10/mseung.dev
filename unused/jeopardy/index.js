var categories = document.getElementsByClassName("category");
var sections = document.getElementsByClassName("section");
for (let i = 0; i < sections.length; i++) {
  sections[i].style.opacity = "0";
}

var revealInterval = "";

const introAudio = document.getElementById("introAudio");
const questionPage = document.getElementById("questionPage");
const question = document.getElementById("question");
const board = document.getElementById("board");
const titlePage = document.getElementById("titlePage");
const title = document.getElementById("title");
var db = [
  "This is another word for the event of two or more objects hitting each other.",
  "This is the opposite of kinetic energy.",
  "This is the instrument used to measure newton forces.",
  "An object reaches this point when it breaks.",
  "An object reaches this point when it permanently deforms.",
  "This is what amplitude does to sound.",
  "This is the way you find the pitch of a sound wave in 2D.",
  "This is the tool you use to measure sound waves in 2D.",
  "This is what sound needs to travel.",
  "This is the sound you will hear when the frequency is 100 hz and the amplitude is 500 hz.",
  "The two poles on a magnet.",
  "A magnet that can turn on and off using electricity.",
  "This is what happens to the magnets if both of their north poles are facing each other.",
  "These are the necessary components of a speaker.",
  "This was the last time the earth changed magnetic poles.",
  "This is the time it takes for a full moon cycle to happen around the Earth.",
  "The time that elapses every moon phase.",
  "This is the imaginary line perpendicular to the sun and moon.",
  "This is how solar and lunar eclipses happen.",
  "This was the moon phase last night.",
  "These proteins are only present in muscle cells.",
  "Humans have this amount of chromosomes in normal cells.",
  "This is the shapes of the bottom set of alleles on a chromosome, to get heavy muscled cows, using a diagram.",
  "This is the nickname of the protein GDFA.",
  "He is the son of Jim. (the cow)",
  "What is a collision?",
  "What is potential energy?",
  "What is a force gauge? (spring scale)",
  "What is the breaking point?",
  "What is the elastic limit?",
  "What is increasing volume?",
  "What is counting valleys/peaks?",
  "What is an oscilloscope?",
  "What is a medium?",
  "What is a deep and loud sound?",
  "What is north and south?",
  "What is an electromagnet?",
  "What is to repel?",
  "What is voice coil, magnet, etc?",
  "When was 780,000 years ago?",
  "What is a month?",
  "What is half a week?",
  "What is a sun-moon bisector?",
  "What is the earth's/moon's shadow blocks the moon/sun?",
  "What is a Waning Crescent? (May 27)",
  "What is myosin and actin?",
  "What is 46 chromosomes/23 pairs?",
  "What is 2 blue stars?",
  "What is myostatin?",
  "Who is Grayboy?",
];
var category = 1;
var section = 0;
var thing;
function intro() {
  var categoryReveal = 0;
  var randomReveal = 0;
  var newSections = [...sections];
  introAudio.volume = 1;
  if (!introPlayed) {
    introAudio.play();
    introPlayed = true;
  }
  revealInterval = setInterval(function () {
    if (newSections.length <= 0) {
      clearInterval(revealInterval);
      for (let i = 0; i < sections.length; i++) {
        sections[i].style.cursor = "pointer";
        sections[i].id = section;
        function goHome() {
          questionPage.style.display = "none";
          board.style.display = "flex";
          thing.style.opacity = "0";
          questionPage.removeEventListener("click", goHome);
        }
        sections[i].addEventListener("click", function () {
          thing = this;
          questionPage.style.display = "flex";
          board.style.display = "none";
          question.innerHTML = db[Number(this.id)];
          questionPage.addEventListener("click", function () {
            question.innerHTML = db[Number(thing.id) + 25];
            questionPage.addEventListener("click", goHome);
          });
        });
        section++;
      }
    } else {
      randomReveal = Math.floor(Math.random() * newSections.length) + 0;
      newSections[randomReveal].style.opacity = "1";
      newSections.splice(randomReveal, 1);
    }
  }, 90);
}

var titleRemoved = false;
var introPlayed = false;
document.addEventListener("click", function () {
  if (titleRemoved == false) {
    titlePage.style.animationName = "slideToTop";
    title.style.animationName = "slideToRight";
    titleRemoved = true;
  } else if (revealInterval == "" && titleRemoved == true) {
    intro();
  }
});
