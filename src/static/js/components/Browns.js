const Browns = Vue.component("browns", {
  template: `
    <div id="browns-status">
      <img id="browns-image" alt="game status" :src="background_image"/>
    </div>
  `,
  computed: {
    background_image: function () {
      let background_image;

      switch (this.game_result) {
        case "won":
          background_image = "/static/img/win/browns_red_carpet.gif";
          break;
        case "beat_steelers":
          background_image = "/static/img/win/steelers-lose.gif";
          break;
        default:
          background_image = "/static/img/lose/browns_i_wanna_die.jpg";
      }

      return background_image;
    },
  },
  props: ["game_result"],
});

export default Browns;
