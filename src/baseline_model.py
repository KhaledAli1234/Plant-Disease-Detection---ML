import pandas as pd
from sklearn.tree import DecisionTreeClassifier
from sklearn.metrics import accuracy_score, f1_score

def load_splits():
    X_train = pd.read_csv("data/X_train.csv")
    X_val = pd.read_csv("data/X_val.csv")
    X_test = pd.read_csv("data/X_test.csv")
    y_train = pd.read_csv("data/y_train.csv").squeeze()
    y_val = pd.read_csv("data/y_val.csv").squeeze()
    y_test = pd.read_csv("data/y_test.csv").squeeze()
    return X_train,X_val,X_test,y_train,y_val,y_test

def train_baseline(X_train,y_train):
    model=DecisionTreeClassifier()
    model.fit(X_train,y_train)
    return model

if __name__=="__main__":
    X_train,X_val,X_test,y_train,y_val,y_test = load_splits()
    model=train_baseline(X_train,y_train)
    preds=model.predict(X_test)
    print("Accuracy:", accuracy_score(y_test,preds))
    print("F1:", f1_score(y_test,preds,average='macro'))
