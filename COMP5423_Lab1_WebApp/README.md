# COMP5423_Lab1_WebApp

## Environment 
1. Pycharm 2020
2. Python 3.6 / 3.7

## Installation
1. Use the PyCharm to open the file
2. Right click the app.py and click "Run 'Flask (app.py)' " in the pop-up menu.
3. When PyCharm finished to set up the environment, open this URL http://127.0.0.1:5000/ in the browser.

## REMEMBER
Your computer may not have the libraries that the program required, the web application cannot run until you have installed them.
1. Flask 1.1.2
2. Tensorflow 2.4.1 (Important!!)
**The version of Tensorflow has to been 2.4, otherwise it cannot read load the trainned model.**

## Files
1. COMP5423_Lab1_model.tf \
    It is the trainned model which is used to predict the emotion of the user input sentence.
2. tokenizer.pickle \
   The fitted tokenizer from the training program, it is used to do the preprocessing after the user input their sentence in the web application.