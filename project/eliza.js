// Function to handle the sending of messages
function elizaResponse() {

    //This will get the user's input from the input field
    const userInput = document.getElementById("user-input").value.trim();
    
    //If the input is empty, do not send
    if (userInput === "") return;

    //This will display the user's message in the chat history
    appendMessage("You", userInput, "user");

    //Clear the input field
    document.getElementById("user-input").value = "";

    //Call ELIZA's response function (placeholder for now)
    const elizaReply = generateElizaResponse(userInput);
    appendMessage("ELIZA", elizaReply, "eliza");
    
}

//Function to append messages to the chat history
function appendMessage(sender, message, messageType) {
    const chatHistory = document.getElementById("chat-history");
    
    //Create a new paragraph for the message
    const messageElement = document.createElement("p");
    messageElement.classList.add(messageType); //user or eliza
    messageElement.innerHTML = `<b>${sender}:</b> ${message}`;

    //Append the message to the chat history
    chatHistory.appendChild(messageElement);
    
    //Auto-scroll
    chatHistory.scrollTop = chatHistory.scrollHeight;
}


//function for ELIZA's response
function generateElizaResponse(input) {
    input = input.toLowerCase().trim(); // Normalize input for consistent matching

    // Enhanced pattern matching with more response variety
    if (input.includes("i feel") || input.includes("i am feeling")) {
        const feeling = input.split(/i feel|i am feeling/)[1].trim();
        const feelingsResponses = [
            `Why do you feel ${feeling}?`,
            `How long have you been feeling ${feeling}?`,
            `Do you often feel ${feeling}?`,
            "Can you tell me more about these feelings?"
        ];
        return chooseRandom(feelingsResponses);
    } else if (input.includes("i am") || input.includes("i'm")) {
        const state = input.split(/i am|i'm/)[1].trim();
        const stateResponses = [
            `How long have you been ${state}?`,
            `What made you ${state}?`,
            `Tell me more about being ${state}.`
        ];
        return chooseRandom(stateResponses);
    } else if (input.includes("my")) {
        const topic = input.split("my")[1].trim();
        const myResponses = [
            `Your ${topic}? Tell me more about that.`,
            `How do you feel about your ${topic}?`,
            `When did you first notice your ${topic}?`
        ];
        return chooseRandom(myResponses);
    } else if (input.includes("because")) {
        const becauseResponses = [
            "Is that the real reason?",
            "Why do you think that's the reason?",
            "Is there anything else that contributes to that?",
            "Are there other reasons you can think of?"
        ];
        return chooseRandom(becauseResponses);
    } else if (input.includes("i want")) {
        const want = input.split("i want")[1].trim();
        const wantResponses = [
            `Why do you want ${want}?`,
            `What would having ${want} mean to you?`,
            `How long have you wanted ${want}?`
        ];
        return chooseRandom(wantResponses);
    } else if (input.includes("i think")) {
        return "What makes you think that?";
    } else if (input.includes("yes")) {
        const yesResponses = [
            "You seem quite certain about that.",
            "I see. Can you elaborate?",
            "I'm glad to hear that! Can you explain more?"
        ];
        return chooseRandom(yesResponses);
    } else if (input.includes("no")) {
        const noResponses = [
            "Why not?",
            "What makes you say no?",
            "Are you sure about that?"
        ];
        return chooseRandom(noResponses);
    } else if (input.includes("you")) {
        return "We are here to talk about you, not me.";
    } else if (input.includes("always")) {
        return "Can you think of a specific example?";
    } else if (input.includes("maybe")) {
        const maybeResponses = [
            "Why the uncertainty?",
            "You don't seem sure about that.",
            "What makes you uncertain?"
        ];
        return chooseRandom(maybeResponses);
    } else if (input === "") {
        return "Please share what's on your mind.";
    } else {
        const defaultResponses = [
            "Can you tell me more about that?",
            "How does that make you feel?",
            "What makes you say that?",
            "Let's talk more about that.",
            "What does that suggest to you?",
            "I see. Please continue.",
            "Can you elaborate on that?"
        ];
        return chooseRandom(defaultResponses);
    }
}

// Helper function to randomly select a response from an array
function chooseRandom(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

// initial greeting when the page loads
window.onload = function() {
    appendMessage("ELIZA", "Hello! I'm ELIZA, a virtual therapist. How are you feeling today?", "eliza");
};

//Listen for Enter key to submit message, When pressed, it calls elizaResponse() to submit the message.
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        elizaResponse();
    }
});



