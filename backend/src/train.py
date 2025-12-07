
import tensorflow as tf
from tensorflow.keras.preprocessing.image import ImageDataGenerator
from tensorflow.keras.applications import MobileNetV2
from tensorflow.keras.layers import GlobalAveragePooling2D, Dense, Dropout
from tensorflow.keras.models import Model
import os

TRAIN_DIR = os.path.join('data','splitted','train')
VAL_DIR = os.path.join('data','splitted','val')
OUT_MODEL = os.path.join('models','model.h5')

IMG_SIZE = (224,224)
BATCH = 32
EPOCHS = 10

def build(num_classes):
    base = MobileNetV2(weights='imagenet', include_top=False, input_shape=(224,224,3))
    base.trainable = False
    x = GlobalAveragePooling2D()(base.output)
    x = Dropout(0.3)(x)
    out = Dense(num_classes, activation='softmax')(x)
    model = Model(inputs=base.input, outputs=out)
    model.compile(optimizer='adam', loss='categorical_crossentropy', metrics=['accuracy'])
    return model

if __name__ == '__main__':
    if not os.path.exists('models'):
        os.makedirs('models')
    train_gen = ImageDataGenerator(rescale=1./255).flow_from_directory(TRAIN_DIR, target_size=IMG_SIZE, batch_size=BATCH, class_mode='categorical')
    val_gen = ImageDataGenerator(rescale=1./255).flow_from_directory(VAL_DIR, target_size=IMG_SIZE, batch_size=BATCH, class_mode='categorical')
    NUM = train_gen.num_classes
    print('Detected classes:', NUM)
    model = build(NUM)
    model.fit(train_gen, validation_data=val_gen, epochs=EPOCHS)
    model.save(OUT_MODEL)
    print('Saved model to', OUT_MODEL)
