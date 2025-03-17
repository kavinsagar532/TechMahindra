document.getElementById("sendMessage").addEventListener("click", function() {
    let message = document.getElementById("userMessage").value.trim();
    
    if (message.length === 0) {
        alert("Please enter a message.");
    } else {
        let processedMessage = message.length < 10 ? message.toUpperCase() : message.toLowerCase();
        document.getElementById("outputMessage").textContent = processedMessage;
    }
});
