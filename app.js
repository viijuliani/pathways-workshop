const API_URL = "https://script.google.com/macros/s/AKfycbzXtx1hj2pzACB5cn7MWlBPs6CjTfidVI5bK0-MQNb-c2g_dKo_3uZmGZqNLkrMTVyH/exec";

const pathways = [
  "Optimise Flexibility",
  "Monetise Flexibility",
  "Collectivise Flexibility",
  "Democratic Flexibility",
  "Alternative to Flexibility"
];

let currentPathway = 0;

const survey = document.getElementById("survey");

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    showPathway(data.criteria);

  })
  .catch(error => {

    survey.innerHTML =
      "<p style='color:red'>Unable to load criteria.</p>";

    console.error(error);

  });

function showPathway(criteria) {

  let html = `
    <div class="card">

      <h2>${pathways[currentPathway]}</h2>

  `;

  criteria.forEach((criterion, index) => {

    html += `

      <div class="criterion">

        <h3>${criterion}</h3>

        <label>Minimum Score</label>

        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value="0"
          id="min_${index}"
        >

        <label>Maximum Score</label>

        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value="100"
          id="max_${index}"
        >

      </div>

    `;

  });

  html += `

      <button id="nextBtn">
        ${currentPathway < pathways.length - 1 ? "Next" : "Weight Criteria"}
      </button>

    </div>

  `;

  survey.innerHTML = html;

  document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

      currentPathway++;

      if (currentPathway < pathways.length) {

        showPathway(criteria);

      } else {

        showWeighting(criteria);

      }

    });

}
