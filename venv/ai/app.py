from flask import Flask, request, jsonify
import pandas as pd
from model import build_and_train_model

app = Flask(__name__)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.get_json()
    df = pd.DataFrame(data)
    model, scaler = build_and_train_model(df)
    
    predictions = model.predict(scaler.transform(df['close'].values[-60:].reshape(-1, 1)))
    confidence = round(float(predictions[-1]) * 100, 2)
    direction = "up" if confidence > 50 else "down"
    
    return jsonify({ "direction": direction, "confidence": confidence })

if __name__ == '__main__':
    app.run(debug=True)
