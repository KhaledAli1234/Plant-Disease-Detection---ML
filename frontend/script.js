async function uploadImage() {
    const fileInput = document.getElementById('imageInput');
    const resultBox = document.getElementById('result');
    const loading = document.getElementById('loading');

    resultBox.classList.add("hidden");

    if (!fileInput.files[0]) {
        alert("Please select an image first!");
        return;
    }

    loading.classList.remove("hidden");

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    try {
        const res = await fetch("http://localhost:8000/predict", {
            method: "POST",
            body: formData
        });

        if (!res.ok) throw new Error("Server error");

        const data = await res.json();

        resultBox.innerHTML = `
            <b>Disease:</b> ${data.disease}<br>
            <b>Severity:</b> <span class="${data.severity.toLowerCase()}">${data.severity}</span><br>
            <b>Severity Ratio:</b> ${(data.severity_ratio * 100).toFixed(2)}%<br>
            <b>Treatment:</b> ${data.treatment}
        `;

        resultBox.classList.remove("hidden");

    } catch (err) {
        alert("Error connecting to server!");
        console.error(err);
    }

    loading.classList.add("hidden");
}

document.getElementById("predictBtn").addEventListener("click", uploadImage);
