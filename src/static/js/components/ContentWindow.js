import DefaultDisplay from "./DefaultDisplay.js";
import Weather from "./Weather.js";

const ContentWindow = Vue.component("content-window", {
  template: `
    <div class="content-container">
      <component v-bind:is="currentComponent"></component>
    </div>
  `,
  components: {
    DefaultDisplay,
    Weather,
  },
  props: ["currentComponent"],
});

export default ContentWindow;
