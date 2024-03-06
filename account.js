document.addEventListener('DOMContentLoaded', function() {
  var signupForm = document.getElementById('signupForm');
  var thankYouMessage = document.getElementById('Your information has been saved \n Your account has been created. \n THANK YOU ..!!');

  signupForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    // Perform your account creation logic here
    // For demonstration, just show the thank you message
    thankYouMessage.classList.remove('hidden');

    // You can redirect the user to another page after successful account creation
    // window.location.href = 'dashboard.html';
  });
});
