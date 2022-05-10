import numpy as np
import pickle
from flask import Flask, request
import json
from json import JSONEncoder

haModel = pickle.load(open('haModel.pkl', 'rb'))

class NumpyArrayEncoder(JSONEncoder) :
    def default(self, obj):
        if isinstance(obj, np.ndarray):
            return obj.tolist()
        return JSONEncoder.default(self, obj)


app = Flask(__name__)




# Binding Heart Attack Disease Route
@app.route('/HeartAttack', methods =['POST'])
def predictHA():
    print("DEFG")

    rawFeatures = [float(i) for i in request.form.values()]
    print("raw features: ", rawFeatures)

    if(len(rawFeatures) == 13):
        rearrangedFeatures = list()
        rearrangedFeatures.append(rawFeatures[0])
        rearrangedFeatures.append(rawFeatures[6])
        rearrangedFeatures.append(rawFeatures[2])
        rearrangedFeatures.append(rawFeatures[1])
        rearrangedFeatures.append(rawFeatures[7])
        rearrangedFeatures.append(rawFeatures[9])
        rearrangedFeatures.append(rawFeatures[5])
        rearrangedFeatures.append(rawFeatures[11])
        rearrangedFeatures.append(rawFeatures[8])
        rearrangedFeatures.append(rawFeatures[12])
        rearrangedFeatures.append(rawFeatures[3])
        rearrangedFeatures.append(rawFeatures[4])
        rearrangedFeatures.append(rawFeatures[10])


        array_features =[np.array(rearrangedFeatures)]

        # Predict features
        prediction = haModel.predict(array_features)

        print("\n")
        encodedNumpyData = json.dumps(prediction, cls=NumpyArrayEncoder)
        print("\n")

        if(prediction == 1) :
            result = "There are huge chances of heart attack."
        else :
            result = "There are not huge chances of heart attack."
    
        print("prediction output:", result)

        return '''<!DOCTYPE html>
                <html lang="en">
                <head>
                    <link
                        rel="stylesheet"
                        href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
                        integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2"
                        crossorigin="anonymous"
                    />
                    <link
                        rel="stylesheet"
                        href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
                        integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN"
                        crossorigin="anonymous"
                    />
                    
                    <link rel="preconnect" href="https://fonts.googleapis.com"> 
                    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin> 
                    <link href="https://fonts.googleapis.com/css2?family=Grape+Nuts&display=swap" rel="stylesheet">
                    
                    
                    <title>Demo </title>
                </head>

                <body style="background-color:black; color:white; margin-top: 4vw">
                    <a href="/HeartAttack"><div  href="/HeartAttack" style="width: 0;height: 0;border-top: 2vw solid transparent;border-bottom: 2vw solid transparent;border-right: 2vw solid whitesmoke;margin-left: 5vw;"></div></a>
                     
                    <i><h1 style="text-align:center; font-size: 5vw; margin: 12vw 0vw 0vw 0vw; font-family: 'Grape Nuts', cursive;">{}</h1></i>'''.format(result)
        '''</body>
                </html>'''
        '''return  {"elementss": ["Element11", "Element12"]}
        {"resulttt": encodedNumpyData}'''

    else :
        print("else case is running", len(rawFeatures))
        return {"elements": ["Element1", "Element2", "Element3"]}



if __name__ == "__main__" :
    app.run(debug=True)












































