

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


CREATE TABLE `auteur` (
  `id` int(11) NOT NULL,
  `nom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `prenom` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `pays` varchar(25) COLLATE utf8mb4_general_ci NOT NULL,
  `gender` varchar(25) COLLATE utf8mb4_general_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;


INSERT INTO `auteur` (`id`, `nom`, `prenom`, `pays`, `gender`) VALUES
(1, 'Joanne', 'Rowling', 'Angleterre', 'f'),
(2, 'Stephenie ', 'Meyer', 'EU', 'f'),
(3, 'Andrzej ', 'Sapkowski', 'Pologne', 'm'),
(4, 'Clive', 'Lewis', 'Angleterre', 'm'),
(5, 'John', 'Tolkien', 'Angleterre', 'm');

ALTER TABLE `auteur`
  ADD PRIMARY KEY (`id`);
ALTER TABLE `auteur`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
