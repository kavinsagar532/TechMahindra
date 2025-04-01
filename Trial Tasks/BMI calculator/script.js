document.addEventListener("DOMContentLoaded", function () {
    const heightInput = document.querySelectorAll("input")[0];
    const weightInput = document.querySelectorAll("input")[1];
    const bmiResult = document.querySelectorAll("textarea")[0];
    const bmiCategory = document.querySelectorAll("textarea")[1];
    const calculateBtn = document.querySelector(".secondButton");
    const clearBtn = document.querySelector(".firstButton");

    calculateBtn.addEventListener("click", function () {
        let height = parseFloat(heightInput.value);
        let weight = parseFloat(weightInput.value);

        if (height > 0 && weight > 0) {
            let bmi = weight / ((height / 100) * (height / 100));
            bmiResult.value = `BMI: ${bmi.toFixed(2)}`;

            if (bmi < 18.5) {
                bmiCategory.value = "You are Underweight.";
            } else if (bmi >= 18.5 && bmi < 24.9) {
                bmiCategory.value = "You have a Normal weight.";
            } else if (bmi >= 25 && bmi < 29.9) {
                bmiCategory.value = "You are Overweight.";
            } else {
                bmiCategory.value = "You are Obese.";
            }
        } else {
            bmiResult.value = "Enter valid height and weight!";
            bmiCategory.value = "";
        }
    });

    clearBtn.addEventListener("click", function () {
        heightInput.value = "";
        weightInput.value = "";
        bmiResult.value = "";
        bmiCategory.value = "";
    });
});
