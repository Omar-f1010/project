<?php
$email = "g201210568@sakarya.edu.tr";
$password = "g201210568";
if (isset($_POST['email']) && isset($_POST['password'])) {
    if ($_POST['email'] != $email || $_POST['password'] != $password) {
        header("location: login.html");
        die();
    }
}

echo "<div class=\"container\"><p>Hoşgeldiniz, g201210568</p></div>";
?>