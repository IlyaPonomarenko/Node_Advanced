drop database if exists emlpoyeeDB;
create database emlpoyeeDB;
use emlpoyeeDB;
create table employee(
    id integer not null primary key,
    firstname varchar(20) not null,
    lastname varchar(30) not null,
    department varchar(15),
    salary decimal(6,2)
);