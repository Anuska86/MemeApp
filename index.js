const emotionRadiosDiv = document.getElementById("emotion-radios");

async function getCatsData() {
  try {
    const response = await fetch("./catsData.json");

    if (!response.ok) {
      throw new Error("HTTP error! status: ${response.status");
    }
    const catsData = await response.json();

    renderEmotionsRadios(catsData);
  } catch (error) {
    console.error("Could not fetch the cats data", error);
  }
}

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
  console.log(emotions);
}

getCatsData();
