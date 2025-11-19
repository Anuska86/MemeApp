import { catsData } from "./catsData";

const emotionRadiosDiv = document.getElementById("emotion-radios");

function getEmotionsArray(cats) {
  const catsEmotions = [];

  for (let cat of cats) {
    for (let emotion of cat.emotionTags) {
      catsEmotions.push(emotion);
    }
  }
  return catsEmotions;
}

function renderEmotionsRadios(cats) {
  const emotions = getEmotionsArray(cats);

  let radioItemsHtml = "";

  const uniqueEmotions = [...new Set(emotions)];

  for (let emotion of uniqueEmotions) {
    radioItemsHtml += `
            <input type="radio" id="${emotion}" value="${emotion}" name="emotions">
            <label for="${emotion}">${emotion.toUpperCase()}</label><br>
        `;
  }

  emotionRadiosDiv.innerHTML = radioItemsHtml;
}

renderEmotionsRadios();
