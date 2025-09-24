-- Crear la base de datos si no existe
CREATE DATABASE IF NOT EXISTS hotel_db
  DEFAULT CHARACTER SET utf8mb4
  DEFAULT COLLATE utf8mb4_general_ci;

-- Usar la base
USE hotel_db;

/* -- Dar permisos al usuario root con la contraseña 1234
-- (Esto depende de tu instalación, pero en general root ya tiene todos los permisos.
-- Solo lo agrego para asegurar.)
ALTER USER 'root'@'localhost' IDENTIFIED BY '1234asdf';
 */

 -- Crear un usuario específico para este proyecto
CREATE USER IF NOT EXISTS 'hotel_user'@'localhost' IDENTIFIED BY 'Hotel123!';

-- Darle todos los privilegios sobre la base hotel_db
GRANT ALL PRIVILEGES ON hotel_db.* TO 'hotel_user'@'localhost';

-- Aplicar cambios
FLUSH PRIVILEGES;
