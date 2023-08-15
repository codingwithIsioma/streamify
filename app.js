// TOGGLE PLAY-PAUSE BTN
const playBtn = document.querySelector("#play-btn");
const pauseBtn = document.querySelector("#pause-btn");

function togglePlayPause() {
  if (playBtn.style.display === "none") {
    playBtn.style.display = "block";
    pauseBtn.style.display = "none";
  } else {
    playBtn.style.display = "none";
    pauseBtn.style.display = "block";
  }
}

playBtn.addEventListener("click", () => {
  togglePlayPause();
});
pauseBtn.addEventListener("click", () => {
  togglePlayPause();
});

// TOGGLE LIKED SONG
const likedBtn = document.querySelector(".heart");

likedBtn.addEventListener("click", () => {
  likedBtn.classList.toggle("liked-song");
});

const userAuth = document.querySelector(".user-greeting");
// let userName = prompt("Enter your name: ");

if (userName != null) {
  userAuth.innerHTML = `Hello, ${userName}`;
}
