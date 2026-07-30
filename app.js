const API_URL = "https://script.google.com/macros/s/AKfycbzXtx1hj2pzACB5cn7MWlBPs6CjTfidVI5bK0-MQNb-c2g_dKo_3uZmGZqNLkrMTVyH/exec";

const survey = document.getElementById("survey");

survey.innerHTML = "Connecting...";

fetch(API_URL)
  .then(response => {
    survey.innerHTML =
      "Response status: " + response.status;

    return response.text();
  })
  .then(text => {
    survey.innerHTML +=
      "<pre>" + text + "</pre>";
  })
  .catch(error => {
    survey.innerHTML =
      "ERROR: " + error;
  });
