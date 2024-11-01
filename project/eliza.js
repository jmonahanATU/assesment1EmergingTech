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

// Listen for Enter key to submit the message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        elizaResponse();
    }
});

//function for ELIZA's response
function generateElizaResponse(input) {
    input = input.toLowerCase().trim(); // Normalize input for consistent matching

    // Enhanced pattern matching with more response variety
    if (input.includes("i feel")) {
        const feelingsResponses = [
            "Why do you feel that way?",
            "What do you think makes you feel this way?",
            "Can you tell me more about these feelings?"
        ];
        return chooseRandom(feelingsResponses);
    } else if (input.includes("i am")) {
        return "Tell me more about being " + input.split("i am")[1].trim() + ".";
    } else if (input.includes("my")) {
        return "Your " + input.split("my")[1].trim() + "? Tell me more about that.";
    } else if (input.includes("because")) {
        const becauseResponses = [
            "Is that the real reason?",
            "Why do you think that's the reason?",
            "Is there anything else that contributes to that?"
        ];
        return chooseRandom(becauseResponses);
    } else if (input.includes("i want")) {
        return "Why do you want " + input.split("i want")[1].trim() + "?";
    } else if (input.includes("i think")) {
        return "Do you really think so?";
    } else if (input.includes("yes")) {
        return "I'm glad to hear that! Can you explain more?";
    } else if (input.includes("no")) {
        return "Why not?";
    } else if (input.includes("you")) {
        return "We are here to talk about you, not me.";
    } else if (input.includes("always")) {
        return "Can you think of a specific example?";
    } else if (input.includes("maybe")) {
        return "Why the uncertainty?";
    } else if (input === "") {
        return "Please share what's on your mind.";
    } else {
        const defaultResponses = [
            "Can you tell me more about that?",
            "How does that make you feel?",
            "What makes you say that?",
            "Let's talk more about that."
        ];
        return chooseRandom(defaultResponses);
    }
}

// Helper function to randomly select a response from an array
function chooseRandom(responses) {
    return responses[Math.floor(Math.random() * responses.length)];
}

//Listen for Enter key to submit message, When pressed, it calls elizaResponse() to submit the message.
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        elizaResponse();
    }
});



