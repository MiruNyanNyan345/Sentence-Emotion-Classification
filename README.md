# Sentence-Emotion-Classification
## COMP5423 Individual Project

## Sentence Emotion Classification
### Data File
1. test_data.txt
2. train.txt
3. val.txt

### Program File
1. COMP5423_Lab1_HW.ipynb

#### Installation
1. Go to Google Colab and Log into it with your google account.
2. Upload the data files to your own google drive (**🌟same account as your login account🌟**)
3. Upload the program file to Colab and open it \
<img src="https://i.imgur.com/ITH9XwY.png" width="300">

4. Change the paths of reading data files \
**⭐️ Important ⭐️** \
🙀 Since everyone store the data files in different location in google drive. You have to replace them to the correct path, where is the location of storing the data files. \
<img src="https://i.imgur.com/QFo2xTA.png" width="600">

5. After that, you are able to run the program \
<img src="https://i.imgur.com/eyb8zve.png" width="300">

## Sentence Emotion Web Application
### Environment 
1. Pycharm 2020
2. Python 3.6 / 3.7

### Installation
1. Use the PyCharm to open the file ("COMP5423_Lab1_WebApp")
2. Right click the app.py and click "Run 'Flask (app.py)' " in the pop-up menu.
3. When PyCharm finished to set up the environment, open this URL http://127.0.0.1:5000/ in the browser.

### REMEMBER
Your computer may not have the libraries that the program required, the web application cannot run until you have installed them.
1. Flask 1.1.2
2. Tensorflow 2.4.1 (Important!!)
**The version of Tensorflow has to been 2.4, otherwise it cannot read load the trainned model.**

### Files
1. COMP5423_Lab1_model.tf \
    It is the trainned model which is used to predict the emotion of the user input sentence.
2. tokenizer.pickle \
   The fitted tokenizer from the training program, it is used to do the preprocessing after the user input their sentence in the web application.
