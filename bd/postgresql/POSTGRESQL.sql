
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

--
-- Table structure for table `categoria`
--
CREATE DATABASE MUGIWARAS;


CREATE TABLE platos(
idPlato SERIAL NOT NULL ,
nombre VARCHAR(70) NOT NULL,
descripcion VARCHAR(70),
precio SMALLINT,
tipoPlato varchar(10),
imagen varchar(130),
	CONSTRAINT check_precio_length CHECK (precio >= 0 AND precio <= 999999999)
);

CREATE TABLE personal (
idPersonal SERIAL NOT NULL ,
nombre VARCHAR(40),
dni BIGINT,
cargo VARCHAR(20),
imagen VARCHAR(100),
	CONSTRAINT check_dni_length CHECK (dni >= 0 AND dni <= 999999999)
);



ALTER TABLE platos ADD CONSTRAINT idPlato PRIMARY KEY (idPlato);
ALTER TABLE personal ADD CONSTRAINT idPersonal PRIMARY KEY (idPersonal);



INSERT INTO personal (idPersonal, nombre, dni, cargo) VALUES 
(1, 'Juan', 12345678, 'Chef'),
(2, 'Maria', 87654321, 'Asistente'),
(3, 'Pedro', 13579024, 'Cajero'),
(4, 'Lucia', 24680135, 'Mesera'),
(5, 'Carlos', 36985214, 'Marketing'),
(6, 'Oliver', 76868182, 'Tik toker');

INSERT INTO platos (nombre, descripcion, precio, tipoPlato, imagen) VALUES
 ('Nigiri Sushi','Nigiris','25','sushi','https://acortar.link/gu3DFC'),
 ('Maki sushi','Makis','25','sushi','https://acortar.link/3wHGXp'),
 ('Uramaki sushi','Naruto','25','sushi','https://acortar.link/kVuVEf'),
 ('Temaki sushi','Sanji sushi','25','sushi','https://acortar.link/JRj28p'),
 ('Sashimi','Luffy sushi','25','sushi','https://acortar.link/Ou1JDe');

