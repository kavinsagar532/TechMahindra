function checkAge() {
    let ageInput = document.getElementById("userAge").value; 
    let age = Number(ageInput); 

    let messageElement = document.getElementById("accessMessage");

    if (isNaN(age) || age <= 0) {
        messageElement.textContent = "Please enter a valid age.";
        messageElement.style.color = "red";
    } else {
        let accessLevel = age >= 18 ? "Access: Adult" : "Access: Minor";
        messageElement.textContent = accessLevel;
        messageElement.style.color = "green";
    }


    console.log("User Age:", age);
}
