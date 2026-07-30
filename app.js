const pathways = [
    "Optimise Flexibility",
    "Monetise Flexibility",
    "Collectivise Flexibility",
    "Democratic Flexibility",
    "Alternative to Flexibility"
];

const criteria = [
    "Equity",
    "Sustainability",
    "Cost"
];

let currentPathway = 0;

const responses = {};

window.onload = function () {

    renderPathway();

};

function renderPathway() {

    const survey = document.getElementById("survey");

    let html = `
        <div class="card">
            <h2>${pathways[currentPathway]}</h2>
    `;

    criteria.forEach((criterion, index) => {

        html += `
            <div class="criterion">

                <h3>${criterion}</h3>

                <div id="slider${index}"></div>

                <div class="scale-labels">
                    <span>0</span>
                    <span>50</span>
                    <span>100</span>
                </div>

                <p>
                    Min:
                    <span id="minValue${index}">20</span>

                    &nbsp;&nbsp;&nbsp;

                    Max:
                    <span id="maxValue${index}">80</span>
                </p>

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

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    criteria.forEach((criterion, index) => {

        const slider = document.getElementById(`slider${index}`);

        noUiSlider.create(slider, {

            start: [20, 80],

            connect: true,

            step: 5,

            range: {
                min: 0,
                max: 100
            }

        });

        slider.noUiSlider.on("update", function (values) {

            document.getElementById(`minValue${index}`).textContent =
                Math.round(values[0]);

            document.getElementById(`maxValue${index}`).textContent =
                Math.round(values[1]);

        });

    });

    document
        .getElementById("nextBtn")
        .addEventListener("click", saveAndNext);

}

function saveAndNext() {

    const pathwayName = pathways[currentPathway];

    responses[pathwayName] = {};

    criteria.forEach((criterion, index) => {

        const slider =
            document.getElementById(`slider${index}`);

        const values =
            slider.noUiSlider.get();

        responses[pathwayName][criterion] = {
            min: Number(values[0]),
            max: Number(values[1])
        };

    });

    console.log(responses);

    currentPathway++;

    if (currentPathway < pathways.length) {

        renderPathway();

    } else {

        renderWeightingPage();

    }

}

function renderWeightingPage() {

    const survey = document.getElementById("survey");

    survey.innerHTML = `
        <div class="card">

            <h2>Criteria 
