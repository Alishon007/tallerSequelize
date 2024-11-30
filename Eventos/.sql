-- Crear la base de datos
CREATE DATABASE EventoBD;
USE EventoBD;

-- Crear la tabla Proyecto
CREATE TABLE Evento (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Descripcion TEXT NOT NULL,
    Fecha DATE NOT NULL,
    Hora TIME NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Capacidad INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(50) NOT NULL,
    Apellido VARCHAR(50) NOT NULL,
    Direccion VARCHAR(50) NOT NULL,
    Correo VARCHAR(50) NOT NULL,
    Telefono INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Inscripcion (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FechaInscripcion TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    EventoId INT,
    UsuarioId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (EventoId) REFERENCES Evento(id),
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(id)
);