let countryName = [
  "Afghanitan",
  "Africa",
  "Argintina",
  "Amrica",
  "Sodan",
  "London",
  "Kinya",
  "Baghdad",
  "Englind",
  "Iran",
  "Tajikistan",
  "Uzbekistan",
  "Turkministan",
  "Pakistan",
  "Turkeye",
  "Surya",
  "Germany",
  "Iraq",
  "Saudi Arbia",
  "Italia",
];
let select = document.getElementById("select");
let pTag = document.getElementById("para");

for (let i = 0; i < countryName.length; i++) {
  let countryList = countryName[i];
  let optionElement = document.createElement("option");
  optionElement.value = countryList;
  optionElement.textContent = countryList;
  select.appendChild(optionElement);
}

function getcountryName() {
  let val = select.options[select.selectedIndex].text;
  pTag.textContent = "selected Country : " + val;
  pTag.style.display = "black";
}
