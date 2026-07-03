const API_BASE_URL = "http://localhost:8081/api";

const loadButton = document.querySelector("#loadButton");
const statusText = document.querySelector("#statusText");
const eventList = document.querySelector("#eventList");

function showStatus(message) {
    statusText.textContent = message;
}

function formatEvent(event) {
    return `${event.title} - ${event.date} - ${event.venue} - ${event.availableSeats} seats available`;
}

function renderEvents(events) {
    eventList.innerHTML = "";

    events.forEach(event => {
        const listItem = document.createElement("li");
        listItem.textContent = formatEvent(event);
        eventList.appendChild(listItem);
    });
}

function renderSingleEvent(event) {
    eventList.innerHTML = "";

    const listItem = document.createElement("li");
    listItem.textContent = formatEvent(event);

    eventList.appendChild(listItem);
}

async function getJson(url) {
    const response = await fetch(url);

    if (!response.ok) {
        let message = `Request failed with status ${response.status}.`;

        try {
            const errorBody = await response.json();
            message = errorBody.message || message;
        } catch (error) {
            // Keep the status-based message if the response is not JSON.
        }

        throw new Error(message);
    }

    return response.json();
}

async function loadEvents() {
    showStatus("Loading events...");

    try {
        const data = await getJson(`${API_BASE_URL}/events`);
        renderEvents(data);
        showStatus(`${data.length} event(s) loaded successfully.`);
    } catch (error) {
        showStatus(`Unable to load events: ${error.message}`);
    }
}

async function searchEventById(event) {
    event.preventDefault();

    const eventId = document.querySelector("#eventIdInput").value.trim().toUpperCase();

    if (!eventId) {
        showStatus("Enter an event ID before searching.");
        eventList.innerHTML = "";
        return;
    }

    showStatus(`Searching for ${eventId}...`);

    try {
        const data = await getJson(`${API_BASE_URL}/events/${encodeURIComponent(eventId)}`);
        renderSingleEvent(data);
        showStatus(`Event ${eventId} loaded successfully.`);
    } catch (error) {
        showStatus(`Unable to find event: ${error.message}`);
    }
}

function createSearchForm() {
    const searchForm = document.createElement("form");
    searchForm.id = "searchForm";

    const label = document.createElement("label");
    label.setAttribute("for", "eventIdInput");
    label.textContent = "Search Event by ID: ";

    const input = document.createElement("input");
    input.id = "eventIdInput";
    input.name = "eventIdInput";
    input.type = "text";
    input.placeholder = "Example: EV001";

    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Search";

    searchForm.appendChild(label);
    searchForm.appendChild(input);
    searchForm.appendChild(button);

    eventList.before(searchForm);

    searchForm.addEventListener("submit", searchEventById);
}

loadButton.addEventListener("click", loadEvents);
createSe searchForm();
