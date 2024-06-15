CREATE DATABASE nexus_info_db;

USE nexus_info_db;

CREATE TABLE contact_messages (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phoneNumber VARCHAR(20) NOT NULL,
    address VARCHAR(255),
    message TEXT NOT NULL,
    submissionTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
