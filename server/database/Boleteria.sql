DROP DATABASE IF EXISTS Boleteria;
CREATE DATABASE Boleteria;
USE Boleteria;

CREATE TABLE Usuarios (
	ID_Usuario INT PRIMARY KEY AUTO_INCREMENT,
    Nombre NVARCHAR(25),
    Apellidos  NVARCHAR(50),
    PasHash NVARCHAR(250),
    Email NVARCHAR(50),
    Telefono NVARCHAR(20),
    Birth DATE,
    Imagen NVARCHAR(50)
);

CREATE TABLE Patrocinadores (
	ID_Patrocinador INT PRIMARY KEY AUTO_INCREMENT,
    ID_us INT,
    Cedula NVARCHAR(15),
    Ubicacion NVARCHAR(100),
    CONSTRAINT FK_Usuario_Patrocinador FOREIGN KEY (Id_us) REFERENCES Usuarios(ID_Usuario)
);

CREATE TABLE Eventos (
	ID_Evento INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(25),
    Tipo VARCHAR(25),    
    ID_patroncinador INT,
    Locacion NVARCHAR(200),
    Fecha_Evento DATETIME,
    Edad_Min INT,
    Descripcion NVARCHAR(250),
    Imagenes JSON,
    CONSTRAINT FK_Eventos_Patrocinador FOREIGN KEY (ID_patroncinador) REFERENCES Patrocinadores(Id_Patrocinador)
);
<<<<<<< HEAD


=======
>>>>>>> refs/remotes/origin/main

CREATE TABLE Categoria_Boletos (
	Id_categoria INT PRIMARY KEY AUTO_INCREMENT,
    ID_e INT,
    RangoA NVARCHAR(10),
    Nombre NVARCHAR(25),
    Stock INT,
    Precio FLOAT,
    CONSTRAINT FK_CategoriaB_Evento FOREIGN KEY (ID_e) REFERENCES Eventos(ID_Evento)
);

CREATE TABLE Boletos (
	ID_Boleto INT PRIMARY KEY AUTO_INCREMENT,
    ID_categoria INT,
    Estado NVARCHAR(20), /*Impreso o no*/
    Vendido BOOLEAN,
    ID_usuario INT,
    CONSTRAINT FK_Boletos_Usuarios FOREIGN KEY(ID_usuario) REFERENCES Usuarios (ID_Usuario),
    CONSTRAINT FK_Bolotos_Categoria FOREIGN KEY (id_categoria) REFERENCES Categoria_Boletos(Id_categoria)
);
<<<<<<< HEAD
insert into usuarios values 
('Juan Alberto', 'ubiere', '5', 'jhonmiguel.1@gmail.com',null,'C:/C.jpg');
Insert into Patrocinadores values (null, 1, '0001', 'Wachupita' );
Insert into Eventos values (null, 'Party parillada','Pool Pary',1,'Wualey','SD','28/6/2022',15,'pila de romo', "[{
Imagenes: ['h','d']
}]");
/*
CREATE TABLE Facturas (
=======

/*CREATE TABLE Facturas (
>>>>>>> refs/remotes/origin/main
	id_factura INT PRIMARY KEY AUTO_INCREMENT,
    id_usuario INT,
    tipo_pago NVARCHAR(50),
    cantidad INT,
    total FLOAT,
    
    CONSTRAINT fk_usuario FOREIGN KEY (id_usuario) REFERENCES Usuarios(id_usuario)
);

CREATE TABLE Detalles_Facturas (
	id_detalle INT PRIMARY KEY AUTO_INCREMENT,
    id_factura INT,
    id_boleto INT,
    
    CONSTRAINT fk_factura FOREIGN KEY (id_factura) REFERENCES Facturas(id_factura),
    CONSTRAINT fk_boleto FOREIGN KEY (id_boleto) REFERENCES Boletos(id_boleto)
);*/

INSERT INTO usuarios VALUES (null, 'Juan Alberto', 'ubiere', '5', 'jhonmiguel.1@gmail.com', null, null, 'C:/C.jpg');
INSERT INTO Patrocinadores VALUES (null, 1, '0001', 'Wachupita' );
INSERT INTO Eventos VALUES (null, 'Party parillada', 'Pool Pary', 4, 'Wualey', '2022/06/28', 15, 'pila de romo', '[{}]');