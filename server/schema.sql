-- CREATE DATABASE list;

USE list;

CREATE TABLE items (
  id int NOT NULL AUTO_INCREMENT,
  title varchar(200) NOT NULL,
  year int NOT NULL,
  runtime int,
  status varchar(200),
  poster varchar(200),
  vote float,
  watched boolean,
  PRIMARY KEY (ID)
);