import ContentWindow from "./components/ContentWindow.js";

new Vue({
  el: "#app",
  data: function () {
    return {
      display: "default-display",
      componentData: {},
    };
  },
  template: `
    <ContentWindow :currentComponent="display" :componentData="componentData"></ContentWindow>
  `,
  components: {
    ContentWindow,
  },
  methods: {
    handleWeather: function (msg) {
      this.display = "weather";
      this.componentData = msg.data;

      setTimeout(() => {
        this.display = "default-display";
        this.componentData = {};
      }, 15000);
    },
  },
  mounted: function () {
    const socket = io();

    socket.on("connect", function () {
      console.info("Connected to Mycroft MessageBus.");
    });

    socket.on("weather", this.handleWeather);
  },
});
