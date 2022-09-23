let start = document.querySelector(".start");
let wronsound = new Audio("Incorrect Sound Effects All Sounds.mp3");
let correctsound = new Audio(
  "Correct Answer Sound Effect  NO COPYRIGHT 🎤🎶.mp3"
);
let startbtn = document.querySelector(".startbtn");
let Uname = document.querySelector(".name span");
let back = document.querySelectorAll(".back");
let card = document.querySelectorAll(".card");
let un = document.querySelectorAll(".unknown");
let winner = document.querySelector(".winner");
let worn = document.querySelector(".tries span");
let replay = document.querySelector(".replay");
let win = document.querySelector(".winner .main p");
startbtn.addEventListener("click", function () {
  Uname.textContent = prompt("Enter Your Name", "UserName");
  if (Uname.textContent !== null && Uname.textContent !== "") {
    start.style.display = "none";

    setTimeout(function () {
      card.forEach((e) => {
        e.classList.remove("notactive");
        e.classList.add("active");
        e.firstElementChild.style.zIndex = "0";
        e.lastElementChild.style.zIndex = "1";
      });
    }, 100);
    setTimeout(function () {
      card.forEach((e) => {
        e.classList.remove("active");
        e.classList.add("notactive");
        e.firstElementChild.style.zIndex = "1";
        e.lastElementChild.style.zIndex = "0";
      });
    }, 3500);
  }
});
let cnt = 0;
let cnte = 0;
let s = [];
card.forEach(function (elem) {
  elem.addEventListener("click", function () {
    elem.classList.remove("notactive");
    elem.classList.add("active");
    elem.firstElementChild.style.zIndex = "0";
    elem.lastElementChild.style.zIndex = "1";

    s.push(elem);
    if (s.length === 2) {
      if (s[0].dataset.club === s[1].dataset.club) {
        s = [];
        correctsound.play();
      } else {
        setTimeout(function () {
          s.forEach((e) => {
            e.classList.remove("active");
            e.classList.add("notactive");
            e.firstElementChild.style.zIndex = "1";
            e.lastElementChild.style.zIndex = "0";
          });
          wronsound.play();
          s = [];
        }, 1000);
        worn.textContent++;
      }
    }
    let active = document.querySelectorAll(".active");
    if (active.length === 20) {
      win.textContent = `You won Mr.${Uname.textContent}`;
      winner.style.display = "flex";
    }
    if (+worn.textContent === 7) {
      win.textContent = `You lost Mr.${Uname.textContent}`;
      winner.style.display = "flex";
    }
  });
});
replay.addEventListener("click", () => {
  worn.textContent = "0";
  start.style.display = "flex";
  card.forEach((e) => {
    e.classList.remove("active");
    e.firstElementChild.style.zIndex = "1";
    e.lastElementChild.style.zIndex = "0";
  });
  winner.style.display = "none";
});
