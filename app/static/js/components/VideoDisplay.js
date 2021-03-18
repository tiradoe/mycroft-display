const VideoDisplay = Vue.component("video-display", {
  template: `
      <div class="video-display">
      <video playsInline autoPlay muted loop>
        <source src="https://i.imgur.com/M4fwZS2.mp4" type="video/mp4" />
      </video>
    </div>
  `,
});

export default VideoDisplay;
