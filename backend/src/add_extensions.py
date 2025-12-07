import os

DATASET_DIR = r"..\dataset\plantvillage_dataset"

for root, dirs, files in os.walk(DATASET_DIR):
    for f in files:
        old_path = os.path.join(root, f)
        new_path = old_path + ".jpg"
        os.rename(old_path, new_path)