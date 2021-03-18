import Calendar from "./Calendar.js";
import Clock from "./Clock.js";

const Sidebar = Vue.component("sidebar", {
  template: `
    <div class="sidebar">
      <Calendar></Calendar>
      <Clock></Clock>
    </div>
  `,
  components: {
    Calendar,
    Clock,
  },
});

export default Sidebar;
