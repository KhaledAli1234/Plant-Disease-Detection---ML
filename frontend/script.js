document.getElementById("predictBtn").addEventListener("click", async () => {
    const fileInput = document.getElementById("plantImage");
    const file = fileInput.files[0];
    if (!file) return alert("Please upload an image.");


    const preview = document.getElementById("preview");
    preview.src = URL.createObjectURL(file);
    document.getElementById("previewContainer").classList.remove("hidden");

    
    document.getElementById("loading").classList.remove("hidden");
    document.getElementById("result").classList.add("hidden");

    const formData = new FormData();
   formData.append("file", file);


    try {
        const response = await fetch("http://localhost:8000/predict", { 
            method: "POST",
            body: formData
        });

        const data = await response.json();

        
        document.getElementById("loading").classList.add("hidden");

        
        document.getElementById("diseaseName").innerText = `Disease: ${data.disease}`;
        document.getElementById("severity").innerText = `Severity: ${data.severity}`;
        document.getElementById("treatment").innerText = `Treatment: ${data.treatment}`;

        
        const severityElem = document.getElementById("severity");
        severityElem.className = "";
        if (data.severity.toLowerCase() === "mild") severityElem.classList.add("mild");
        else if (data.severity.toLowerCase() === "intermediate") severityElem.classList.add("intermediate");
        else if (data.severity.toLowerCase() === "severe") severityElem.classList.add("severe");

        document.getElementById("result").classList.remove("hidden");

    } catch (error) {
        document.getElementById("loading").classList.add("hidden");
        alert("Error predicting disease. Make sure the backend is running.");
        console.error(error);
    }
});
