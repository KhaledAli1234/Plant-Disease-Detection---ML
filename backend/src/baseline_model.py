
import os
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.preprocessing.image import ImageDataGenerator
import numpy as np
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score, f1_score
import joblib

TRAIN_DIR = os.path.join('data','splitted','train')
TEST_DIR = os.path.join('data','splitted','test')
OUT_MODEL = os.path.join('models','baseline_lr.pkl')

def extract_features(directory):
    gen = ImageDataGenerator(rescale=1./255).flow_from_directory(directory, target_size=(224,224), batch_size=32, class_mode='categorical', shuffle=False)
    base = MobileNetV2(weights='imagenet', include_top=False, pooling='avg')
    features = base.predict(gen)
    labels = gen.classes
    return features, labels

if __name__ == '__main__':
    if not os.path.exists('models'):
        os.makedirs('models')
    X_train, y_train = extract_features(TRAIN_DIR)
    X_test, y_test = extract_features(TEST_DIR)
    clf = LogisticRegression(max_iter=500)
    clf.fit(X_train, y_train)
    preds = clf.predict(X_test)
    print('Accuracy:', accuracy_score(y_test,preds))
    print('F1 Macro:', f1_score(y_test,preds, average='macro'))
    joblib.dump(clf, OUT_MODEL)
