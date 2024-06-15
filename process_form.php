<?php

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $servername = "localhost"; 
    $username = "nehalgarg";
    $password = "123456"; 
    $dbname = "nexus_info_db"; 

   
    $conn = new mysqli($servername, $username, $password, $dbname);


    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

 
    $stmt = $conn->prepare("INSERT INTO contact_messages (fullName, email, phoneNumber, address, message) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("sssss", $fullName, $email, $phoneNumber, $address, $message);

    
    $fullName = $_POST['fullName'];
    $email = $_POST['email'];
    $phoneNumber = $_POST['phoneNumber'];
    $address = $_POST['address'];
    $message = $_POST['message'];

    if ($stmt->execute()) {
        echo "Form submitted successfully.";
    } else {
        echo "Error: " . $stmt->error;
    }

   
    $stmt->close();
    $conn->close();
}
