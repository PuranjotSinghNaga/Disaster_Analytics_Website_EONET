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
var subContainer = document.getElementById("subMenuContainer");

main.addEventListener("change", function () {
  var selected_option = this.value;
  var sub = document.getElementById("subMenu");

  if (selected_option === "location") {
    // Create a text input field for location
    var locationInput = document.createElement("input");
    locationInput.type = "text";
    locationInput.className = "form-control";
    locationInput.name = "selectValue2";
    locationInput.placeholder = "Enter Location";
    // Replace the subMenu with the locationInput
    subContainer.innerHTML = "";
    subContainer.appendChild(locationInput);
  } else if (selected_option === "date") {
    locationInput = document.createElement("input");
    locationInput.type = "date";
    locationInput.name = "selectValue2";
    locationInput.className = "datePicker";
    subContainer.innerHTML = "";
    subContainer.appendChild(locationInput);
  } else if (selected_option === "days") {
    locationInput = document.createElement("input");
    locationInput.type = "number";
    locationInput.name = "selectValue2";
    locationInput.className = "daysInput";
    locationInput.min = "0";
    subContainer.innerHTML = "";
    subContainer.appendChild(locationInput);
  } else {
    var selected_values = types[selected_option];
    subContainer.innerHTML = "";

    // Create and populate the subMenu with options
    var select = document.createElement("select");
    select.className = "form-select";
    select.ariaLabel = "Default select example";
    select.name = "selectValue2";

    var defaultOption = new Option("Search By:", "");
    select.appendChild(defaultOption);

    selected_values.forEach(function (el) {
      let option = new Option(el, el);
      select.appendChild(option);
    });

    subContainer.appendChild(select);
  }
});
