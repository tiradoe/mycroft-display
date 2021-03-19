import Sidebar from "./Sidebar.js";
import VideoDisplay from "./VideoDisplay.js";

const DefaultDisplay = Vue.component("default-display", {
  template: `
  <div>
    <Sidebar></Sidebar>
    <VideoDisplay></VideoDisplay>
  </div>
  `,
  components: {
    Sidebar,
    VideoDisplay,
  },
});

export default DefaultDisplay;
