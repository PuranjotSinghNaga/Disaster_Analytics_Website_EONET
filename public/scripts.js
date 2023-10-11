var types = {
  category: [
    "Drought",
    "Dust Haze",
    "Earthquake",
    "Floods",
    "Landslides",
    "Man Made",
    "Sea and Lake Ice",
    "Severe Storms",
    "Snow",
    "Extreme Temperatures",
    "Volcanoes",
    "Water Color",
    "Wildfires",
  ],
  status: ["Open", "Closed"],
};

var main = document.getElementById("mainMenu");
var sub = document.getElementById("subMenu");

main.addEventListener("change", function () {
  var selected_option = types[this.value];
  while (sub.options.length > 0) {
    sub.options.remove(0);
  }
  Array.from(selected_option).forEach(function (el) {
    let option = new Option(el, el);
    sub.appendChild(option);
  });
});
