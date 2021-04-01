<?php
session_start();
?>

<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Relevant Course Processing</title>
</head>

<body>
	<?php
		if(isset($_SESSION["status"])){
	?>
	<h1>Course Processing</h1>
	<?php
			
	
		$PirateID = $_POST["pirateID"];
		$courseName = $_POST["name"];
		$courseNumber = $_POST["number"];
		$courseDescription = $_POST["description"];
			
		// 1.  Connect to the Database
			 $con = mysqli_connect("localhost","MIS4153","pirates4thewin","mis4153");
			
			/* check connection */
			 if (mysqli_connect_errno()) {
    			printf("Connect failed: %s\n", mysqli_connect_error());
    			exit();
			}
		// 2.  Query to the Database
			$sql = "Insert into courses_taken (PirateID, Name, Number, Description) values ('$PirateID', '$courseName', '$courseNumber', '$courseDescription')";
			
			mysqli_query($con, $sql);
			
		// 3.  Work with Returned Data
		// 4.  Release the Data
		// 5.  Close the Connection
			mysqli_close($con);
	
		echo "Thank you for your submisson of $courseName<br>";
		echo "The course $courseName, has been entered into the database.<br>";
	
		} else{
		echo "<h1>Not a valid login</h1>";
		echo "<p>Please go to the <a href = 'login.php'>Login Screen</a></p>";
		}
	?>
</body>
</html>