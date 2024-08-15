function calculateBMI(event) {
    // Biar form gak ngeload ulang halaman saat disubmit
    event.preventDefault();

    // Ambil nilai dari input berat dan tinggi
    const weight = document.getElementById("weight").value;
    const height = document.getElementById("height").value / 100;

    // Hitung BMI dengan rumus, dan bulatkan hasilnya ke satu desimal
    const bmi = (weight / (height * height)).toFixed(1);

    // Siapkan variabel buat kategori BMI dan saran
    let resultText = "";
    let adviceText = "";
    let additionalText = "";

    // Tentuin kategori BMI berdasarkan hasilnya
    if (bmi < 18.5) {
        resultText = "Berat Badan Kurang";
        adviceText = "Anda memiliki berat badan kurang.";
        additionalText = `
            Hasil BMI di bawah 18.5 <br>
            Anda berada dalam kategori berat badan kurang. <br>
            Cara terbaik untuk menambah berat badan adalah dengan meningkatkan asupan kalori dan berolahraga.
        `;
    } else if (bmi >= 18.5 && bmi < 24.9) {
        resultText = "Berat Badan Ideal";
        adviceText = "Anda memiliki berat badan ideal.";
        additionalText = `
            Hasil BMI di antara 18.5 dan 24.9 <br>
            Anda berada dalam kategori berat badan ideal.
        `;
    } else if (bmi >= 25 && bmi < 29.9) {
        resultText = "Berat Badan Lebih";
        adviceText = "Anda memiliki berat badan berlebih.";
        additionalText = `
            Hasil BMI di antara 25 dan 29.9 <br>
            Anda berada dalam kategori overweight atau berat badan berlebih. <br>
            Cara terbaik untuk menurunkan berat badan adalah dengan mengatur kalori makanan yang dikonsumsi dan berolahraga.
        `;
    } else {
        resultText = "Obesitas";
        adviceText = "Anda memiliki berat badan sangat berlebih.";
        additionalText = `
            Hasil BMI di atas 30 <br>
            Anda berada dalam kategori obesitas. <br>
            Disarankan untuk konsultasi dengan dokter atau ahli gizi untuk menurunkan berat badan hingga batas normal.
        `;
    }

    // Tampilkan hasil BMI di halaman
    document.getElementById("result").innerHTML = `
        <p>${resultText}</p>
        <h1>${bmi}</h1>
        <p>${adviceText}</p>
        <button>Download Hasil BMI</button>
    `;

    // Tampilkan info tambahan berdasarkan hasil BMI
    document.getElementById("additional-result").innerHTML = `
        <p>${additionalText}</p>
    `;

    // Balikin false biar form gak jadi ke-submit
    return false;
}
