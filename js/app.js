// IIFE - Immediately Invoked Function Expression

(function() {
  // check if fields are filled in and hide the submit button
  document.addEventListener("DOMContentLoaded", function() {
    const formDisplay = new FormDisplay();
    formDisplay.checkFields();
    formDisplay.hideSubmit();
    });

  // add customer on submit
  document.getElementById("customer-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = this.querySelector(".name");
    const course = this.querySelector(".course");
    const author = this.querySelector(".author");
  });

  // display form constructor function
  function FormDisplay() {
    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.customers = document.querySelector(".customer-list");
  };

  // check fields
  FormDisplay.prototype.checkFields = function() {
    // console.log(this);
    this.name.addEventListener("blur", this.validateField);
    this.course.addEventListener("blur", this.validateField);
    this.author.addEventListener("blur", this.validateField);
  };

  // validate each field
  FormDisplay.prototype.validateField = function() {
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
  FormDisplay.prototype.hideSubmit = function() {
    const submitBtn = document.querySelector(".submitBtn");
    submitBtn.disabled = true;
  };



})();
