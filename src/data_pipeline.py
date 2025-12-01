import pandas as pd
from sklearn.model_selection import train_test_split

def load_data(path="data/dataset.csv"):
    return pd.read_csv(path)

def clean_data(df):
    for col in df.select_dtypes(include=['float','int']).columns:
        df[col].fillna(df[col].median(), inplace=True)
    for col in df.select_dtypes(include=['object']).columns:
        df[col].fillna(df[col].mode()[0], inplace=True)
    return df

def split_data(df, target):
    X = df.drop(columns=[target])
    y = df[target]
    X_train, X_temp, y_train, y_temp = train_test_split(X,y,test_size=0.3,random_state=42)
    X_val, X_test, y_val, y_test = train_test_split(X_temp,y_temp,test_size=0.5,random_state=42)
    return X_train, X_val, X_test, y_train, y_val, y_test

if __name__ == "__main__":
    df = load_data()
    df = clean_data(df)
    X_train, X_val, X_test, y_train, y_val, y_test = split_data(df,"disease")
    print("Pipeline done")
