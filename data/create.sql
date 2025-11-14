
create database robson4b;

use robson4b;

create table tb_usuario(
id_usuario int primary key auto_increment,
nome varchar(200),
email varchar(200),
senha varchar(200)
);

create table tb_admin (
  id_admin int primary key auto_increment,
  nome varchar(200),
  email varchar(200),
  senha varchar(200)
);


select * from tb_usuario;