<?php

$con = mysqli_connect('localhost', 'root', '','campus', 3306);

$name     = $_POST['name'];
$surname  = $_POST['surname'];
$id       = $_POST['ID_number'];

$place    = $_POST['place'];
$duration = $_POST['duration'];
$car      = $_POST['car'];
// $parking  = $_POST['parkingType'];
$calendar = $_POST['calendar'];

$sql = "INSERT INTO `visitor` (`id`, `name`, `surname`,`place`,`duration`,`car`,`calendar`) VALUES ('$id', '$name', '$surname', '$place', '$duration', '$car', '$calendar')";

$rs = mysqli_query($con, $sql);

if($rs)
{
	header('location:/Visitor/InviteVisitor.html');
}

?>
