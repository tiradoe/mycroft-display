import Sidebar from "./Sidebar.js";
import VideoDisplay from "./VideoDisplay.js";

const ContentWindow = Vue.component("content-window", {
  template: `
    <div class="content-container">
      <Sidebar :class="display"></Sidebar>
      <VideoDisplay></VideoDisplay>
    </div>
  `,
  components: {
    Sidebar,
    VideoDisplay,
  },
  props: ["display"],
});

export default ContentWindow;
