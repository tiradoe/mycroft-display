# mycroft-display
Display application for Mycroft using Vue.js with a Flask backend.

Still a work in progress but the eventual goal have this be a lightweight replacement for mycroft-react.  The frontend currently displays the default page
with the current date and time.  The Flask server can also detect when Mycroft is speaking via the MycroftMessageBus, but does not yet update the display.
