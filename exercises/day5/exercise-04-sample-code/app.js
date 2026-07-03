const API_BASE_URL = "http://localhost:8081/api";

const loadButton = document.querySelector("#loadButton");
const statusText = document.querySelector("#statusText");
const eventList = document.querySelector("#eventList");

function displayEvents(events) {
    eventList.replaceChildren();

    events.forEach((event) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${event.title} - ${event.date} - ${event.venue} - ${event.availableSeats} seats available`;
        eventList.appendChild(listItem);
    });
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
    statusText.textContent = "Loading events...";
    eventList.replaceChildren();
    loadButton.disabled = true;

    try {
        const events = await getJson(`${API_BASE_URL}/events`);
        displayEvents(events);
        statusText.textContent = `${events.length} event(s) loaded successfully.`;
    } catch (error) {
        statusText.textContent = `Unable to load events: ${error.message}`;
    } finally {
        loadButton.disabled = false;
    }
}

loadButton.addEventListener("click", loadEvents);

// Challenge: create controls for finding one event without editing index.html.
const searchInput = document.createElement("input");
searchInput.id = "eventIdInput";
searchInput.type = "text";
searchInput.placeholder = "Enter event ID, for example EV001";
searchInput.setAttribute("aria-label", "Event ID");

const searchButton = document.createElement("button");
searchButton.type = "button";
searchButton.textContent = "Find Event";

loadButton.insertAdjacentElement("afterend", searchInput);
searchInput.insertAdjacentElement("afterend", searchButton);

async function findEvent() {
    const eventId = searchInput.value.trim().toUpperCase();

    if (!eventId) {
        eventList.replaceChildren();
        statusText.textContent = "Enter an event ID before searching.";
        return;
    }

    statusText.textContent = `Searching for ${eventId}...`;
    eventList.replaceChildren();
    searchButton.disabled = true;

    try {
        const event = await getJson(`${API_BASE_URL}/events/${encodeURIComponent(eventId)}`);
        displayEvents([event]);
        statusText.textContent = `Event ${eventId} loaded successfully.`;
    } catch (error) {
        statusText.textContent = `Unable to find event: ${error.message}`;
    } finally {
        searchButton.disabled = false;
    }
}

searchButton.addEventListener("click", findEvent);
searchInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        findEvent();
    }
});
