<?php

$con = mysqli_connect('localhost', 'root', '','campus', 3306);

$uname = $_POST['uname'];
$passw = $_POST['psw'];


$sql = "INSERT INTO `user` (`username`, `password`) VALUES ('$uname', '$passw')";

$rs = mysqli_query($con, $sql);

if($rs)
{
	header('location:/Sign_in/signin.html');
}

?>
