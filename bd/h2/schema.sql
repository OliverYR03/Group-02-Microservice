CREATE TABLE ordenes(
idOrden INT NOT NULL AUTO_INCREMENT PRIMARY KEY ,
idCliente INT NOT NULL,
fecha VARCHAR(15) NOT NULL,
idPlatos INT NOT NULL,
total INT
);
