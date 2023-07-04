from flask import Flask, jsonify, request
from flask_cors import CORS
from flask import redirect


app = Flask(__name__)
CORS(app)

@app.route('/login', methods=['POST'])
def login():
    nuid = request.json['nuid']
    password = request.json['password']

    if nuid == '19k1366' and password == 'password':
        return jsonify({'success': True, 'message': 'Login successful'})
    else:
        return jsonify({'success': False, 'message': 'Invalid credentials'})

@app.route('/members')
def members():
    return {"members" : ["Member1", "Member2", "Member3"]}

if __name__ == '__main__':
    app.run(debug=True)