import os, random, shutil

SRC = "data/images"
DST = "data/dataset_split" 

splits = ["train", "val", "test"]

for s in splits:
    os.makedirs(os.path.join(DST, s), exist_ok=True)

for cls in os.listdir(SRC):
    cls_path = os.path.join(SRC, cls)
    if not os.path.isdir(cls_path):
        continue

    files = os.listdir(cls_path)
    random.shuffle(files)

    n = len(files)
    test_n = int(0.15 * n)
    val_n  = int(0.15 * n)

    test_files = files[:test_n]
    val_files  = files[test_n : test_n + val_n]
    train_files = files[test_n + val_n:]

    for subset, arr in zip(["train", "val", "test"], [train_files, val_files, test_files]):
        out = os.path.join(DST, subset, cls)
        os.makedirs(out, exist_ok=True)
        for f in arr:
            shutil.copy(os.path.join(cls_path, f), os.path.join(out, f))

