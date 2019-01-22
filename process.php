<?php

$mysqli = new mysqli('localhost', 'root', 'Jam46635', 'EPIDatabase' or die(mysqli_error($mysqli)));

if (isset($_POST['save'])){
    $name = $_POST['part'];
    $location = $_POST['result'];

    $mysqli->query("INSERT INTO partTest (part, result) VALUES('$part', '$result')") or
        die($mysqli->error);
}
