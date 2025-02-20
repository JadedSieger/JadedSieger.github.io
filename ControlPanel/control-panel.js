const API_URL = "";

function SendCommand(command) {
    fetch(`${API_URL}/bot/${command}`, {method: "POST"})
    .then(response => response.json())
    .then(data => {
        document.getElementById("status").textContent = "Status: " + data.status;
    })
    .catch(error => console.error("Error: ", error));
}