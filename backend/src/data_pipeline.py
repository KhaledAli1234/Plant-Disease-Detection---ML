
import os
import shutil
from PIL import Image
from sklearn.model_selection import train_test_split

DATASET_DIR = os.path.join("..", "plant-disease-ai", "dataset")

OUTPUT_DIR = os.path.join("..", "plant-disease-ai", "dataset_splitted")

TEST_RATIO = 0.15
VAL_RATIO = 0.15  

def load_and_clean(dataset_dir):

    image_paths = []
    labels = []
    classes = sorted([d for d in os.listdir(dataset_dir) if os.path.isdir(os.path.join(dataset_dir, d))])
    print(f"Found {len(classes)} classes.")
    for cls in classes:
        cls_dir = os.path.join(dataset_dir, cls)
        for fname in os.listdir(cls_dir):
            fpath = os.path.join(cls_dir, fname)
      
            if not os.path.isfile(fpath):
                continue
            
            try:
                with Image.open(fpath) as im:
                    im.verify()
            except Exception as e:
                print(f"Removing corrupted image: {fpath}  ({e})")
                try:
                    os.remove(fpath)
                except:
                    pass
                continue
            image_paths.append(fpath)
            labels.append(cls)
    return image_paths, labels

def split_and_copy(image_paths, labels, out_dir, test_ratio=0.15, val_ratio=0.15):

    os.makedirs(out_dir, exist_ok=True)

    train_frac = 1.0 - test_ratio - val_ratio
    if train_frac <= 0:
        raise ValueError("Invalid split ratios. Make sure test+val < 1.0")

    X_trainval, X_test, y_trainval, y_test = train_test_split(
        image_paths, labels, test_size=test_ratio, stratify=labels, random_state=42
    )
  
    val_of_trainval = val_ratio / (train_frac + val_ratio)
    X_train, X_val, y_train, y_val = train_test_split(
        X_trainval, y_trainval, test_size=val_of_trainval, stratify=y_trainval, random_state=42
    )

    splits = {
        "train": (X_train, y_train),
        "val": (X_val, y_val),
        "test": (X_test, y_test)
    }

    for split_name, (X_split, y_split) in splits.items():
        print(f"Copying {len(X_split)} files to split '{split_name}'...")
        for path, label in zip(X_split, y_split):
            dst_dir = os.path.join(out_dir, split_name, label)
            os.makedirs(dst_dir, exist_ok=True)
            dst_path = os.path.join(dst_dir, os.path.basename(path))
           
            if not os.path.exists(dst_path):
                shutil.copy2(path, dst_path)
    print("Copy complete.")

def count_per_split(out_dir):
    for split in ("train","val","test"):
        split_dir = os.path.join(out_dir, split)
        total = 0
        per_class = {}
        if not os.path.exists(split_dir):
            print(f"No folder for split {split}")
            continue
        for cls in os.listdir(split_dir):
            cls_dir = os.path.join(split_dir, cls)
            if not os.path.isdir(cls_dir):
                continue
            n = len([f for f in os.listdir(cls_dir) if os.path.isfile(os.path.join(cls_dir,f))])
            per_class[cls] = n
            total += n
        print(f"Split '{split}': total {total} images; classes: {len(per_class)}")
 
        sorted_cls = sorted(per_class.items(), key=lambda x: x[1], reverse=True)[:10]
        for c,n in sorted_cls:
            print(f"  {c}: {n}")
        print("-"*40)

if __name__ == "__main__":
    print("DATASET DIR:", DATASET_DIR)
    print("OUTPUT DIR:", OUTPUT_DIR)
    imgs, labs = load_and_clean(DATASET_DIR)
    print("Total images after cleaning:", len(imgs))
    split_and_copy(imgs, labs, OUTPUT_DIR, test_ratio=TEST_RATIO, val_ratio=VAL_RATIO)
    print("Counts per split:")
    count_per_split(OUTPUT_DIR)
    print("Data pipeline finished.")
