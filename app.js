const API_URL = "PASTE_YOUR_APPS_SCRIPT_URL_HERE";

const survey = document.getElementById("survey");

survey.innerHTML = "Connecting to workshop...";

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
      "<p style='color:red'>Error connecting to Google Sheets</p>";

    console.error(error);

  });
