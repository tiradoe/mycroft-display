Vue.component("calendar", {
  data: function () {
    return {
      message: "calendar!",
    };
  },
  template: `<h1>It's a {{message}}</h1>`,
});

new Vue({
  el: "#app",
  delimiters: ["[[", "]]"],
  data: {
    message: "Welcome to Mycroft",
  },
});
