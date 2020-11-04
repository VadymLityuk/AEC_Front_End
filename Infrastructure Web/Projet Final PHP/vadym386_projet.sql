-- phpMyAdmin SQL Dump
-- version 4.9.5
-- https://www.phpmyadmin.net/
--
-- Хост: localhost:3306
-- Время создания: Сен 17 2020 г., 21:18
-- Версия сервера: 5.6.47
-- Версия PHP: 7.3.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `vadym386_projet`
--

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categorie` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `categorie`) VALUES
(1, 'Général'),
(2, 'Consignes'),
(3, 'Lorem ipsum');

-- --------------------------------------------------------

--
-- Структура таблицы `nouvelles`
--

CREATE TABLE `nouvelles` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) NOT NULL,
  `description_courte` varchar(125) NOT NULL,
  `description_longue` text NOT NULL,
  `date_nouvelle` date NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `fk_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `nouvelles`
--

INSERT INTO `nouvelles` (`id`, `titre`, `description_courte`, `description_longue`, `date_nouvelle`, `actif`, `fk_categorie`) VALUES
(1, 'Bon projet!', 'Voici maintenant le temps de participer à la réalisation du projet final!', 'Vous avez en main l\'ensemble des habiletés vous permettant de mener à bien le développement d\'une infrastructure Web. \r\n\r\nCe projet vous permettra de consolider vos acquis. \r\n\r\nBon projet!', '2020-08-27', 1, 1),
(2, 'Nouvelle inactive', 'Cette nouvelle est inactive et elle ne devrait pas s\'afficher sur le site!', 'Attention, assurez-vous de bien lire les consignes :)', '2020-08-28', 0, 1),
(3, 'Consignes du projet', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. ', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien en prendre connaissance. Lorsque vous croyez avoir terminé le projet, relisez chacune des consignes, et assurez-vous de la validité de votre remise. Prenez aussi un moment pour valider les critères d\'évaluation. \r\n\r\nLe projet doit être remis avant le dimanche 20 septembre à 23h59. ', '2020-08-25', 1, 2),
(4, 'Publication des critères d\'évaluation', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé.. ', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé, sur Google Classroom ainsi que dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien les comprendre et de vous assurer que le projet remis répond à ces critères. ', '2020-08-24', 1, 2),
(5, 'Lorem ipsum', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. ', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. \r\n\r\nElle devrait cependant s\'afficher lorsque l\'utilisateur clique sur \"Toutes les nouvelles\" ou \"Lorem ipsum\" dans le sous-menu des nouvelles. ', '2020-08-01', 1, 3);

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nouvelles_categorie` (`fk_categorie`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD CONSTRAINT `nouvelles_categorie` FOREIGN KEY (`fk_categorie`) REFERENCES `categories` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
