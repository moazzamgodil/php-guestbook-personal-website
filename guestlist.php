<?php

include "config.php";

$output = "";

$query = "SELECT * FROM guest ORDER BY id desc";

$result = mysqli_query($conn, $query);

// if(mysqli_num_rows($result) > 0)
// {
// 	while($row = mysqli_fetch_assoc($result))
// 	{
//         $output = '
//             <div class="card">
//                 <h3>'.$row["name"].'</h3>
//                 <p class="subline">From '.$row["country"].' &ensp;&ensp; Email: '.$row["email"].'</p>
//                 <p class="commentGuest"><q>'.$row["comments"].'</q></p>
//             </div>
//         ';
// 	}
// }
// else
// {
// 	$output = '<p class="alertError">Post Not Found</p>';
// }


// mysqli_close($conn);

?>