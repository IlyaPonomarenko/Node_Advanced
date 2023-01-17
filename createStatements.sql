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
insert into employee values(1,'Matt','River','ict',5000); 

insert into employee values(id,firstname,lastname,department,salary)
values(2,'Mary','Jones','admin',7000);