// ELIZA Chatbot Core Patterns
const elizaPatterns = [
    {
        pattern: /\b(i am|i'm) (.*)/i,
        responses: [
            "How long have you been {2}?",
            "Do you believe it's normal to be {2}?",
            "Why do you think you're {2}?"
        ]
    },
    {
        pattern: /\b(i feel|i am feeling) (.*)/i,
        responses: [
            "Tell me more about feeling {2}.",
            "Why do you think you feel {2}?",
            "How long have you felt {2}?"
        ]
    },
    {
        pattern: /\b(my) ([^.]*) (is|was) (.*)/i,
        responses: [
            "Tell me more about your {2}.",
            "How do you feel about your {2}?",
            "When did your {2} become {4}?"
        ]
    }
];

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

     // New: Handle direct questions
     if (input.includes("?")) {
        // Questions about ELIZA's wellbeing
        if (input.includes("how are you")) {
            const howAreYouResponses = [
                "I'm here to talk about you, but I'm functioning well. How are you feeling?",
                "Thank you for asking. I'm here and ready to listen. How about you?",
                "I'm operating as intended. What's on your mind today?"
            ];
            return chooseRandom(howAreYouResponses);
        }
        // Questions about what ELIZA can do
        if (input.includes("what can you do") || input.includes("what do you do")) {
            return "I'm a conversational agent designed to listen and respond to your thoughts and feelings. Would you like to share something with me?";
        }
        // Questions about ELIZA's nature
        if (input.includes("who are you") || input.includes("what are you")) {
            return "I'm ELIZA, a virtual therapist based on Joseph Weizenbaum's 1966 program. I'm here to listen and help you explore your thoughts. What would you like to discuss?";
        }
        // Questions about ELIZA's purpose
        if (input.includes("why are you")) {
            return "I'm here to help you explore your thoughts and feelings. What's on your mind?";
        }
    }

    // Short responses handling
    if (input.length <= 3) {
        const shortResponses = [
            "Could you elaborate on that?",
            "Tell me more - what's on your mind?",
            "I'm listening. Please share what you're thinking.",
            "What brings you here today?"
        ];
        return chooseRandom(shortResponses);
    }

     // Questions about direction of conversation
     if (input.includes("what should i") || input.includes("what shall i") || 
     input.includes("what do i") || input.includes("what can i")) {
     const directionResponses = [
         "You could start by telling me about your day.",
         "Perhaps you could share what's been on your mind recently?",
         "Is there something specific that's bothering you?",
         "What matters to you most right now?",
         "You might tell me about something that's been affecting you lately."
     ];
     return chooseRandom(directionResponses);
    }

    // Handle confusion or unclear responses
    if (input.includes("what?") || input.includes("what do you mean") || 
    input.includes("i don't understand") || input.includes("unclear")) {
    const clarificationResponses = [
        "Let me rephrase - what brings you here today?",
        "I'm here to listen to your thoughts and feelings. What would you like to discuss?",
        "Sometimes it helps to start with what's been on your mind recently.",
        "You could tell me about something that's important to you."
    ];
    return chooseRandom(clarificationResponses);
    }

     // Handle greetings and well-being questions
     if (input.includes("how are you") || input.includes("and you") || 
     input.includes("what about you")) {
     const wellbeingResponses = [
         "Thank you for asking. I'm here to help you explore your thoughts and feelings. How has your day been?",
         "I appreciate your courtesy. Let's focus on you - what would you like to discuss?",
         "That's kind of you to ask. I'm here to listen. What's been on your mind?",
         "I'm here and ready to listen to you. What would you like to talk about?"
     ];
     return chooseRandom(wellbeingResponses);
 }

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

// Add initial greeting when the page loads
window.onload = function() {
    appendMessage("ELIZA", "Hello! I'm ELIZA, a virtual therapist. How are you feeling today?", "eliza");
};

// Listen for Enter key to submit message
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        elizaResponse();
    }
});

// Add click event listener for the send button
document.getElementById("send-button").addEventListener("click", function() {
    elizaResponse();
});



