const API_URL = "https://script.google.com/macros/s/AKfycbzXtx1hj2pzACB5cn7MWlBPs6CjTfidVI5bK0-MQNb-c2g_dKo_3uZmGZqNLkrMTVyH/exec";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    const survey = document.getElementById("survey");

    survey.innerHTML = `
      <h2>Criteria loaded from Google Sheets</h2>
    `;

    data.criteria.forEach(criteria => {

      const p = document.createElement("p");

      p.textContent = criteria;

      survey.appendChild(p);

    });

  })
  .catch(error => {

    document.getElementById("survey").innerHTML =
      "Error connecting to Google Sheets.";

    console.error(error);

  });
