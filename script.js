document.getElementById("submit-btn").addEventListener("click", function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();

  // Check if all required fields are filled
  if (validateForm()) {
      // If all required fields are filled, submit the form
      alert("Form submitted successfully!");
      // Optionally, you can submit the form programmatically
      // document.getElementById("your-form-id").submit();
  } else {
      // If any required field is empty, display an error message or handle it as needed
      alert("Please fill out all required fields.");
  }
});

function validateForm() {
  // Get values of all required fields
  var fname = document.getElementById("fname").value.trim();
  var lname = document.getElementById("lname").value.trim();
  var dob = document.getElementById("dob").value.trim();
  var phone = document.getElementById("phone").value.trim();
  var email = document.getElementById("email").value.trim();
  var street = document.getElementById("street").value.trim();
  var city = document.getElementById("city").value.trim();
  var state = document.getElementById("state").value.trim();
  var zip = document.getElementById("zip").value.trim();
  var eventPreferences = document.getElementById("event-preferences").value.trim();
  var dietaryRestrictions = document.getElementById("dietary-restrictions").value.trim();
  var tshirtSize = document.getElementById("tshirt-size").value.trim();

  // Check if any required field is empty
  if (fname === "" || lname === "" || dob === "" || phone === "" || email === "" || street === "" || city === "" || state === "" || zip === "" || eventPreferences === "" || dietaryRestrictions === "" || tshirtSize === "") {
      return false; // Return false if any required field is empty
  } else {
      return true; // Return true if all required fields are filled
  }
}
