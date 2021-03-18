import ContentWindow from "./components/ContentWindow.js";

new Vue({
  el: "#app",
  template: `
    <ContentWindow display="test"></ContentWindow>
  `,
  components: {
    ContentWindow,
  },
});
