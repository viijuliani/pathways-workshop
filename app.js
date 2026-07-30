window.onload = function () {

    const survey = document.getElementById("survey");

    survey.innerHTML = `
        <h2>noUiSlider Test</h2>
        <div id="slider"></div>
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

};
