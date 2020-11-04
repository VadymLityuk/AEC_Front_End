-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Сен 18 2020 г., 01:22
-- Версия сервера: 8.0.18
-- Версия PHP: 7.3.11

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `projet_final`
--

-- --------------------------------------------------------

--
-- Структура таблицы `utilisateurs`
--

CREATE TABLE `utilisateurs` (
  `id` int(11) NOT NULL,
  `utilisateur` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `mot_de_passe` varchar(60) COLLATE utf8mb4_general_ci NOT NULL,
  `courriel` varchar(255) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `utilisateurs`
--

INSERT INTO `utilisateurs` (`id`, `utilisateur`, `mot_de_passe`, `courriel`) VALUES
(2, 'Admin', '$2y$10$MKZ0yq2wW4KPf1U72YKjVuzgIHAJrq4AjPzUCSwP.Xm9HA/VQUaW.', 'vadlityuk@gmail.com');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
