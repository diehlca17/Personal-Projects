<?php
session_start();
unset($_SESSION["status"]);
?>
<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Logged Out</title>
</head>

<body>
	<h1>You are now signed off.</h1>
	<p><a href = "logIn.php">Go to log in page</a></p>
</body>
</html>