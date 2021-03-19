import DefaultDisplay from "./DefaultDisplay.js";
import Weather from "./Weather.js";

const ContentWindow = Vue.component("content-window", {
  template: `
    <div class="content-container">
      <component v-bind:is="currentComponent" v-bind="currentProps"></component>
    </div>
  `,
  components: {
    DefaultDisplay,
    Weather,
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
      }

      return "";
    },
  },
  props: ["currentComponent", "componentData"],
});

export default ContentWindow;
