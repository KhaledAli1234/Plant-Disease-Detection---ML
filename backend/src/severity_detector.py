from PIL import Image
import numpy as np

def measure_severity(img):
    if isinstance(img, str):
        img = Image.open(img)
    img = img.convert("RGB").resize((256,256))
    arr = np.array(img)
    
    brown_mask = (
        (arr[:,:,0] > 100) & 
        (arr[:,:,1] < 80) & 
        (arr[:,:,2] < 80)
    )
    infected_ratio = brown_mask.sum() / (256*256)
    if infected_ratio < 0.05:
        return "mild", infected_ratio
    elif infected_ratio < 0.20:
        return "moderate", infected_ratio
    else:
        return "severe", infected_ratio
