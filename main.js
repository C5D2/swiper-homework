const swiper = new Swiper(".mySwiper", {
  effect: "cards",
  grabCursor: true,
});

const checkBox = document.querySelector('input[type="checkbox"]');
const checkBoxes = document.querySelectorAll('input[type="checkbox"]');
const result = document.querySelector(".result-btn");
const resultContainer = document.querySelector(".result-container");
const modal = document.querySelector(".modal");
const modalClose = document.querySelector(".close-btn");

let checkedCount = 0;

function handleCheckedCount() {
  checkedCount = 0;
  checkBoxes.forEach((checkBox) => {
    if (checkBox.checked) {
      checkedCount++;
    }
  });
}

function resultBox(checkedCount) {
  let scoreContent = "";
  let imagePath = "";

  if (checkedCount <= 2) {
    scoreContent = "축하합니다! 응애입니다! 이제 막 태어나셨군요!";
    imagePath = "rooda.gif";
  } else if (checkedCount >= 3 && checkedCount <= 5) {
    scoreContent = "축하합니다! 아직은 어리시네요! 더 분발하세요!";
    imagePath = "zzanggu.gif";
  } else if (checkedCount >= 6 && checkedCount <= 7) {
    scoreContent = "축하합니다! 젊으시군요! 고지가 바로 앞입니다!";
    imagePath = "kakashi.webp";
  } else if (checkedCount >= 8) {
    scoreContent =
      "🎉🥳축하합니다! 범신급에 도달하셨습니다! 최고의 경지에 도달하신 그대에게 범신의 축복을!🎉";
    imagePath = "simseonbeom.png";
  }

  return `
<div class="result-title">
<h2>결과</h2>
<p>Score :  ${checkedCount}개</p>
<div class="result-img">
<img src="./assets/result/${imagePath}" alt="대충 축하하는 짤">
</div>
<p>${scoreContent}</p>
</div>
</div>
`;
}

function openModal() {
  modal.classList.add("is_active");
}

function closeModal() {
  modal.classList.remove("is_active");
}

function handleResult() {
  const resultText = resultBox(checkedCount);
  resultContainer.innerHTML = resultText;
  openModal();
  audio();
}

function audio() {
  const audio = new Audio("assets/audio/catch_you.mp3");
  if (checkedCount >= 8) {
    audio.play();
  }
}

checkBoxes.forEach((checkBox) => {
  checkBox.addEventListener("change", handleCheckedCount);
});
result.addEventListener("click", handleResult);
modalClose.addEventListener("click", closeModal);
