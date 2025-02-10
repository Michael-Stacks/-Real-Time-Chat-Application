// websocket.js

let websocket;

function connectWebSocket(token) {
    websocket = new WebSocket('ws://kevin-chapron.fr:8080/ws');

    websocket.onopen = function () {
        websocket.send(JSON.stringify({ auth: token }));
    };

    websocket.onmessage = function (event) {
        const message = JSON.parse(event.data);
        displayMessage(message);
        updateUserStatus(message); // Met à jour le statut des utilisateurs
    };
}

function sendMessage(messageText) {
    websocket.send(JSON.stringify({ message: messageText }));
}

// Nouvelle fonction pour mettre à jour le statut des utilisateurs
function updateUserStatus(message) {
    const userStatus = {
        username: message.username, // Supposons que le message contient le nom d'utilisateur
        lastMessageTime: new Date() // Utilise la date actuelle comme dernier message
    };

    // Met à jour le panneau de statut avec les nouvelles informations
    const statusList = document.getElementById('statusList');
    const statusItem = document.createElement('li');
    statusItem.classList.add('status-item');
    statusItem.textContent = `${userStatus.username}: ${extractUserStatus(userStatus.lastMessageTime)}`;

    // Ajoute ou met à jour le statut dans le panneau
    const existingItem = Array.from(statusList.children).find(item => item.textContent.startsWith(userStatus.username));
    if (existingItem) {
        existingItem.textContent = `${userStatus.username}: ${extractUserStatus(userStatus.lastMessageTime)}`;
    } else {
        statusList.appendChild(statusItem);
    }
}

