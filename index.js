import { catsData } from "./catsData.js";

const emotionRadiosDiv = document.getElementById("emotion-radios");

const getImageBtn = document.getElementById("get-image-btn");
const onlyGiftsCheckbox = document.getElementById("gifs-only-option");
const memeModalInner = document.getElementById("meme-modal-inner");
const memeModal = document.getElementById("meme-modal");
const closeModalBtn = document.getElementById("meme-modal-close-btn");

emotionRadiosDiv.addEventListener("change", highlightCheckedOption);
console.log("Listener attached");
getImageBtn.addEventListener("click", renderCat);

getImageBtn.addEventListener("click", renderCat);
closeModalBtn.addEventListener("click", closeModal);

//Get the matching cats

function getMatchingCatsArray() {
  if (document.querySelector('input[type="radio"]:checked')) {
    const selectedEmotion = document.querySelector(
      'input[type="radio"]:checked'
    ).value;
    const isOnlyGiftsChecked = onlyGiftsCheckbox.checked;

    const matchingCat = catsData.filter((cat) => {
      if (isOnlyGiftsChecked) {
        return cat.emotionTags.includes(selectedEmotion) && cat.isGif;
      } else {
        return cat.emotionTags.includes(selectedEmotion);
      }
    });
    return matchingCat;
  }

  return [];
}

//fetch a single cat

function getRandomCat(catsArray) {
  const randomIndex = Math.floor(Math.random() * catsArray.length);
  return catsArray[randomIndex];
}

function getSingleCat() {
  const catsArray = getMatchingCatsArray();
  console.log("Matching cats:", catsArray);

  if (catsArray.length === 1) {
    console.log("One match found");

    return catsArray[0];
  } else if (catsArray.length > 1) {
    console.log("Multiple matches found");

    return getRandomCat(catsArray);
  } else {
    console.log("No matching cats found.");
    return null;
  }
}

function renderCat() {
  const catObject = getSingleCat();
  if (!catObject) {
    console.log("No cat to render");
    return;
  }

  memeModalInner.innerHTML = `
    <img 
    class="cat-img" 
    src="./images/${catObject.image}"
    alt="${catObject.alt}"
    >
    `;
  memeModal.style.display = "flex";
  console.log("Modal opened");
}

//Highlight the choice

function highlightCheckedOption(e) {
  const currentHighlight = emotionRadiosDiv.querySelector(".highlight");
  const selectedRadio = e.target;
  const parentContainer = selectedRadio.parentElement;

  if (currentHighlight) {
    currentHighlight.classList.remove("highlight");
  }

  parentContainer.classList.add("highlight");
}

//Fetch the emotions

function getEmotionsArray(cats) {
  const catsEmotions = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      catsEmotions.push(emotion);
    }
  }
  return catsEmotions;
}

//Render the emotions

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItemsHtml = "";

  const uniqueEmotions = [...new Set(emotions)];

  for (let emotion of uniqueEmotions) {
    radioItemsHtml += `<div class="radio">
            <input type="radio" id="${emotion}" value="${emotion}" name="emotions">
            <label for="${emotion}">${emotion.toUpperCase()}</label><br>
            </div>
        `;
  }

  emotionRadiosDiv.innerHTML = radioItemsHtml;
}

renderEmotionsRadios(catsData);

//Close the modal

function closeModal() {
  memeModal.style.display = "none";
}
