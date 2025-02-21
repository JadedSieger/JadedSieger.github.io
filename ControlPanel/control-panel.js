const API_URL1 = "https://lieserl-einstein-js-production.up.railway.app"; // Lieserl Einstein Bot API
const API_URL2 = "https://suibot-production.up.railway.app"; // SuiBot API

// Lieserl Einstein Bot Commands
function SendCommandLieserl(command) {
    fetch(`${API_URL1}/bot/${command}`, { method: "POST" })
        .then(response => response.json())
        .then(data => alert(`Lieserl: ${data.message}`))    
        .catch(error => console.error("Error with Lieserl: ", error));
}

function getStatusLieserl() {
    fetch(`${API_URL1}/bot/status?timestamp=${new Date().getTime()}`, { method: "GET", cache: "no-store" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("lieserl-status").textContent = `Status: ${data.status}`;
        })
        .catch(error => console.error("Error fetching Lieserl status:", error));
}

function getBotNameLieserl() {
    fetch(`${API_URL1}/bot/name`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("lieserl-botName").textContent = `Name: ${data.name}`;
        })
        .catch(error => console.error("Error fetching Lieserl bot name:", error));
}

// SuiBot Commands
function SendCommandSuiBot(command) {
    fetch(`${API_URL2}/bot/${command}`, { method: "POST" })
        .then(response => response.json())
        .then(data => alert(`SuiBot: ${data.message}`))    
        .catch(error => console.error("Error with SuiBot: ", error));
}

function getStatusSuiBot() {
    fetch(`${API_URL2}/bot/status?timestamp=${new Date().getTime()}`, { method: "GET", cache: "no-store" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("suibot-status").textContent = `Status: ${data.status}`;
        })
        .catch(error => console.error("Error fetching SuiBot status:", error));
}

function getBotNameSuiBot() {
    fetch(`${API_URL2}/bot/name`, { method: "GET" })
        .then(response => response.json())
        .then(data => {
            document.getElementById("suibot-botName").textContent = `Name: ${data.name}`;
        })
        .catch(error => console.error("Error fetching SuiBot bot name:", error));
}

// Automatically load status and bot names
window.onload = function() {
    getStatusLieserl();
    getStatusSuiBot();
    getBotNameLieserl();
    getBotNameSuiBot();
    setInterval(getStatusLieserl, 10000); // Refresh Lieserl status every 10 sec
    setInterval(getStatusSuiBot, 10000);  // Refresh SuiBot status every 10 sec
};
