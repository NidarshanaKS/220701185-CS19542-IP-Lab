const name = document.getElementById("name");
const rollno = document.getElementById("rollno");
const gender = document.getElementById("gender");
const year = document.getElementById("year");
const dept = document.getElementById("dept");
const sec = document.getElementById("sec");
const address = document.getElementById("address");
const city = document.getElementById("city");
const country = document.getElementById("country");
const pincode = document.getElementById("pincode");
const form = document.getElementById("form");
const name_error = document.getElementById("name_error");
const rollno_error = document.getElementById("rollno_error");
const address_error = document.getElementById("address_error");
const city_error = document.getElementById("city_error");
var letters = /^[a-zA-Z]*$/;
var letters1 = /@#$%^&*/;
form.addEventListener("submit", (e) => {
  if (
    name.value === "" ||
    name.value == null ||
    !isNaN(name.value) ||
    !name.value.match(letters)
  ) {
    e.preventDefault();
    name_error.innerHTML = "Enter valid name";
  }
  if (rollno.value === "" || rollno.value == null || isNaN(rollno.value)) {
    e.preventDefault();
    rollno_error.innerHTML = "Enter vaild rollno";
  }
  if (address.value === "" || address.value == null) {
    e.preventDefault();
    address_error.innerHTML = "Enter vaild address";
  }
  if (
    city.value === "" ||
    city.value == null ||
    !isNaN(name.value) ||
    !name.value.match(letters)
  ) {
    e.preventDefault();
    city_error.innerHTML = "Enter vaild city";
  }
  if (
    country.value === "" ||
    country.value == null ||
    !isNaN(name.value) ||
    !name.value.match(letters)
  ) {
    e.preventDefault();
    country_error.innerHTML = "Enter vaild country";
  }
  if (pincode.value === "" || pincode.value == null || isNaN(pincode.value)) {
    e.preventDefault();
    pincode_error.innerHTML = "Enter vaild pincode";
  }
});
