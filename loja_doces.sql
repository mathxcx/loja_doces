create database loja_doces;

use loja_doces;

create table categoria_doces(
id_categoria int primary key auto_increment,
nome_categoria varchar(45)
);


create table doces(
id_doce int primary key auto_increment,
nome_doce varchar(45),
foreign key (id_categoria) references categoria_doces(id_categoria)
);

-- Iniciando o CRUD-- 
-- INSERT é o create-- 

insert into categoria_doces (nome_categoria) values
("Bolos"),
("Tortas"),
("Doces Finos"),
("Doces Tradicionais")
;

-- SELECT READ--  
select * from categoria_doces;

-- Update é update --  
update categoria_doces set nome_categoria= "Doces Finos" where id_categoria = 3;

-- DELETE é delete-- 
delete from categoria_doces where id_categoria=3;

drop table categoria_doces;