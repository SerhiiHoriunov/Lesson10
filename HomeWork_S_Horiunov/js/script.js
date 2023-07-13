let form = document.querySelector("#form");
let formData = {};

form.addEventListener("input", function (event) {
  formData[event.target.name] = event.target.value;
  localStorage.setItem("formData", JSON.stringify(formData));
});

if (localStorage.getItem("formData")) {
  formData = JSON.parse(localStorage.getItem("formData"));

  for (let key in formData) {
    form.elements[key].value = formData[key];
  }
}



