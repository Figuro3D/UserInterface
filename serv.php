<?php

$servername = "localhost";
$username = "root";
$password = "Jam!46635";
$dbname = "EPIDatabase";

$connection = new mysql($servername, $username, $password, $dbname);
if($connection->connect_error) {
    die("conncetion failed: " . $connection->connect_error);
}

$sql = "SELECT part, result FROM partTest";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    echo "<table><tr><th>Part</th><th>Result</th></tr>";
    // output data of each row
    while($row = $result->fetch_assoc()) {
        echo "<tr><td>" . $row["part"]. "</td><td>" . $row["result"]. "</td> </tr>";
    }
    echo "</table>";
} else {
    echo "0 results";
}

$conn->close();
?>