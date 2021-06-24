from flask import Flask, render_template
import flask
from tensorflow.keras.models import load_model
from tensorflow.keras.preprocessing.sequence import pad_sequences
import pickle
import os

app = Flask(__name__)
os.environ['TF_CPP_MIN_LOG_LEVEL'] = '2'


@app.route('/')
def index():
    return render_template('EmotionClassifier.html')


def preprocess(sentence):
    with open('tokenizer.pickle', 'rb') as handle:
        tokenizer = pickle.load(handle)
    sentence_list = [sentence]
    sentence_seq = tokenizer.texts_to_sequences(sentence_list)
    sentence_pad = pad_sequences(sentence_seq, maxlen=80, padding='post')
    return sentence_pad


@app.route("/predict", methods=["GET", "POST"])
def predict():
    data = {"emotion": None}

    sentence = flask.request.args.get('sentence')

    preprocessed_sentence = preprocess(sentence)
    # print("Sentence:", sentence)
    # print("Preprocessed Sentence:", preprocessed_sentence)

    try:
        model = load_model('COMP5423_Lab1_model.tf')
        prediction = model.predict_classes(preprocessed_sentence)
    except Exception as e:
        # (f'Failed, Exception: {e}')
        data["status"] = "Failed"
        data["exception"] = e
        return flask.jsonify(data), 400

    emotionToInt = {
        'joy': 0,
        'anger': 1,
        'love': 2,
        'sadness': 3,
        'fear': 4,
        'surprise': 5

    }

    emotionColor = {
        'joy': '#FCE205',
        'anger': '#DC143C',
        'love': '#FF0090',
        'sadness': '#4682B4',
        'fear': '#363636',
        'surprise': '#FD6A02'
    }

    for emotionLabel, emotionVal in emotionToInt.items():
        if (emotionVal == prediction):
            data["emotion"] = emotionLabel
            data["emotion_color"] = emotionColor[emotionLabel]
            return flask.jsonify(data), 200


if __name__ == '__main__':
    app.run()
