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
  .then(response => response.text())
  .then(text => {

    const data = JSON.parse(text);

    renderPathway(data.criteria);

  })
  .catch(error => {

    survey.innerHTML =
      "<p style='color:red'>Error loading criteria.</p>";

    console.error(error);

  });

function renderPathway(criteria) {

  let html = `
    <div class="card">
      <h2>${pathways[currentPathway]}</h2>
  `;

  criteria.forEach((criterion, index) => {

    html += `
      <div class="criterion">

        <h3>${criterion}</h3>

        <p>Minimum Score: <span id="minValue${index}">0</span></p>

        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value="0"
          id="min${index}"
        >

        <p>Maximum Score: <span id="maxValue${index}">100</span></p>

        <input
          type="range"
          min="0"
          max="100"
          step="5"
          value="100"
          id="max${index}"
        >

      </div>
    `;
  });

  html += `
      <button id="nextBtn">Next</button>
    </div>
  `;

  survey.innerHTML = html;

  criteria.forEach((criterion, index) => {

    document
      .getElementById(`min${index}`)
      .addEventListener("input", function () {

        document.getElementById(`minValue${index}`)
          .textContent = this.value;

      });

    document
      .getElementById(`max${index}`)
      .addEventListener("input", function () {

        document.getElementById(`maxValue${index}`)
          .textContent = this.value;

      });

  });

  document
    .getElementById("nextBtn")
    .addEventListener("click", () => {

      currentPathway++;

      if (currentPathway < pathways.length) {

        renderPathway(criteria);

      } else {

        survey.innerHTML = `
          <div class="card">
            <h2>Success!</h2>
            <p>You have completed all 5 pathways.</p>
          </div>
        `;

      }

    });
}
