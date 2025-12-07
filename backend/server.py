from fastapi import FastAPI, UploadFile, HTTPException
import numpy as np
from PIL import Image
import tensorflow as tf
import json
import os

from src.severity_detector import measure_severity
from src.treatment import get_treatment

app = FastAPI()

MODEL_PATH = "models/model.h5"
CLASS_INDICES_PATH = "models/class_indices.json"

# --- Checks ---
if not os.path.exists(MODEL_PATH):
    raise FileNotFoundError("❌ Model not found at models/model.h5")

if not os.path.exists(CLASS_INDICES_PATH):
    raise FileNotFoundError("❌ class_indices.json missing in models/")


# --- Load Model ---
model = tf.keras.models.load_model(MODEL_PATH)

# --- Load class indices ---
with open(CLASS_INDICES_PATH, "r") as f:
    class_indices = json.load(f)

class_names = {v: k for k, v in class_indices.items()}


# --- Preprocess Image ---
def preprocess(img: Image.Image):
    img = img.resize((224, 224))
    img_array = np.array(img) / 255.0
    return img_array.reshape(1, 224, 224, 3)


@app.post("/predict")
async def predict(file: UploadFile):

    # Check if file exists
    if not file:
        raise HTTPException(status_code=400, detail="No image uploaded")

    # Try loading image
    try:
        img = Image.open(file.file).convert("RGB")
    except Exception:
        raise HTTPException(status_code=400, detail="Invalid image format")

    # Predict disease
    try:
        pred = model.predict(preprocess(img))
        disease_idx = int(np.argmax(pred))
        disease_name = class_names[disease_idx]
    except Exception as e:
        raise HTTPException(status_code=500, detail=f"Model prediction error: {str(e)}")

    # Severity detection
    severity, ratio = measure_severity(img)

    # Treatment suggestion
    treatment = get_treatment(disease_name, severity)

    return {
        "disease": disease_name,
        "severity": severity,
        "severity_ratio": float(ratio),
        "treatment": treatment,
    }


if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000, reload=True)
