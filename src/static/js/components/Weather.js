const Weather = Vue.component("weather", {
  template: `
      <div class="weather-widget">
      <h1>
        {{city}}, {{state}}
      </h1>
      <div class="today-forecast">
        <img
          class="weather-icon"
          alt="Weather Icon"
          :src="weatherImage"

        />
        <span class="today-description">{{condition}}</span>
        <span class="current">{{temp}} &deg;</span>
        <div id="today-stats">
          <div class="today-temp">
            <span class="min-max">Min: {{min}}&deg;</span>
            <span class="min-max">Max: {{max}}&deg;</span>
          </div>
          <div class="today-temp">
            <span class="min-max">
              Humidity: {{humidity.replace("percent", "%")}}
            </span>
            <span class="min-max">Wind: {{wind}}</span>
          </div>
        </div>
      </div>

      <div class="forecast" v-if="forecastLoaded">
        <div class="forecast-item">
          <span>{{dtToDay(forecast[0].dt)}}</span>
          <span class="min-max">Min: {{forecast[0].temp.min}}&deg;</span>
          <span class="min-max">Max: {{forecast[0].temp.max}}&deg;</span>
        </div>
        <div class="forecast-item">
          <span>{{dtToDay(forecast[1].dt)}}</span>
          <span class="min-max">Min: {{forecast[1].temp.min}}&deg;</span>
          <span class="min-max">Max: {{forecast[1].temp.max}}&deg;</span>
        </div>
        <div class="forecast-item">
          <span>{{dtToDay(forecast[2].dt)}}</span>
          <span class="min-max">Min: {{forecast[2].temp.min}}&deg;</span>
          <span class="min-max">Max: {{forecast[2].temp.max}}&deg;</span>
        </div>
        <div class="forecast-item">
          <span>{{dtToDay(forecast[3].dt)}}</span>
          <span class="min-max">Min: {{forecast[3].temp.min}}&deg;</span>
          <span class="min-max">Max: {{forecast[3].temp.max}}&deg;</span>
        </div>
      </div>
    </div>
  `,
  props: [
    "city",
    "condition",
    "humidity",
    "icon",
    "min",
    "max",
    "state",
    "temp",
    "wind",
  ],
  computed: {
    weatherImage: function () {
      return `http://openweathermap.org/img/wn/${this.icon}@2x.png`;
    },
    forecastURL: function () {
      return `https://api.openweathermap.org/data/2.5/forecast/daily?q=${this.city}&cnt=4&units=imperial&appid=${this.owmkey}`;
    },
  },
  data: function () {
    return {
      forecast: [],
      forecastLoaded: false,
      owmkey: document.getElementById("owmkey").innerHTML,
    };
  },
  created() {
    this.getForecast();
  },
  methods: {
    getForecast: function () {
      fetch(this.forecastURL)
        .then((response) => response.json())
        .then((data) => {
          this.forecast = data.list;
          this.forecastLoaded = true;
        });
    },
    dtToDay: function (dt) {
      const date = new Date(dt * 1000);
      return date.toLocaleString("en-US", { month: "long", day: "numeric" });
    },
  },
});

export default Weather;
