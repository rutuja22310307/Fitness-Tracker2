document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Get input values
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Perform your login logic here
    // For demonstration, just log the values
    console.log("Username: " + username);
    console.log("Password: " + password);

    // You can redirect the user to another page after successful login
    // window.location.href = 'dashboard.html';
  });
});
