<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Collect form data
    $email = $_POST["email_user"];
    $password = $_POST["pass_Olduser"];

    // Your validation and authentication logic go here
    // For demonstration purposes, we'll just echo the collected data
    echo "Email: $email<br>";
    echo "Password: $password<br>";
} else {
    // Redirect to the login page if accessed directly without form submission
    header("Location: login.html");
    exit();
}
?>
