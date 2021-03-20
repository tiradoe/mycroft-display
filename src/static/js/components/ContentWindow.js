import DefaultDisplay from "./DefaultDisplay.js";
import Weather from "./Weather.js";
import Browns from "./Browns.js";

const ContentWindow = Vue.component("content-window", {
  template: `
    <div class="content-container">
      <component v-bind:is="currentComponent" v-bind="currentProps"></component>
    </div>
  `,
  components: {
    DefaultDisplay,
    Weather,
    Browns,
  },
  computed: {
    currentProps: function () {
      if (this.currentComponent === "weather") {
        const [city, state] = this.componentData.full_location.split(",");
        return {
          city: city,
          condition: this.componentData.condition,
          humidity: this.componentData.humidity,
          icon: this.componentData.icon,
          min: this.componentData.temp_min,
          max: this.componentData.temp_max,
          state: state,
          temp: this.componentData.temp,
          wind: this.componentData.wind,
        };
      } else if (this.currentComponent === "browns") {
        return {
          game_result: this.componentData,
        };
      }

      return "";
    },
  },
  props: ["currentComponent", "componentData"],
});

export default ContentWindow;
