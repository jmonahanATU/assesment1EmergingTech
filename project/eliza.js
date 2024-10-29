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


