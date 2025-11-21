# MemeApp

That's a great idea! A clear README is essential for any project.

Since I have the HTML and CSS for your Meme Picker app (and can infer the JavaScript logic), I can draft a detailed README for you.

Here is a template you can use, broken down into key sections:

🐈 Memeow's Meow-gical Meme Picker
🌟 Overview
The Meme Picker is a delightful and whimsical web application designed to match a user's current emotion with a corresponding image or animated GIF of a cat (a "memeow"). It's a fun project built primarily with vanilla HTML, CSS, and JavaScript, focusing on DOM manipulation, data handling, and user interface responsiveness.

✨ Features
Emotion-Based Selection: Users can select their current emotion from a dynamically generated list (e.g., Moody, Happy, Hungry).

GIF Filtering: A checkbox allows users to narrow down the results to show Animated GIFs only.

Dynamic Image Rendering: Fetches a random cat image/GIF from the local dataset that matches the selected criteria.

Modal Display: Displays the selected "meme" in a beautiful, centered modal window.

Tablet Simulation: The application interface is housed within a stylish, centered container to simulate a tablet viewing experience.

🚀 Getting Started
Prerequisites
You only need a modern web browser to run this application.

Installation
Clone the repository (if hosted on Git) or download the project files.

Ensure you have the following files:

index.html (The main structure)

index.css (The styles and tablet frame)

index.js (The core application logic)

catsData.js (The data source for cats and emotions)

A directory structure for images (e.g., ./images/) containing the cat images/GIFs referenced in catsData.js.

Open index.html in your web browser, or serve it using a simple local server (like Live Server in VS Code) for best results.

⚙️ Project Structure

The project is straightforward and organized:

File/Folder,Description
index.html,"Defines the structure, links the CSS and JS, and contains the header, controls, and image modal."
index.css,"Handles all styling, including typography, layout, responsiveness, and the special .tablet-container view."
index.js,"Contains the core logic: event listeners, fetching emotions, filtering cats, and rendering the final image."
catsData.js,"External file containing the array of cat objects, including their emotionTags, isGif status, and image filename."
./images/,Directory where all static assets (like memeow.jpg and the individual cat images/GIFs) are stored.

📜 License
This project is licensed under the MIT License.

MIT License
Copyright (c) 2023 Ana Sappia Rey

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

💻 Key JavaScript Functions

Function,Purpose
renderEmotionsRadios(catsData),Reads emotions from the data and dynamically inserts radio buttons into the DOM.
highlightCheckedOption(e),Visually styles the selected emotion radio button with the .highlight class.
getMatchingCatsArray(),Filters the catsData array based on the user's selected emotion and the GIF checkbox state.
getRandomCat(catsArray),Selects a random cat object if multiple matches are found.
renderCat(),Executes the selection logic and displays the resulting cat image in the modal.
closeModal(),Hides the meme modal.

🎨 Styling Highlights

Responsive Tablet View: The entire app is contained within a CSS-styled .tablet-container with specific dimensions, borders, and shadows to simulate a device frame.

Custom Fonts: Uses the Karla font from Google Fonts.

Color Palette: A soft, appealing palette centered around pinks (#ffc7d4, #fff0f5) and greens (#a2e0c7).
