const Clock = Vue.component("clock", {
  data: function () {
    return {
      now: new Date(),
    };
  },
  template: `
    <div id="clock">
      <span>{{currentTime}}</span>
    </div>
  `,
  mounted: function () {
    var self = this;
    setInterval(() => {
      self.now = new Date();
    }, 1000);
  },
  computed: {
    currentTime: function () {
      let time = this.now.toLocaleString([], {
        hour: "2-digit",
        minute: "2-digit",
      });

      // Remove the leading zero in Chrome
      if (time.substr(0, 1) === "0") {
        time = time.substr(1);
      }
      return time;
    },
  },
});

export default Clock;
