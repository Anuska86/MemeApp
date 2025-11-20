import { catsData } from "./catsData.js";

const emotionRadiosDiv = document.getElementById("emotion-radios");

const getImageBtn = document.getElementById("get-image-btn");

emotionRadiosDiv.addEventListener("change", highlightCheckedOption);

//Get the cats

function getMatchingCatsArray() {
  const checkedRadio = document.querySelector('input[type="radio"]:checked');

  if (checkedRadio) {
    console.log(checkedRadio.value);
    return checkedRadio.value;
  }

  return null;
}

getImageBtn.addEventListener("click", getMatchingCatsArray);

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
