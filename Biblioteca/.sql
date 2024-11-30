-- Crear la base de datos
CREATE DATABASE Biblioteca_bd;
USE Biblioteca_bd;

-- Crear la tabla Proyecto
CREATE TABLE Libro (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Titulo VARCHAR(100) NOT NULL,
    Autor VARCHAR(100) NOT NULL,
    Año INT NOT NULL,
    Disponibilidad BOOLEAN DEFAULT TRUE,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Usuario (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Nombre VARCHAR(100) NOT NULL,
    Direccion VARCHAR(100) NOT NULL,
    Telefono INT NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);
CREATE TABLE Prestamo (
    id INT AUTO_INCREMENT PRIMARY KEY,
    FechaPrestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FechaDevolucion TIMESTAMP,
    LibroId INT,
    UsuarioId INT,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (LibroId) REFERENCES Libro(id),
    FOREIGN KEY (UsuarioId) REFERENCES Usuario(id)
);