<?php

$con = mysqli_connect('localhost', 'root', '','campus', 3306);

$name = $_POST['name'];
$surname = $_POST['surname'];
$id = $_POST['ID_number'];
$phone = $_POST['phone_number'];
$password = $_POST['psw'];

$sql = "INSERT INTO `register` (`id`, `name`, `surname`, `phone`, `password`) VALUES ('0', '$name', '$surname', '$phone', '$password')";

$rs = mysqli_query($con, $sql);

if($rs)
{
	header('location:/Registration/Register.html');
}

?>
