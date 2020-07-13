// IIFE - Immediately Invoked Function Expression

(function() {
  // check if fields are filled in and hide the submit button
  document.addEventListener("DOMContentLoaded", function() {
    const formDisplay = new FormDisplay();
    formDisplay.checkFields();
    formDisplay.hideSubmit();
    });

  // display constructor function
  function FormDisplay() {
    this.name = document.getElementById("name");
    this.course = document.getElementById("course");
    this.author = document.getElementById("author");
    this.customers = document.querySelector(".customer-list");
  };

  // check fields
  FormDisplay.prototype.checkFields = function() {
    console.log(this);
    this.name.addEventListener("blur", this.validateField);
    this.course.addEventListener("blur", this.validateField);
    this.author.addEventListener("blur", this.validateField);
  };

  // validate each field
  FormDisplay.prototype.validateField = function() {
    console.log(this);
  };

  // disable submit button
  FormDisplay.prototype.hideSubmit = function() {
    const submitBtn = document.querySelector(".submitBtn");
    submitBtn.disabled = true;
  };

})();
