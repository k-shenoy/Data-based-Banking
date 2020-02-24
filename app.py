import json

from flask import Flask, render_template
from flask import redirect, request, jsonify, url_for
import pandas as pd

app = Flask(__name__)

@app.route("/")
def index():
    #dataatmTarget = pd.read_csv('dataatmTarget.csv')
    #datanoTarget = pd.read_csv('datanoTarget.csv')
    #datacustTarget = pd.read_csv('datacustTarget.csv')
    #databankTarget = pd.read_csv('databankTarget.csv')
    #chart_data = dataatmTarget.to_dict(orient='records')
    #chart_data = json.dumps(chart_data, indent=2)
    #dataATM = {'chart_data': chart_data}
    #chart_data1 = datanoTarget.to_dict(orient='records')
    #chart_data1 = json.dumps(chart_data1, indent=2)
    #dataNo = {'chart_data': chart_data1}
    #chart_data2 = datacustTarget.to_dict(orient='records')
    #chart_data2 = json.dumps(chart_data2, indent=2)
    #dataCust = {'chart_data': chart_data2}
    #chart_data3 = databankTarget.to_dict(orient='records')
    #chart_data3 = json.dumps(chart_data3, indent=2)
    #dataBank = {'chart_data': chart_data3}
    data = pd.read_csv('dataAllTarget.csv')
    chart_data = data.to_dict(orient='records')
    chart_data = json.dumps(chart_data, indent=2)
    data = {'chart_data': chart_data}
    title = 'About Your Company'
    return render_template("index.html", title=title, data=data, text = "hello")

@app.route("/")
def other(input):
    #dataatmTarget = pd.read_csv('dataatmTarget.csv')
    #datanoTarget = pd.read_csv('datanoTarget.csv')
    #datacustTarget = pd.read_csv('datacustTarget.csv')
    #databankTarget = pd.read_csv('databankTarget.csv')
    #chart_data = dataatmTarget.to_dict(orient='records')
    #chart_data = json.dumps(chart_data, indent=2)
    #dataATM = {'chart_data': chart_data}
    #chart_data1 = datanoTarget.to_dict(orient='records')
    #chart_data1 = json.dumps(chart_data1, indent=2)
    #dataNo = {'chart_data': chart_data1}
    #chart_data2 = datacustTarget.to_dict(orient='records')
    #chart_data2 = json.dumps(chart_data2, indent=2)
    #dataCust = {'chart_data': chart_data2}
    #chart_data3 = databankTarget.to_dict(orient='records')
    #chart_data3 = json.dumps(chart_data3, indent=2)
    #dataBank = {'chart_data': chart_data3}
    data = pd.read_csv('dataAllTarget.csv')
    chart_data = data.to_dict(orient='records')
    chart_data = json.dumps(chart_data, indent=2)
    data = {'chart_data': chart_data}
    title = 'About Your Company'
    return render_template("index.html", title=title, data=data, text = input)

@app.route('/postmethod', methods = ['POST'])
def get_post_javascript_data():
    typedata = request.form['data']
    textdata = request.form['text']
    other(typedata)

    data = pd.read_csv('dataAllTarget.csv')
    chart_data = data.to_dict(orient='records')
    chart_data = json.dumps(chart_data, indent=2)
    data = {'chart_data': chart_data}
    title = 'About Your Company'

    return render_template("index.html", title=title, data=data, text = typedata)

if __name__ == "__main__":
    app.run(debug=True, )
