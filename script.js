function calculateBMI() {

    let height = document.getElementById("height").value;
    let weight = document.getElementById("weight").value;

    // Check empty input FIRST
    if (height === "" || weight === "") {
        document.getElementById("result").innerText =
            "Please enter both values!";
        return;
    }

    // Convert to numbers
    height = Number(height);
    weight = Number(weight);

    // Convert cm to meters
    height = height / 100;

    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2);

    let category = "";

    if (bmi < 18.5) {
        category = "Underweight";
    } else if (bmi < 24.9) {
        category = "Normal";
    } else if (bmi < 29.9) {
        category = "Overweight";
    } else {
        category = "Obese";
    }

    document.getElementById("result").innerText =
        `Your BMI is ${bmi} (${category})`;
}