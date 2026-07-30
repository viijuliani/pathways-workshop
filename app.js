const API_URL = "https://script.google.com/macros/s/AKfycbzXtx1hj2pzACB5cn7MWlBPs6CjTfidVI5bK0-MQNb-c2g_dKo_3uZmGZqNLkrMTVyH/exec";

const survey = document.getElementById("survey");

survey.innerHTML = "Loading criteria...";

fetch(API_URL)
  .then(response => response.json())
  .then(data => {

    survey.innerHTML = "<h2>Workshop Criteria</h2>";

    data.criteria.forEach(criteria => {

      const p = document.createElement("p");

      p.textContent = criteria;

      survey.appendChild(p);

    });

  })
  .catch(error => {

    survey.innerHTML =
      "<p style='color:red'>Error loading criteria.</p>";

    console.error(error);

  });
