from flask import Flask, request, render_template, jsonify
import smart_oven
from datetime import datetime

app = Flask(__name__)

if __name__ == "__main__":
    app.run(use_reloader=False)

samples = []

def c_time():
    rightNow = datetime.now()
    time = rightNow.strftime("%I:%M:%S%p").lstrip('0').lower()
    return time

@app.route('/')
def main():
    return render_template('index.html')