-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2018 at 08:07 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `homright`
--

-- --------------------------------------------------------

--
-- Table structure for table `user`
--

CREATE TABLE IF NOT EXISTS `user` (
  `user_id` int(11) NOT NULL AUTO_INCREMENT,
  `avatar` varchar(255) DEFAULT NULL,
  `pseudo` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(45) NOT NULL,
  `salt` varchar(255) DEFAULT NULL,
  `nom` varchar(150) NOT NULL,
  `prenom` varchar(150) NOT NULL,
  `date_creation` datetime DEFAULT NULL,
  `budget` float DEFAULT NULL,
  `longitude` float DEFAULT NULL,
  `latitude` float DEFAULT NULL,
  `point` int(11) DEFAULT NULL,
  `point_niv` int(11) DEFAULT NULL,
  `email_n` tinyint(1) DEFAULT NULL,
  `push` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`user_id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=42 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `avatar`, `pseudo`, `email`, `password`, `salt`, `nom`, `prenom`, `date_creation`, `budget`, `longitude`, `latitude`, `point`, `point_niv`, `email_n`, `push`) VALUES
(1, NULL, 'ocenouille', 'test@test.com', 'test', NULL, 'teyre', 'Oceane', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, 'matt', 'matt@gmail.com', 'matt', NULL, 'Teyre', 'Matthieu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, NULL, 'mm', 'bou@bou.fr', 'oh', NULL, 'cc', 'max', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, NULL, '', '', '', NULL, 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, NULL, '', '', '', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, NULL, 'fff', 'ffhrshd', 'hdhdf', NULL, 'fffffhd', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
