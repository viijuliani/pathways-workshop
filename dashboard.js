const API_BASE =
    "https://script.google.com/macros/s/AKfycbxyuIV5Z_4iSWnj_JM2dKLq6FW5U4glq5mSRXa3CQLy6JFjQDuXYUoxmFXyL06_x1WI/exec";

async function loadCount() {

    try {

        const response =
            await fetch(
                API_BASE + "?action=count"
            );

        const text =
            await response.text();

        const data =
            JSON.parse(text);

        document
            .getElementById("counter")
            .textContent =
            `Responses Received: ${data.responses}`;

        document
            .getElementById("updated")
            .textContent =
            `Last Updated: ${new Date().toLocaleTimeString()}`;

    }

    catch (error) {

        console.error(
            "Count error:",
            error
        );

    }

}

async function loadSummary() {

    try {

        const response =
            await fetch(
                API_BASE + "?action=summary"
            );

        const text =
            await response.text();

        const data =
            JSON.parse(text);

        let html = "";

        Object.keys(data).forEach(pathway => {

            const p = data[pathway];

            html += `
                <div class="summary-row">

                    <div class="pathway-name">
                        ${pathway}
                    </div>

                    <div class="pathway-values">
                        Mean Min:
                        ${Math.round(p.meanMin)}

                        |

                        Mean Mid:
                        ${Math.round(p.meanMid)}

                        |

                        Mean Max:
                        ${Math.round(p.meanMax)}
                    </div>

                </div>
            `;

        });

        document
            .getElementById("summaryChart")
            .innerHTML = html;

    }

    catch (error) {

        console.error(
            "Summary error:",
            error
        );

    }

}

document
    .getElementById("refreshBtn")
    .addEventListener(
        "click",
        () => {

            loadCount();
            loadSummary();

        }
    );

loadCount();
loadSummary();

setInterval(() => {

    loadCount();
    loadSummary();

}, 30000);
