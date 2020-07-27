<?php

include "config.php";

$msg="";

if (isset($_POST['submit'])){
$name = $_POST['name'];
$email = $_POST['email'];
$gender = $_POST['gender'];
$country = $_POST['country'];
$comments = $_POST['comments'];
$id = "";

$table_input = "INSERT INTO guest(ID, NAME, EMAIL, GENDER, COUNTRY, COMMENTS) VALUES ('$id','$name','$email','$gender','$country','$comments')";

if ($conn->query($table_input) === TRUE){
$msg = "<div class='alertSuccess'><strong>Great!</strong> You are signed successfully!
<br>Thank You!</div>";
}else{
$msg = "<div class='alertError'>Unable to Post. Contact Support.</div>";

}
}
mysqli_close($conn);

?>