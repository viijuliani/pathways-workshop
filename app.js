window.onload = function () {

    const survey = document.getElementById("survey");

    survey.innerHTML = `
        <h2>Slider Test</h2>

        <div id="slider"></div>

        <div class="scale-labels">
            <span>0</span>
            <span>50</span>
            <span>100</span>
        </div>

        <p>
            Min:
            <span id="minValue">20</span>

            &nbsp;&nbsp;&nbsp;

            Max:
            <span id="maxValue">80</span>
        </p>
    `;

    const slider = document.getElementById("slider");

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

        document.getElementById("minValue").textContent =
            Math.round(values[0]);

        document.getElementById("maxValue").textContent =
            Math.round(values[1]);

    });

};
