<!DOCTYPE HTML>

<html>
	<head>
		<title>Relevant Coursework</title>
		<meta charset="utf-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no" />
		<link rel="stylesheet" href="assets/css/main.css" />
		<noscript><link rel="stylesheet" href="assets/css/noscript.css" /></noscript>
	</head>
	<body class="is-preload">

		<!-- Header -->
			<header id="header">
				<a href="index.html" class="title">Castle's Portfolio</a>
				<nav>
					<ul>
						<li><a href="index.html">Home</a></li>
						<li><a href="Introduction.html" class="active">About Me</a></li>
						
					</ul>
				</nav>
			</header>

		<!-- Wrapper -->
			<div id="wrapper">

				<!-- Main -->
					<section id="main" class="wrapper">
						<div class="inner">
							<h1 class="major">Relevant Coursework</h1>
							<span class="image fit"><img src="images/ecuBG.jpg" alt="" height="433" /></span>
						  <h2>Completed Courses at ECU</h2>
						  <table>
							  <tbody>
							    <tr>
							      <th>Name</th>
							      <th>Number</th>
							      <th>Description</th>
						        </tr>
								  <?php
								 // 1.  Connect to database
								  
								 $con = mysqli_connect("localhost","MIS4153","pirates4thewin","mis4153");
								  
								 /* check connection */
								  if (mysqli_connect_errno()) {
    								printf("Connect failed: %s\n", mysqli_connect_error());
    								exit();
								  }
								  
								 // 2.  Send a query to the database
								 
								 $sql = "SELECT * FROM courses_taken WHERE pirateID = 'diehlca17'";
								 $coursesArray = mysqli_query($con,$sql);
								  
								 // 3.  Work with Returned Data
								  
							  while($courseInfo = mysqli_fetch_assoc($coursesArray)){
								  echo "<tr>";
								  echo "<td>" . $courseInfo['Name'] . "</td>";
								  echo "<td>" . $courseInfo['Number'] . "</td>";
								  echo "<td>" . $courseInfo['Description'] . "</td>";
								  echo "</tr>";
							  }
								  
								  // 4.  Release the Data
								  
								  mysqli_free_result($coursesArray);
								  
								  // 5.  Close the Connection
								  
								  mysqli_close($con);
								 
								 
								  ?>
								 
						  </table>
							
						</div>
					</section>

			</div>

		<!-- Footer -->
			<footer id="footer" class="wrapper alt">
				<div class="inner">
					<ul class="menu">
						
					</ul>
				</div>
			</footer>

		<!-- Scripts -->
			<script src="assets/js/jquery.min.js"></script>
			<script src="assets/js/jquery.scrollex.min.js"></script>
			<script src="assets/js/jquery.scrolly.min.js"></script>
			<script src="assets/js/browser.min.js"></script>
			<script src="assets/js/breakpoints.min.js"></script>
			<script src="assets/js/util.js"></script>
			<script src="assets/js/main.js"></script>

	</body>
</html>