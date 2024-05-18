const items = document.querySelectorAll(".carousel-item");
const dots = document.querySelectorAll(".pagination-dot");
let currentItem = 0;

const showItem = (index) => {
  items[currentItem].classList.remove("visible");
  items[currentItem].classList.add("hidden");
  dots[currentItem].classList.remove("opacity-100");
  dots[currentItem].classList.add("opacity-50");

  currentItem = index;

  items[currentItem].classList.remove("hidden");
  items[currentItem].classList.add("visible");
  dots[currentItem].classList.remove("opacity-50");
  dots[currentItem].classList.add("opacity-100");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    showItem(index);
  });
});

let touchstartX = 0;
let touchendX = 0;

const handleGesture = () => {
  if (touchendX < touchstartX) {
    showItem((currentItem + 1) % items.length);
  }
  if (touchendX > touchstartX) {
    showItem((currentItem - 1 + items.length) % items.length);
  }
};

document.getElementById("carousel").addEventListener("touchstart", (e) => {
  touchstartX = e.changedTouches[0].screenX;
});

document.getElementById("carousel").addEventListener("touchend", (e) => {
  touchendX = e.changedTouches[0].screenX;
  handleGesture();
});

// Automatic slide change every 5 seconds
setInterval(() => {
  showItem((currentItem + 1) % items.length);
}, 5000);

function toggleCards(showCardsId, btnShowCardsId, btnMoreId, btnLessId) {
  const showCards = document.getElementById(showCardsId);
  const btnShowCards = document.getElementById(btnShowCardsId);
  const btnMore = document.getElementById(btnMoreId);
  const btnLess = document.getElementById(btnLessId);

  btnShowCards.addEventListener("click", () => {
    const isHidden = showCards.classList.contains("hidden");
    showCards.classList.toggle("hidden", !isHidden);
    btnLess.classList.toggle("hidden", !isHidden);
    btnMore.classList.toggle("hidden", isHidden);
  });
}

toggleCards("showCards", "showBtn", "btnMore", "btnLess");
toggleCards("showCards1", "showBtn1", "btnMore1", "btnLess1");
toggleCards("showCards2", "showBtn2", "btnMore2", "btnLess2");

const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "vertical",
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  // And if we need scrollbar
  scrollbar: {
    el: ".swiper-scrollbar",
  },
});
