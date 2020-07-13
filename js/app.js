// IIFE - Immediately Invoked Function Expression

(function() {
  // check if fields are filled in and hide the submit button
  document.addEventListener("DOMContentLoaded", function() {
    const display = new Display();
    display.checkFields();
    display.hideSubmit();
    });

  // add customer on submit
  document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    // get fields
    const name = this.querySelector(".name");
    const course = this.querySelector(".course");
    const author = this.querySelector(".author");

    // pass fields' values as the arguments to the Customer constructor function
    const customer = new Customer(name.value, course.value, author.value);

    // create new display with newly created customer
    const display = new Display();

    display.feedback(customer);
    display.clearFields();

  });

  // display form constructor function
  function Display() {
    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.customers = document.querySelector(".customer-list");
  };

  // check fields
  Display.prototype.checkFields = function() {
    // console.log(this);
    this.name.addEventListener("blur", this.validateField);
    this.course.addEventListener("blur", this.validateField);
    this.author.addEventListener("blur", this.validateField);
  };

  // validate each field
  Display.prototype.validateField = function() {
    // console.log(this);
    if (this.value === "") {
      this.classList.remove("complete");
      this.classList.add("fail");
    } else {
      this.classList.remove("fail");
      this.classList.add("complete");
    }
    const complete = document.querySelectorAll(".complete");
    if (complete.length === 3) {
      document.querySelector(".submitBtn").disabled = false;
    } else {
      document.querySelector(".submitBtn").disabled = true;
    }
  };

  // disable submit button
  Display.prototype.hideSubmit = function() {
    const submitBtn = document.querySelector(".submitBtn");
    submitBtn.disabled = true;
  };

  // clear fields

  Display.prototype.clearFields = function() {
    this.name.value = "";
    this.course.value = "";
    this.author.value = "";

    this.name.classList.remove("complete", "fail");
    this.course.classList.remove("complete", "fail");
    this.author.classList.remove("complete", "fail");
  }

  // customer constructor function
  function Customer(name, course, author) {
    this.name = name;
    this.course = course;
    this.author = author;
  }

})();
