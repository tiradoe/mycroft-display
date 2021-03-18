const Calendar = Vue.component("calendar", {
  data: function () {
    return {
      now: new Date(),
      days: [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ],
      months: [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
      ],
    };
  },
  template: `
    <div class="date">
      <span class="month ">{{month}}</span>
      <span class="day-of-month ">{{dayOfMonth}}</span>
      <span class="day ">{{day}}</span>
    </div>
  `,
  mounted: function () {
    var self = this;
    const timerId = setInterval(() => {
      self.now = new Date();
    }, 1000);

    return function cleanup() {
      clearInterval(timerId);
    };
  },
  computed: {
    month: function () {
      return this.months[this.now.getMonth()];
    },
    dayOfMonth: function () {
      return this.now.getDate();
    },
    day: function () {
      return this.days[this.now.getDay()];
    },
  },
});

export default Calendar;
