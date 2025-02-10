// app.js

document.addEventListener('DOMContentLoaded', async () => {
    const codePermanent = 'KOMI08090200';
    const userData = await login(codePermanent);

    if (userData.Code && userData.Token) {
        displayUserName(userData.Name);

        const messages = await getMessages(userData.Token);
        messages.forEach(displayMessage);

        connectWebSocket(userData.Token);

        const messageInput = document.getElementById('messageInput');
        const sendButton = document.getElementById('sendButton');

        sendButton.onclick = () => {
            const messageText = messageInput.value;
            if (messageText) {
                sendMessage(messageText);
                messageInput.value = ''; // Effacer le champ de saisie
            }
        };

        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                sendButton.click();
            }
        });
    }
});
