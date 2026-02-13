const quotesDiv = document.querySelector(".quotes");
const fpName = document.querySelector("#fpname");
const spName = document.querySelector("#spname");

const valentineQuotes = [
  `You are my forever Valentine,
  The one who makes my heart shine.
  Happy Valentine's Day, my loveee!`,
  
  `You are the reason I believe in love,
  You are my blessing from above.
  I wish you endless happiness and love every day!`,
  
  `You are my heart, my soul, my everything,
  With you, my life is forever spring.
  Happy Valentine's Day, darling!`,
  
  `You are my today, tomorrow, and forever,
  My love for you will never waver.
  Happy Valentine's Day, sweetheart!`,
  
  `You are my sunshine on cloudy days,
  My guiding light in every way.
  May your days always be filled with joy and smiles!`,
  
  `Mai, since you came into my life,
  Everything feels happier, softer, and more meaningful.
  I am truly grateful to have you as my love.`,

  `Thank you for coming into my life,
  For being my love and making me happier every single day.
  Thank you, Meii. I love you so much!`,

  
  `With you, every day feels special and full of joy,
  Your smile is my favorite happiness.
  I love you more and more each day, Meii.`
];

const valentineBackgrounds = [
  "./assets/meii/Gemini_Generated_Image_v50c52v50c52v50c.png",
  "./assets/meii/card/IMG_1.jpg",
  "./assets/meii/card/IMG_2.jpg",
  "./assets/meii/card/IMG_3.jpg",
  "./assets/meii/card/IMG_4.jpg",
  "./assets/meii/card/IMG_8.jpg",
  "./assets/meii/card/IMG_9.jpg",

];

// Render quotes
valentineQuotes.forEach(q => {
  const link = document.createElement("a");
  link.href = "card.html?source=valentine";

  const p = document.createElement("p");
  p.classList.add("quote");
  p.innerText = q;

  link.appendChild(p);
  quotesDiv.appendChild(link);
});

// Handle click
document.querySelectorAll(".quote").forEach(quote => {
  quote.addEventListener("click", e => {
    localStorage.setItem("chosenQuote", e.target.innerText);

    const randomBg =
      valentineBackgrounds[
        Math.floor(Math.random() * valentineBackgrounds.length)
      ];

    localStorage.setItem("valentineBg", randomBg);
  });
});
// Set names directly
fpName.innerText = "Hà";
spName.innerText = "Mai";

// Create quote elements
// const quotesNr = valentineQuotes.length;
// for (let i = 0; i < quotesNr; i++) {
//   const link = document.createElement('a');
//   link.setAttribute('href', 'card.html?source=valentine');
//   const para = document.createElement("p");
//   para.classList.add("quote");
//   para.innerText = valentineQuotes[i];
//   link.appendChild(para);
//   quotesDiv.appendChild(link);
// }

// Handle quote selection
const quoteDivs = document.querySelectorAll(".quote");
quoteDivs.forEach(quote => {
  quote.addEventListener('click', function (e) {
    const chosenQuote = e.target.innerText;
    localStorage.setItem("chosenQuote", chosenQuote);
  });
});