// messageHandler.js

function displayMessage(message) {
    const messagesDiv = document.getElementById('messages');
    const messageElement = document.createElement('div');
    messageElement.textContent = `[${message.Date}] (${message.From}) ${message.Text}`;
    messagesDiv.appendChild(messageElement);
    messagesDiv.scrollTop = messagesDiv.scrollHeight; // faire défiler vers le bas

    // Met à jour le statut de l'utilisateur qui a envoyé le message
    updateUserStatus(message);
}

function displayUserName(name) {
    const usernameElement = document.getElementById('username');
    usernameElement.textContent = name;
}



function extractUserStatus(lastMessageTime) {
    const now = new Date();
    const lastMessageDate = new Date(lastMessageTime);
    const differenceInMinutes = Math.floor((now - lastMessageDate) / 60000);


    if (differenceInMinutes < 5) {
        return 'Connecté';
    } else if (differenceInMinutes < 720) { // Moins de 12 heures
        return `il y a ${differenceInMinutes} minutes`;
    } else {
        return 'Déconnecté';
    }
}



