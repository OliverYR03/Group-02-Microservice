
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

create database mugiiwaras;

use mugiiwaras;

--
-- Table structure for table `categoria`
--

CREATE TABLE clientes(
idClientes INT NOT NULL AUTO_INCREMENT PRIMARY KEY PRIMARY KEY,
nombre VARCHAR(70),
direccion VARCHAR(70),
numero int,
correo VARCHAR(100),
tipoPago VARCHAR(30)
);

CREATE TABLE opiniones(
idOpinion INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
idPlato INT NOT NULL,
idCliente INT NOT NULL,
calificacion int,
comentario VARCHAR(160),
fecha VARCHAR(15)
);


INSERT INTO clientes (nombre, direccion, numero, correo, tipoPago) VALUES
('Juan Perez', 'Jirón Los Plateros 123, Rimac', 993456789, 'jperez@gmail.com', 'En efectivo'),
('Maria Rios', 'Av. El Sol 456, Cusco', 994567890, 'mrios@hotmail.com', 'Con tarjeta'),
('Pedro Alvarado', 'Calle Las Flores 789, Miraflores', 977654321, 'palvarado@gmail.com', 'Transferencia bancaria'),
('Luisa Gonzales', 'Jr. Lima 234, Trujillo', 998765432, 'lgonzales@yahoo.com', 'Con cheque'),
('Omar Sosa', 'Av. 28 de Julio 567, Lima', 966123456, 'ososa@hotmail.com', 'Con tarjeta');
	
 INSERT INTO opiniones (idPlato, idCliente, calificacion, comentario, fecha) VALUES
 ('3','1','5','Esta buenisima','25/04/03'),
 ('1','2','5','Feliz cum al tiktoker','27/04/03'),
 ('4','3','1','Nah Ramen goku está mejor','03/05/03'),
 ('2','4','3','Masomenos','01/05/03'),
 ('5','5','5','Esta buenisima','02/05/03');
 