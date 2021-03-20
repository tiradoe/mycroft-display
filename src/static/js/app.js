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
    handleBrowns: function (msg) {
      this.display = "browns";
      this.componentData = msg.game_result;
      this.resetDisplay();
    },
    handleWeather: function (msg) {
      this.display = "weather";
      this.componentData = msg.data;
      this.resetDisplay();
    },
    resetDisplay: function () {
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
    socket.on("browns", this.handleBrowns);
  },
});
