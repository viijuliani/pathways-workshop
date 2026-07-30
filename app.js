const API_URL =
"https://YOUR_SCRIPT_URL_HERE";

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
