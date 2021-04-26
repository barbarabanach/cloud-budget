
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}



(function () {

  var form = document.querySelector("#myForm"),
    fields = form.querySelectorAll("[data-error]");



  function isNotEmpty(field) {

    return field.value !== "";

  }

  function isAtLeast(field, min) {

    return field.value.length >= min;
  }


  function displayErrors(errors) {

    var ul = document.querySelector("ul.errors");

    if (!ul) {
      ul = document.createElement("ul");

      ul.classList.add("error");
    }

    console.log(ul);

    ul.innerHTML = "";

    errors.forEach(function (error) {

      var li = document.createElement("li");

      li.textContent = error;

      ul.appendChild(li);

    })

    form.parentNode.insertBefore(ul, form);
  }




  form.addEventListener("submit", function (e) {

    e.preventDefault();

    var errors = [];


    function Validate() {
      var ddlFruits = document.getElementById("ddlFruits");
      if (ddlFruits.value == "") {
        //If the "Please Select" option is selected display error.
        alert("Please select an option!");
        return false;
      }
      return true;
    }




    for (var i = 0; i < fields.length; i++) {

      var field = fields[i];
      var isValid = false;


      if (field.type === "text") {
        isValid = isNotEmpty(field);
        console.log("Type to text");

      } else if (field.type === "number") {
        isValid = isNotEmpty(field);
        console.log("Type to number");

      }

      console.log("-----------");


      if (!isValid) {
        field.classList.add("error");
        errors.push(field.dataset.error);
      } else {
        field.classList.remove("error");
      }
    }

    if (errors.length) {
      displayErrors(errors);
    } else {
      form.submit();
    }

    console.log(errors);

  }, false);




})();