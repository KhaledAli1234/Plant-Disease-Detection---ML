TREATMENTS = {
    "Apple___Apple_scab": {
        "mild": "Remove infected leaves and improve airflow.",
        "moderate": "Apply fungicide like Captan or Mancozeb.",
        "severe": "Prune severely infected areas and apply systemic fungicide."
    },
    "Apple___Black_rot": {
        "mild": "Remove small infected spots.",
        "moderate": "Use fungicide spray as recommended.",
        "severe": "Remove severely infected fruit and branches; apply systemic treatment."
    },
    "Apple___Cedar_apple_rust": {
        "mild": "Remove infected leaves.",
        "moderate": "Apply recommended fungicide for rust control.",
        "severe": "Prune affected areas and maintain good spacing."
    },
    "Apple___Healthy": {
        "mild": "Maintain good watering and fertilization.",
        "moderate": "Keep monitoring, ensure airflow.",
        "severe": "Preventive care only, no treatment needed."
    },
    "Blueberry___Healthy": {
        "mild": "Keep soil well-drained and mulch applied.",
        "moderate": "Monitor for pests and fungi.",
        "severe": "Preventive care only."
    },
    "Cherry_(including_sour)___Powdery_mildew": {
        "mild": "Prune affected shoots.",
        "moderate": "Apply fungicide for powdery mildew.",
        "severe": "Remove heavily infected branches and treat with systemic fungicide."
    },
    "Cherry_(including_sour)___Healthy": {
        "mild": "Ensure proper irrigation and spacing.",
        "moderate": "Monitor for disease signs regularly.",
        "severe": "Preventive care only."
    },
    "Corn_(maize)___Cercospora_leaf_spot Gray_leaf_spot": {
        "mild": "Remove affected leaves.",
        "moderate": "Apply fungicide like azoxystrobin.",
        "severe": "Remove heavily infected plants; systemic treatment."
    },
    "Corn_(maize)___Common_rust": {
        "mild": "Remove early lesions.",
        "moderate": "Fungicide application recommended.",
        "severe": "Apply systemic fungicide and remove severely affected leaves."
    },
    "Corn_(maize)___Northern_Leaf_Blight": {
        "mild": "Monitor plants; remove minor lesions.",
        "moderate": "Apply recommended fungicide for blight.",
        "severe": "Remove heavily affected plants; systemic fungicide needed."
    },
    "Corn_(maize)___Healthy": {
        "mild": "Maintain irrigation and fertilization.",
        "moderate": "Monitor for rust and blight.",
        "severe": "Preventive care only."
    },
    "Grape___Black_rot": {
        "mild": "Remove infected leaves and fruit.",
        "moderate": "Apply recommended fungicide.",
        "severe": "Prune heavily infected areas; systemic fungicide."
    },
    "Grape___Esca_(Black_Measles)": {
        "mild": "Prune affected shoots.",
        "moderate": "Fungicide treatment recommended.",
        "severe": "Remove infected vines; systemic fungicide."
    },
    "Grape___Leaf_blight_(Isariopsis_Leaf_Spot)": {
        "mild": "Remove infected leaves.",
        "moderate": "Apply fungicide regularly.",
        "severe": "Prune heavily infected sections; systemic treatment."
    },
    "Grape___Healthy": {
        "mild": "Maintain good watering and airflow.",
        "moderate": "Monitor for fungal diseases.",
        "severe": "Preventive care only."
    },
    "Potato___Early_blight": {
        "mild": "Remove infected leaves.",
        "moderate": "Use copper-based fungicide.",
        "severe": "Apply systemic fungicide and remove severely infected foliage."
    },
    "Potato___Late_blight": {
        "mild": "Remove minor lesions.",
        "moderate": "Apply recommended fungicide (e.g., chlorothalonil).",
        "severe": "Remove heavily infected leaves and treat with systemic fungicide."
    },
    "Potato___Healthy": {
        "mild": "Maintain healthy soil and irrigation.",
        "moderate": "Monitor plants regularly.",
        "severe": "Preventive care only."
    },
    "Tomato___Bacterial_spot": {
        "mild": "Remove infected leaves.",
        "moderate": "Apply copper-based bactericide.",
        "severe": "Prune severely infected plants and treat systemically."
    },
    "Tomato___Early_blight": {
        "mild": "Spray with Neem oil every 7 days.",
        "moderate": "Use copper-based fungicide.",
        "severe": "Remove infected leaves and apply Mancozeb fungicide."
    },
    "Tomato___Late_blight": {
        "mild": "Improve airflow & avoid overhead watering.",
        "moderate": "Apply chlorothalonil fungicide.",
        "severe": "Remove infected areas and apply systemic fungicide."
    },
    "Tomato___Leaf_Mold": {
        "mild": "Remove infected leaves.",
        "moderate": "Apply recommended fungicide for leaf mold.",
        "severe": "Prune severely infected areas; use systemic treatment."
    },
    "Tomato___Septoria_leaf_spot": {
        "mild": "Remove infected leaves.",
        "moderate": "Apply fungicide as per guidelines.",
        "severe": "Prune heavily infected sections and treat systemically."
    },
    "Tomato___Spider_mites Two-spotted_spider_mite": {
        "mild": "Spray with insecticidal soap.",
        "moderate": "Apply miticide as per instructions.",
        "severe": "Remove severely infected leaves; use systemic miticide."
    },
    "Tomato___Target_Spot": {
        "mild": "Remove minor lesions.",
        "moderate": "Apply recommended fungicide.",
        "severe": "Prune severely infected leaves; systemic treatment."
    },
    "Tomato___Tomato_Yellow_Leaf_Curl_Virus": {
        "mild": "Remove affected leaves.",
        "moderate": "Use insecticide for vector control.",
        "severe": "Remove severely infected plants; systemic treatment."
    },
    "Tomato___Healthy": {
        "mild": "Maintain proper watering and fertilization.",
        "moderate": "Monitor for pests and diseases.",
        "severe": "Preventive care only."
    }
}


def get_treatment(disease, severity):
    if disease in TREATMENTS:
        return TREATMENTS[disease].get(severity, "No treatment available.")
    return "Unknown disease."
