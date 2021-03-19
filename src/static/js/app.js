import ContentWindow from "./components/ContentWindow.js";

new Vue({
  el: "#app",
  data: function () {
    return {
      display: "default-display",
    };
  },
  template: `
    <ContentWindow :currentComponent="display"></ContentWindow>
  `,
  components: {
    ContentWindow,
  },
  methods: {
    handleWeather: function (msg) {
      console.log("weather skill: ", msg);
      this.display = "weather";

      setTimeout(() => {
        this.display = "default-display";
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
