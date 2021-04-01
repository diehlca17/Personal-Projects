<?php
session_start();
$username="diehlca17";
$password="shabba";

if($_SERVER["REQUEST_METHOD"]=="POST"){
if($username == $_POST["username"] && $password == $_POST["password"]){
	$_SESSION["status"] = "valid";
} else{
	unset($_SESSION["status"]);
 }
}
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Log In</title>
</head>

<body>
	<?php 
	if(isset($_SESSION["status"])){
		echo "<h1>Log In Successful</h1>";
		echo "Please proceed to the <a href = 'relevantCourseEntry.php'>Course Entry Page</a>.";
	} else{
	?>
	<h1>Log In</h1>
	<form method = "POST" action = "logIn.php">
		Username: <input type = "text" name = "username"><br>
		Password: <input type = "password" name = "password"><br>
		<input type = "submit" value = "Submit" name = "submit"><br>
	</form>
	<?php
	}
	?>
</body>
</html>