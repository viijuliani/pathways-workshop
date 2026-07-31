const API_URL =
    "YOUR_APPS_SCRIPT_URL?action=count";

async function loadCount() {

    try {

        const response =
            await fetch(API_URL);

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

        console.error(error);

    }

}

document
    .getElementById("refreshBtn")
    .addEventListener("click", loadCount);

loadCount();
