-- phpMyAdmin SQL Dump
-- version 4.9.1
-- https://www.phpmyadmin.net/
--
-- Хост: localhost
-- Время создания: Сен 18 2020 г., 02:45
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
-- Структура таблицы `auteur`
--

CREATE TABLE `auteur` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `gender` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `auteur`
--

INSERT INTO `auteur` (`id`, `nom`, `prenom`, `pays`, `gender`) VALUES
(1, 'Joanne', 'Rowling', 'Angleterre', 'f'),
(2, 'Stephenie ', 'Meyer', 'EU', 'f'),
(3, 'Andrzej ', 'Sapkowski', 'Pologne', 'm'),
(4, 'Clive', 'Lewis', 'Angleterre', 'm'),
(5, 'John', 'Tolkien', 'Angleterre', 'm');

-- --------------------------------------------------------

--
-- Структура таблицы `categories`
--

CREATE TABLE `categories` (
  `id` int(11) NOT NULL,
  `categorie` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `categories`
--

INSERT INTO `categories` (`id`, `categorie`) VALUES
(1, 'Général'),
(2, 'Consignes'),
(3, 'Lorem ipsum');

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

-- --------------------------------------------------------

--
-- Структура таблицы `nouvelles`
--

CREATE TABLE `nouvelles` (
  `id` int(11) NOT NULL,
  `titre` varchar(50) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description_courte` varchar(125) CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `description_longue` text CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci NOT NULL,
  `date_nouvelle` date NOT NULL,
  `actif` tinyint(1) NOT NULL,
  `fk_categorie` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Дамп данных таблицы `nouvelles`
--

INSERT INTO `nouvelles` (`id`, `titre`, `description_courte`, `description_longue`, `date_nouvelle`, `actif`, `fk_categorie`) VALUES
(1, 'Bon projet!', 'Voici maintenant le temps de participer à la réalisation du projet final!', 'Vous avez en main l\'ensemble des habiletés vous permettant de mener à bien le développement d\'une infrastructure Web. \r\n\r\nCe projet vous permettra de consolider vos acquis. \r\n\r\nBon projet!', '2020-08-27', 1, 1),
(2, 'Nouvelle inactive', 'Cette nouvelle est inactive et elle ne devrait pas s\'afficher sur le site!', 'Attention, assurez-vous de bien lire les consignes :)', '2020-08-28', 0, 1),
(3, 'Consignes du projet', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. ', 'L\'énoncé est publié sur Google Classroom ainsi que sur ce site dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien en prendre connaissance. Lorsque vous croyez avoir terminé le projet, relisez chacune des consignes, et assurez-vous de la validité de votre remise. Prenez aussi un moment pour valider les critères d\'évaluation. \r\n\r\nLe projet doit être remis avant le dimanche 20 septembre à 23h59. ', '2020-08-25', 1, 2),
(4, 'Publication des critères d\'évaluation', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé.. ', 'Les critères d\'évaluation sont disponibles à la fin de l\'énoncé, sur Google Classroom ainsi que dans la page \"Énoncé\" disponible dans le menu principal. \r\n\r\nAssurez-vous de bien les comprendre et de vous assurer que le projet remis répond à ces critères. ', '2020-08-24', 1, 2),
(5, 'Lorem ipsum', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. ', 'Cette nouvelle ne devrait pas s\'afficher dans la page principale car elle n\'est pas assez récente. \r\n\r\nElle devrait cependant s\'afficher lorsque l\'utilisateur clique sur \"Toutes les nouvelles\" ou \"Lorem ipsum\" dans le sous-menu des nouvelles. ', '2020-08-01', 1, 3);

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
-- Индексы таблицы `auteur`
--
ALTER TABLE `auteur`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `categories`
--
ALTER TABLE `categories`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `livre`
--
ALTER TABLE `livre`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD PRIMARY KEY (`id`),
  ADD KEY `nouvelles_categorie` (`fk_categorie`);

--
-- Индексы таблицы `utilisateurs`
--
ALTER TABLE `utilisateurs`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `auteur`
--
ALTER TABLE `auteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `categories`
--
ALTER TABLE `categories`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT для таблицы `livre`
--
ALTER TABLE `livre`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;

--
-- AUTO_INCREMENT для таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT для таблицы `utilisateurs`
--
ALTER TABLE `utilisateurs`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Ограничения внешнего ключа сохраненных таблиц
--

--
-- Ограничения внешнего ключа таблицы `nouvelles`
--
ALTER TABLE `nouvelles`
  ADD CONSTRAINT `nouvelles_categorie` FOREIGN KEY (`fk_categorie`) REFERENCES `categories` (`id`) ON DELETE RESTRICT ON UPDATE RESTRICT;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
