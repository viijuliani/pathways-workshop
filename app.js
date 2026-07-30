const API_URL =
"https://script.google.com/macros/s/AKfycbzXtx1hj2pzACB5cn7MWlBPs6CjTfidVI5bK0-MQNb-c2g_dKo_3uZmGZqNLkrMTVyH/exec";

fetch(API_URL)
.then(response => response.json())
.then(data => {

  const container =
  document.getElementById("survey");

  data.criteria.forEach(item => {

    const div =
    document.createElement("div");

    div.innerHTML = `
      <h3>${item}</h3>
      <input
      type="range"
      min="0"
      max="100"
      step="5">
    `;

    container.appendChild(div);

  });

});
const pathways = [

"Optimise Flexibility",

"Monetise Flexibility",

"Collectivise Flexibility",

"Democratic Flexibility",

"Alternative to Flexibility"

];
