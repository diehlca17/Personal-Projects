<?php
session_start();
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Relevant Course Entry</title>
</head>

<body>
	<?php
		if(isset($_SESSION["status"])){
	?>
	<h1>Course Entry Form</h1>
	<p>Please enter the course information</p>
	<form method = "post" action = "relevantCourseProcessing.php" >
	Course Name: <input type = "text" name = "name"><br>
	Course Number: <input type = "text" name = "number"><br>
	Course Description:<input type = "text" name = "description"><br>
	<input type = "hidden" name = "pirateID" value = "diehlca17">
	<input type = "submit" name = "submit" value = "submit">
	</form>
	<?php
		} else{
		echo "<h1>Not a valid login</h1>";
		echo "<p>Please go to the <a href = 'login.php'>Login Screen</a></p>";
		}
	?>
</body>
</html>