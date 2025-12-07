
import os
import numpy as np
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from sklearn.metrics import classification_report, confusion_matrix

TEST_DIR = os.path.join('data','splitted','test')
MODEL_PATH = os.path.join('models','disease_model.h5')

if __name__ == '__main__':
    model = load_model(MODEL_PATH)
    gen = ImageDataGenerator(rescale=1./255).flow_from_directory(TEST_DIR, target_size=(224,224), batch_size=32, class_mode='categorical', shuffle=False)
    preds = model.predict(gen)
    y_true = gen.classes
    y_pred = preds.argmax(axis=1)
    print(classification_report(y_true, y_pred))
    print('Confusion matrix:')
    print(confusion_matrix(y_true, y_pred))
