--liquibase formatted sql

--changeset Meeli:20230502-1
-- create table for Pet entity
create table pet
(
    id        UUID DEFAULT RANDOM_UUID() PRIMARY KEY,
    name      VARCHAR(255) NOT NULL,
    code      BIGINT       NOT NULL,
    type      VARCHAR(255) NOT NULL,
    fur_colour VARCHAR(255) NOT NULL,
    country   VARCHAR(255) NOT NULL
);

--changeset Meeli:20230502-2
-- insert data into Pet table
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Borthos', '319610236', 'DOG', 'BLACK', 'LATVIA');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Luna', '567259036', 'CAT', 'WHITE', 'SWEDEN');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Pegasus', '901350673', 'HORSE', 'BROWN', 'ESTONIA');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Peter', '610120775', 'RABBIT', 'WHITE', 'NORWAY');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Dasha', '709145722', 'PARROT', 'BLUE', 'FINLAND');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Bella', '534186356', 'DOG', 'WHITE', 'SWEDEN');
INSERT INTO pet (name, code, type, fur_colour, country) VALUES ('Kitty', '781328896', 'CAT', 'YELLOW', 'ESTONIA');
