async function getAIResponse() {
    const userQuery = document.getElementById('userQuery').value.trim();
    const chatWindow = document.getElementById('chatWindow');

    if (userQuery === "") {
        alert("Please enter a question.");
        return;
    }

    // Display user message
    addMessage(userQuery, 'user');

    // Show loading animation
    const loadingMessage = addMessage("Thinking...", 'ai', true);

    try {
        const response = await fetch("https://gemini.google.com/app", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": "Bearer YOUR_OPENAI_API_KEY"
            },
            body: JSON.stringify({
                model: "gpt-3.5-turbo",
                messages: [{ role: "user", content: userQuery }]
            })
        });

        const data = await response.json();
        const botResponse = data.choices[0].message.content;

        // Remove loading message and show response
        chatWindow.removeChild(loadingMessage);
        addMessage(botResponse, 'ai');

        // Simulate learning progress updates
        updateProgress();
    } catch (error) {
        chatWindow.removeChild(loadingMessage);
        addMessage("Error: Unable to fetch response.", 'ai');
        console.error("Error:", error);
    }

    // Clear input field
    document.getElementById('userQuery').value = '';
}

// Function to add messages to the chat
function addMessage(text, sender, isLoading = false) {
    const chatWindow = document.getElementById('chatWindow');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', sender);

    if (isLoading) {
        messageDiv.innerHTML = `<div class="message ai">Loading...</div>`;
    } else {
        messageDiv.textContent = text;
    }

    chatWindow.appendChild(messageDiv);
    chatWindow.scrollTop = chatWindow.scrollHeight;

    return messageDiv;
}

// Function to update learning progress
function updateProgress() {
    const progressBar = document.getElementById('progress-bar');
    const progressText = document.getElementById('progress-text');
    const levelText = document.getElementById('level-text');
    const pointsText = document.getElementById('points-text');

    // Simulate progress update (in a real app, fetch from the database)
    let progress = Math.floor(Math.random() * 100);
    let level = Math.floor(progress / 10) + 1;
    let points = progress * 10;

    progressBar.style.width = `${progress}%`;
    progressText.textContent = `${progress}% Complete`;
    levelText.textContent = `Level: ${level}`;
    pointsText.textContent = `Points: ${points}`;
}
