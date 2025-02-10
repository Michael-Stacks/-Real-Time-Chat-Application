// ajax.js
const serverUrl = 'http://kevin-chapron.fr:8080';

async function login(code) {
    const response = await fetch(`${serverUrl}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ Code: code })
    });
    return response.json();
}

async function getMessages(token) {
    const response = await fetch(`${serverUrl}/messages`, {
        method: 'GET',
        headers: { 'Authorization': `Basic ${token}` }
    });
    return response.json();
}


