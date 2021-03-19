import os
from mycroft_bus_client import MessageBusClient, Message
from flask_socketio import SocketIO, emit
from flask import Flask, render_template
from dotenv import load_dotenv


def start_mycroft_client():
    client = MessageBusClient()

    client.on('speak', handle_utterance)
    client.run_in_thread()


def handle_utterance(message):
    skill_name = message.data.get('meta').get('skill')
    skill_data = message.data.get('meta').get('data')

    if skill_name == "WeatherSkill":
        socketio.emit('weather', {'skill': skill_name, 'data': skill_data})


# create and configure the app
app = Flask(__name__)
app.config['SECRET_KEY'] = 'dev'
socketio = SocketIO(app)
load_dotenv('../.env')
start_mycroft_client()


@app.route('/')
def index():
    return render_template("index.html", owmkey=os.environ.get('WEATHER_API_KEY'))


if __name__ == '__main__':
    socketio.run(app)
