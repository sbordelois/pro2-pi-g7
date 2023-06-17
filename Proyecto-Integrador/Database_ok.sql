-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generaciÃ³n: 17-06-2023 a las 05:01:10
-- VersiÃ³n del servidor: 10.4.27-MariaDB
-- VersiÃ³n de PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `pro2pig7`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comentarios`
--
Drop schema pro2pig7;
Create schema pro2pig7;
USE pro2pig7;
CREATE TABLE `usuarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `nombre` varchar(20) NOT NULL,
  `email` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `foto_de_perfil` varchar(200) DEFAULT NULL,
  `dni` int(11) NOT NULL,
  `fecha_de_nacimiento` date NOT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `nombre`, `email`, `password`, `foto_de_perfil`, `dni`, `fecha_de_nacimiento`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 'lucas', 'lucas@gmail.com', '1234', NULL, 45201858, '0000-00-00', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(2, 'Yasmin', 'Yasmin@gmail.com', '4532', NULL, 12345676, '0000-00-00', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(3, 'Jazmin', 'Jazmin@gmail.com', '7890', NULL, 32123455, '0000-00-00', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(4, 'Julia', 'Julia@gmail.com', '3839', NULL, 1235533, '0000-00-00', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(5, 'Tomas', 'TomasH@gmail.com', '9876', NULL, 345675432, '0000-00-00', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(6, 'NElson', 'TasH@gmail.com', '9876', NULL, 356675432, '2004-03-31', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(7, 'simon', 'simon@gmail.com', '$2a$12$usdlNTI.bSIJU', NULL, 0, '0000-00-00', '2023-06-17 01:52:44', '2023-06-17 01:52:44', NULL);
CREATE TABLE `productos` (
  `id` int(10) UNSIGNED NOT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `productos`
--

INSERT INTO `productos` (`id`, `usuario_id`, `nombre`, `descripcion`, `created_at`, `updated_at`, `deleted_at`) VALUES
(1, 6, 'Vans Lx', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(2, 2, 'Adidas Samba', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(3, 3, 'Nike Air Max', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(4, 6, 'Converse CDG', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(5, 2, 'Nike Blazer', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(6, 1, 'Nike Air Jordan', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(7, 4, 'New Balancer 2002r', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(8, 3, 'Onitsuka Tiger Mexico 66', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(9, 4, 'Nike Cortez', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL),
(10, 5, 'Vieja V-12', 'zapatillas', '2023-06-16 23:35:59', '2023-06-16 23:35:59', NULL);

CREATE TABLE `comentarios` (
  `id` int(10) UNSIGNED NOT NULL,
  `productos_id` int(10) UNSIGNED DEFAULT NULL,
  `usuario_id` int(10) UNSIGNED DEFAULT NULL,
  `texto` text DEFAULT NULL,
  `created_at` timestamp NOT NULL DEFAULT current_timestamp(),
  `updated_at` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` timestamp NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `comentarios`
--

INSERT INTO `comentarios` (`id`, `productos_id`, `usuario_id`, `texto`, `created_at`, `updated_at`, `deleted_at`) VALUES
(4, 7, 2, 'Altas zapatillas', '2023-06-16 23:40:29', '2023-06-16 23:40:29', NULL),
(5, 7, 2, 'Altas zapatillas', '2023-06-16 23:40:53', '2023-06-16 23:40:53', NULL),
(6, 10, 3, 'que ganas de esas zapatillas', '2023-06-16 23:41:02', '2023-06-16 23:41:02', NULL),
(7, 7, 2, 'Altas zapatillas', '2023-06-16 23:41:39', '2023-06-16 23:41:39', NULL),
(8, 10, 3, 'que ganas de esas zapatillas', '2023-06-16 23:41:39', '2023-06-16 23:41:39', NULL),
(10, 5, 4, 'no me gustan estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(11, 9, 1, 'No me gusta este estilo de zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(12, 8, 2, 'El color no me gusta mucho', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(13, 9, 3, 'Amo estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(14, 9, 4, 'que buenas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(15, 6, 5, 'Estan buenas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(16, 8, 2, 'Buen color', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(17, 7, 3, 'Me gustan estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(18, 8, 5, 'no me gustan estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(19, 2, 1, 'buenas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(20, 10, 2, 'que buenas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(21, 10, 3, 'No banco estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(22, 5, 2, 'no me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(23, 4, 1, 'Me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(24, 6, 2, 'No me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(25, 9, 3, 'lindas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(26, 8, 4, 'estan buenas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(27, 2, 1, 'Buenas zapas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(28, 5, 2, 'me gustan mucho', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(29, 6, 3, 'no son mis favoritas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(30, 9, 4, 'me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(31, 7, 6, 'me encantan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(32, 3, 2, 'me gustan de este estilo', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(33, 6, 6, 'no me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(34, 4, 4, 'estan muy buenas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(35, 8, 1, 'uff que buenas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(36, 9, 2, 'no me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(37, 2, 3, 'las compraria', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(38, 6, 4, 'estan buenas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(39, 6, 6, 'que lindas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(40, 10, 3, 'no son mi estilo', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(41, 1, 6, 'estan buenas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(42, 2, 3, 'no me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(43, 10, 1, 'que buenas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(44, 10, 4, 'no me gustan', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(45, 1, 6, 'no son mi estilo', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL),
(46, 10, 6, 'me gustan estas zapatillas', '2023-06-16 23:43:44', '2023-06-16 23:43:44', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `productos`
--


-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--



--
-- Ãndices para tablas volcadas
--

--
-- Indices de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product2_id` (`productos_id`),
  ADD KEY `fk_usuario_id` (`usuario_id`);

--
-- Indices de la tabla `productos`
--
ALTER TABLE `productos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_product_id` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `dni` (`dni`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comentarios`
--
ALTER TABLE `comentarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=47;

--
-- AUTO_INCREMENT de la tabla `productos`
--
ALTER TABLE `productos`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comentarios`
--
ALTER TABLE `comentarios`
  ADD CONSTRAINT `fk_product2_id` FOREIGN KEY (`productos_id`) REFERENCES `productos` (`id`),
  ADD CONSTRAINT `fk_usuario_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);

--
-- Filtros para la tabla `productos`
--
ALTER TABLE `productos`
  ADD CONSTRAINT `fk_product_id` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
