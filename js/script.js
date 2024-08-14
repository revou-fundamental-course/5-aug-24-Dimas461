function calculateBMI(event) {
    // Prevent the default form submission (which reloads the page)
    event.preventDefault();

    // Get input values
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    // Calculate BMI
    const bmi = (weight / (height * height)).toFixed(1);

    // Determine BMI category and advice
    let resultText = "";
    let adviceText = "";

    if (bmi < 18.5) {
        resultText = "Berat Badan Kurang";
        adviceText = "Anda memiliki berat badan kurang.";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = "Berat Badan Ideal";
        adviceText = "Anda memiliki berat badan ideal.";
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = "Berat Badan Lebih";
        adviceText = "Anda memiliki berat badan berlebih.";
    } else {
        resultText = "Obesitas";
        adviceText = "Anda memiliki berat badan sangat berlebih.";
    }

    // Display the result
    document.getElementById("result").innerHTML = `
        <p>${resultText}</p>
        <h1>${bmi}</h1>
        <p>${adviceText}</p>
        <button>Download Hasil BMI</button>
    `;

    // Return false to prevent form submission
    return false;
}