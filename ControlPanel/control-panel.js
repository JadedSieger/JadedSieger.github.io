const API_URL = "https://lieserl-einstein-js-production.up.railway.app";

function SendCommand(command) {
    fetch(`${API_URL}/bot/${command}`, {method: "POST"})
    .then(response => response.json())
    .then(data => alert(data.message))    
    .catch(error => console.error("Error: ", error));
}

function getStatus(command) {
    fetch(`${API_URL}/bot/${command}`, {method: "GET"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("status").textContent = "Status: " + data.status;
    })
    .catch(error => console.error("Error: ", error));
}

window.onload = getStatus;