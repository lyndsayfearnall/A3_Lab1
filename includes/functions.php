<?php
  $user = 'root';
  $pass = ''; //on mac $pass = "root";
  $host = 'localhost';
  $db = 'db_a3_cooperinfo';

  //try connecting to the server, connects to database
  $conn = mysqli_connect($host, $user, $pass, $db);

  //to start getting info from database to look like an object
  mysqli_set_charset($conn, 'utf8');

  if (!$conn){
    echo 'Something done busted!';
    exit;
  }

  //echo 'Connected!';

  //storing query inside variable
  $myQuery = "SELECT * FROM mainmodel";

  $result = mysqli_query($conn, $myQuery);
  $rows = array();

  //places info from database into an array, for each entry in the database, place it into the array
  while ($row = mysqli_fetch_assoc($result)) {
    $rows[] = $row;
  }

  //var_dump($rows);
  //echo json_encode($rows);

  if (isset($_GET['carModel'])) {
    $car = $_GET["carModel"];

    //select one car instead of all of them
    $myQuery = "SELECT * FROM mainmodel WHERE model = '$car'";

    //state the result
    $result = mysqli_query($conn, $myQuery);

    //get the row
    $row = mysqli_fetch_assoc($result);

    //show it on the webpage
    echo json_encode($row);
  }
?>
