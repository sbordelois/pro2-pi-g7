CREATE SCHEMA `pro2pig7`;
USE `pro2pig7`;

CREATE TABLE usuarios (
     id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
     nombre VARCHAR(20) NOT NULL,
     email VARCHAR(20) NOT NULL UNIQUE,
     password VARCHAR(20) NOT NULL,
     foto_de_perfil VARCHAR(200),
     dni INT NOT NULL UNIQUE,
     fecha_de_nacimiento DATE NOT NULL,
     created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
     updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
     deleted_at TIMESTAMP NULL DEFAULT NULL
 );


 CREATE TABLE productos (
 id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
 usuario_id INT UNSIGNED,
 nombre VARCHAR(50) NOT NULL,
 descripcion TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 deleted_at TIMESTAMP NULL DEFAULT NULL,
 CONSTRAINT fk_product_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
 );

 CREATE SCHEMA `pro2pig7`;
 USE `pro2pig7`;

 CREATE TABLE comentarios (
 id INT UNSIGNED PRIMARY KEY NOT NULL AUTO_INCREMENT,
 productos_id INT UNSIGNED,
 usuario_id INT UNSIGNED,
 texto TEXT,
 created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
 updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
 deleted_at TIMESTAMP NULL DEFAULT NULL,
 CONSTRAINT fk_product2_id FOREIGN KEY (productos_id) REFERENCES productos(id),
 CONSTRAINT fk_usuario_id FOREIGN KEY (usuario_id) REFERENCES usuarios(id)
);


use `pro2pig7`;
insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
	values ("lucas", "lucas@gmail.com", "1234", 45201858, "04-11-2000");

use `pro2pig7`;
insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
	values ("Yasmin", "Yasmin@gmail.com", "4532", 12345676, "24-01-2003");

insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
	values ("Jazmin", "Jazmin@gmail.com", "7890", 32123455, "29-08-2001");
  
insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
	values ("Julia", "Julia@gmail.com", "3839", 1235533, "25-05-2003");
  
insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
 	values ("Tomas", "TomasH@gmail.com", "9876", 345675432, "30-03-2004");

insert into usuarios (nombre, email, password, dni, fecha_de_nacimiento)
	values ("NElson", "TasH@gmail.com", "9876", 356675432, "2004-03-31");



    
use `pro2pig7`;
insert into productos (usuario_id, nombre, descripcion)
	values (1, "Vans Lx", "zapatillas");

use `pro2pig7`;  
insert into productos (usuario_id, nombre, descripcion)
	values (2, "Adidas Samba", "zapatillas");

use `pro2pig7`;
insert into productos (usuario_id, nombre, descripcion)
	values (3, "Nike Air Max", "zapatillas");

use `pro2pig7`;   
insert into productos (usuario_id, nombre, descripcion)
	values (5, "Converse CDG", "zapatillas");

use `pro2pig7`;
insert into productos (usuario_id, nombre, descripcion)
	values (2, "Nike Blazer", "zapatillas");

use `pro2pig7`;
insert into productos (usuario_id, nombre, descripcion)
	values (1, "Nike Air Jordan", "zapatillas");

use `pro2pig7`;   
insert into productos (usuario_id, nombre, descripcion)
	values (4, "New Balancer 2002r", "zapatillas");

use `pro2pig7`;   
insert into productos (usuario_id, nombre, descripcion)
	values (3, "Onitsuka Tiger Mexico 66", "zapatillas");

use `pro2pig7`; 
insert into productos (usuario_id, nombre, descripcion)
	values (4, "Nike Cortez", "zapatillas");

use `pro2pig7`; 
insert into productos (usuario_id, nombre, descripcion)
	values (5, "Vieja V-12", "zapatillas");




    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (11, 1, "Que buenas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (7, 2, "Altas zapatillas");

use `pro2pig7`;    
insert into comentarios (productos_id, usuario_id, texto)
	values (10, 3, "que ganas de esas zapatillas");
    
use `pro2pig7`;    
insert into comentarios (productos_id, usuario_id, texto)
	values (11, 4, "no me gustan estas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (9, 1, "No me gusta este estilo de zapatillas");

use `pro2pig7`;    
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 2, "El color no me gusta mucho");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 3, "Amo estas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (9, 4, "que buenas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (14, 5, "Estan buenas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (8, 2, "Buen color");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (7, 3, "Me gustan estas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (8, 5, "no me gustan estas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (13, 1, "buenas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (12, 2, "que buenas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 3, "No banco estas zapatillas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (15, 2, "no me gustan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (14, 1, "Me gustan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 2, "No me gustan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (9, 3, "lindas zapatillas");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (8, 4, "estan buenas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (12, 1, "Buenas zapas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (15, 2, "me gustan mucho");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 3, "no son mis favoritas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (9, 4, "me gustan");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (7, 6, "me encantan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (13, 2, "me gustan de este estilo");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 6, "no me gustan");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (14, 4, "estan muy buenas");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (8, 1, "uff que buenas zapatillas");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (9, 2, "no me gustan");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (12, 3, "las compraria");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (16, 4, "estan buenas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (17, 6, "que lindas zapatillas");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (11, 3, "no son mi estilo");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (11, 6, "estan buenas");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (12, 3, "no me gustan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values(10, 1, "que buenas zapatillas");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (10, 4, "no me gustan");

use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (11, 6, "no son mi estilo");
    
use `pro2pig7`;
insert into comentarios (productos_id, usuario_id, texto)
	values (10, 6, "me gustan estas zapatillas");
    
    

    



