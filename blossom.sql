-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 09-02-2026 a las 15:24:24
-- Versión del servidor: 10.4.28-MariaDB
-- Versión de PHP: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `blossom`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `characters`
--

CREATE TABLE `characters` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `status` varchar(255) DEFAULT NULL,
  `species` varchar(255) DEFAULT NULL,
  `gender` varchar(255) DEFAULT NULL,
  `origin` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `is_favorite` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL,
  `updatedAt` datetime NOT NULL,
  `comment` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `characters`
--

INSERT INTO `characters` (`id`, `name`, `status`, `species`, `gender`, `origin`, `image`, `is_favorite`, `createdAt`, `updatedAt`, `comment`) VALUES
(1, 'Rick Sanchez', 'Alive', 'Human', 'Male', 'Earth (C-137)', 'https://rickandmortyapi.com/api/character/avatar/1.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(2, 'Morty Smith', 'Alive', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/2.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(3, 'Summer Smith', 'Alive', 'Human', 'Female', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/3.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:20:24', NULL),
(4, 'Beth Smith', 'Alive', 'Human', 'Female', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/4.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(5, 'Jerry Smith', 'Alive', 'Human', 'Male', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/5.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:20:06', NULL),
(6, 'Abadango Cluster Princess', 'Alive', 'Alien', 'Female', 'Abadango', 'https://rickandmortyapi.com/api/character/avatar/6.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(7, 'Abradolf Lincler', 'unknown', 'Human', 'Male', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/7.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:20:25', NULL),
(8, 'Adjudicator Rick', 'Dead', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/8.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(9, 'Agency Director', 'Dead', 'Human', 'Male', 'Earth (Replacement Dimension)', 'https://rickandmortyapi.com/api/character/avatar/9.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(10, 'Alan Rails', 'Dead', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/10.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(11, 'Albert Einstein', 'Dead', 'Human', 'Male', 'Earth (C-137)', 'https://rickandmortyapi.com/api/character/avatar/11.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(12, 'Alexander', 'Dead', 'Human', 'Male', 'Earth (C-137)', 'https://rickandmortyapi.com/api/character/avatar/12.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(13, 'Alien Googah', 'unknown', 'Alien', 'unknown', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/13.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(14, 'Alien Morty', 'unknown', 'Alien', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/14.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(15, 'Alien Rick', 'unknown', 'Alien', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/15.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(16, 'Amish Cyborg', 'Dead', 'Alien', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/16.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(17, 'Annie', 'Alive', 'Human', 'Female', 'Earth (C-137)', 'https://rickandmortyapi.com/api/character/avatar/17.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(18, 'Antenna Morty', 'Alive', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/18.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(19, 'Antenna Rick', 'unknown', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/19.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL),
(20, 'Ants in my Eyes Johnson', 'unknown', 'Human', 'Male', 'unknown', 'https://rickandmortyapi.com/api/character/avatar/20.jpeg', 0, '2026-02-09 14:18:19', '2026-02-09 14:18:19', NULL);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('20260207215656-create-characters.cjs'),
('20260208160413-add-comment-to-characters.cjs');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `characters`
--
ALTER TABLE `characters`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `characters`
--
ALTER TABLE `characters`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
