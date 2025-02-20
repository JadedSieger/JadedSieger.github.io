const API_URL = "https://lieserl-einstein-js-production.up.railway.app"; // Ensure HTTPS

function SendCommand(command) {
    fetch(`${API_URL}/bot/${command}`, { method: "POST"})
        .then(response => response.json())
        .then(data => alert(data.message))    
        .catch(error => console.error("Error: ", error));
}

function getStatus() {
    fetch(`${API_URL}/bot/status?timestamp=${new Date().getTime()}`, { method: "GET", cache: "no-store"}) // Changed to GET request
        .then(response => response.text())
        .then(text =>{
            console.log("Raw API res: ", text);
            return JSON.parse(text);
        })    
        .then(data => {
            console.log("Parsed JSON:", data)
                
            document.getElementById("status").textContent = "Status: " + data.status;
        })
        .catch(error => console.error("Error: ", error));
}

// New function to fetch bot name
function getBotName() {
    fetch(`${API_URL}/bot/name`, { method: "GET" }) // Assuming API endpoint is /bot/name
        .then(response => response.json())
        .then(data => {
            document.getElementById("botName").textContent = "Bot Name: " + data.name;
        })
        .catch(error => console.error("Error fetching bot name:", error));
}

// Automatically get bot status and name on page load
/*window.onload = function() {
    getStatus();
    setInterval(getStatus, 10000);
    getBotName();
};*/
