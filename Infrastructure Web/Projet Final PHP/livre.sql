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
-- Структура таблицы `livre`
--

CREATE TABLE `livre` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `genre` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `tirage` varchar(100) COLLATE utf8mb4_general_ci NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `livre`
--

INSERT INTO `livre` (`id`, `titre`, `genre`, `tirage`, `date`) VALUES
(1, 'Harry Potter', 'fantasie', '500 millions', '1997-06-26'),
(2, 'Twillight', 'novel', '130 millions', '2005-09-08'),
(3, 'The Witcher', 'fantasie', '90 millions', '1993-05-07'),
(4, 'The Chronicles of Narnia', 'fantasie', '125 millions', '1949-09-30'),
(5, 'Lord of The Rings', 'fantasie', '115 millions', '1954-06-29');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `livre`
--
ALTER TABLE `livre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
