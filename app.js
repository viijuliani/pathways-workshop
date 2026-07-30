window.onload = function () {

  const survey = document.getElementById("survey");

  survey.innerHTML = `
    <h2>JavaScript loaded successfully</h2>
    <p>noUiSlider type: ${typeof noUiSlider}</p>
  `;

  console.log("JavaScript is running");
  console.log("noUiSlider =", typeof noUiSlider);

};
