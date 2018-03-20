-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 20, 2018 at 08:55 PM
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
-- Table structure for table `appareil`
--

CREATE TABLE IF NOT EXISTS `appareil` (
  `appareil_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `est_connecte` tinyint(1) DEFAULT NULL,
  `est_actif` tinyint(1) DEFAULT NULL,
  `piece_piece_id` int(11) NOT NULL,
  PRIMARY KEY (`appareil_id`,`piece_piece_id`),
  KEY `fk_appareil_piece1_idx` (`piece_piece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `badge`
--

CREATE TABLE IF NOT EXISTS `badge` (
  `niveau` int(11) NOT NULL,
  `nom` varchar(100) NOT NULL,
  PRIMARY KEY (`niveau`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `conso_appareil`
--

CREATE TABLE IF NOT EXISTS `conso_appareil` (
  `conso_appareil_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `valeur_conso` float DEFAULT NULL,
  `eq_euros` float DEFAULT NULL,
  `eq_carbone` float DEFAULT NULL,
  `appareil_appareil_id` int(11) NOT NULL,
  PRIMARY KEY (`conso_appareil_id`,`appareil_appareil_id`),
  KEY `fk_conso_appareil_appareil1_idx` (`appareil_appareil_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `conso_maison`
--

CREATE TABLE IF NOT EXISTS `conso_maison` (
  `conso_maison_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `valeur_conso` float DEFAULT NULL,
  `eq_euros` float DEFAULT NULL,
  `eq_carbone` float DEFAULT NULL,
  `maison_maison_id` int(11) NOT NULL,
  `maison_user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`conso_maison_id`,`maison_maison_id`,`maison_user_user_id`),
  KEY `fk_conso_maison_maison1_idx` (`maison_maison_id`,`maison_user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `conso_piece`
--

CREATE TABLE IF NOT EXISTS `conso_piece` (
  `conso_piece_id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime DEFAULT NULL,
  `valeur_conso` float DEFAULT NULL,
  `eq_euros` float DEFAULT NULL,
  `eq_carbone` float DEFAULT NULL,
  `piece_piece_id` int(11) NOT NULL,
  PRIMARY KEY (`conso_piece_id`,`piece_piece_id`),
  KEY `fk_conso_piece_piece1_idx` (`piece_piece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `coupon`
--

CREATE TABLE IF NOT EXISTS `coupon` (
  `coupon_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(100) DEFAULT NULL,
  `code` varchar(100) DEFAULT NULL,
  `description` longtext,
  `nb_points` int(11) DEFAULT NULL,
  `user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`coupon_id`,`user_user_id`),
  KEY `fk_coupon_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `evenement`
--

CREATE TABLE IF NOT EXISTS `evenement` (
  `evenement_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(150) DEFAULT NULL,
  `date_debut` datetime DEFAULT NULL,
  `date_fin` datetime DEFAULT NULL,
  `lieu` varchar(255) DEFAULT NULL,
  `description` longtext,
  `point_event` int(11) DEFAULT NULL,
  `badge_event` int(11) DEFAULT NULL,
  `user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`evenement_id`,`user_user_id`),
  KEY `fk_evenement_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `item`
--

CREATE TABLE IF NOT EXISTS `item` (
  `item_id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `categorie` varchar(150) DEFAULT NULL,
  `prix` float DEFAULT NULL,
  `description` longtext,
  `commentaire` longtext,
  `note` float DEFAULT NULL,
  `shop_shop_id` int(11) NOT NULL,
  `shop_user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`item_id`,`shop_shop_id`,`shop_user_user_id`),
  KEY `fk_item_shop1_idx` (`shop_shop_id`,`shop_user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `maison`
--

CREATE TABLE IF NOT EXISTS `maison` (
  `maison_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `compt_linky` int(11) DEFAULT NULL,
  `fournisseur` varchar(150) DEFAULT NULL,
  `contrat` varchar(255) DEFAULT NULL,
  `nb_habitants` int(11) DEFAULT NULL,
  `superficie` int(11) DEFAULT NULL,
  `volets_fermes` tinyint(1) DEFAULT NULL,
  `chauffage_reduit` tinyint(1) DEFAULT NULL,
  `voie` varchar(255) DEFAULT NULL,
  `immeuble` varchar(255) DEFAULT NULL,
  `bp` varchar(255) DEFAULT NULL,
  `cp` int(11) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `estPublique` tinyint(1) DEFAULT NULL,
  PRIMARY KEY (`maison_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piece`
--

CREATE TABLE IF NOT EXISTS `piece` (
  `piece_id` int(11) NOT NULL AUTO_INCREMENT,
  `temperature` int(11) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `maison_maison_id` int(11) NOT NULL,
  PRIMARY KEY (`piece_id`,`maison_maison_id`),
  KEY `fk_piece_maison1_idx` (`maison_maison_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `piece_has_type_piece`
--

CREATE TABLE IF NOT EXISTS `piece_has_type_piece` (
  `piece_piece_id` int(11) NOT NULL,
  `type_piece_type_piece_id` int(11) NOT NULL,
  PRIMARY KEY (`piece_piece_id`,`type_piece_type_piece_id`),
  KEY `fk_piece_has_type_piece_type_piece1_idx` (`type_piece_type_piece_id`),
  KEY `fk_piece_has_type_piece_piece1_idx` (`piece_piece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `scene`
--

CREATE TABLE IF NOT EXISTS `scene` (
  `scene_id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `icone` varchar(255) DEFAULT NULL,
  `user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`scene_id`,`user_user_id`),
  KEY `fk_scene_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `scene_has_piece`
--

CREATE TABLE IF NOT EXISTS `scene_has_piece` (
  `scene_scene_id` int(11) NOT NULL,
  `scene_user_user_id` int(11) NOT NULL,
  `piece_piece_id` int(11) NOT NULL,
  `piece_maison_maison_id` int(11) NOT NULL,
  PRIMARY KEY (`scene_scene_id`,`scene_user_user_id`,`piece_piece_id`,`piece_maison_maison_id`),
  KEY `fk_scene_has_piece_piece1_idx` (`piece_piece_id`,`piece_maison_maison_id`),
  KEY `fk_scene_has_piece_scene1_idx` (`scene_scene_id`,`scene_user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `shop`
--

CREATE TABLE IF NOT EXISTS `shop` (
  `shop_id` int(11) NOT NULL AUTO_INCREMENT,
  `nom` varchar(255) DEFAULT NULL,
  `voie` varchar(255) DEFAULT NULL,
  `cp` int(11) DEFAULT NULL,
  `ville` varchar(255) DEFAULT NULL,
  `site` varchar(255) DEFAULT NULL,
  `user_user_id` int(11) NOT NULL,
  PRIMARY KEY (`shop_id`,`user_user_id`),
  KEY `fk_shop_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `type_piece`
--

CREATE TABLE IF NOT EXISTS `type_piece` (
  `type_piece_id` int(11) NOT NULL AUTO_INCREMENT,
  `type_piece_nom` varchar(100) DEFAULT NULL,
  PRIMARY KEY (`type_piece_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

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
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=45 ;

--
-- Dumping data for table `user`
--

INSERT INTO `user` (`user_id`, `avatar`, `pseudo`, `email`, `password`, `salt`, `nom`, `prenom`, `date_creation`, `budget`, `longitude`, `latitude`, `point`, `point_niv`, `email_n`, `push`) VALUES
(1, NULL, 'ocenouille', 'test@test.com', 'test', NULL, 'teyre', 'Oceane', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(2, NULL, 'matt', 'matt@gmail.com', 'matt', NULL, 'Teyre', 'Matthieu', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(11, NULL, 'mm', 'bou@bou.fr', 'oh', NULL, 'cc', 'max', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(35, NULL, '', '', '', NULL, 'test', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(36, NULL, '', '', '', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(37, NULL, 'fff', 'ffhrshd', 'hdhdf', NULL, 'fffffhd', 'test', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(42, NULL, '', '', '', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(43, NULL, 'testes', 'ggd', 'gdgg', NULL, 'gdd', 'testtest', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL),
(44, NULL, '', '', '', NULL, '', '', NULL, NULL, NULL, NULL, NULL, NULL, NULL, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `user_has_badge`
--

CREATE TABLE IF NOT EXISTS `user_has_badge` (
  `user_user_id` int(11) NOT NULL,
  `badge_niveau` int(11) NOT NULL,
  PRIMARY KEY (`user_user_id`,`badge_niveau`),
  KEY `fk_user_has_badge_badge1_idx` (`badge_niveau`),
  KEY `fk_user_has_badge_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `user_has_maison`
--

CREATE TABLE IF NOT EXISTS `user_has_maison` (
  `user_user_id` int(11) NOT NULL,
  `maison_maison_id` int(11) NOT NULL,
  PRIMARY KEY (`user_user_id`,`maison_maison_id`),
  KEY `fk_user_has_maison_maison1_idx` (`maison_maison_id`),
  KEY `fk_user_has_maison_user1_idx` (`user_user_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `appareil`
--
ALTER TABLE `appareil`
  ADD CONSTRAINT `fk_appareil_piece1` FOREIGN KEY (`piece_piece_id`) REFERENCES `piece` (`piece_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `conso_appareil`
--
ALTER TABLE `conso_appareil`
  ADD CONSTRAINT `fk_conso_appareil_appareil1` FOREIGN KEY (`appareil_appareil_id`) REFERENCES `appareil` (`appareil_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `conso_maison`
--
ALTER TABLE `conso_maison`
  ADD CONSTRAINT `fk_conso_maison_maison1` FOREIGN KEY (`maison_maison_id`) REFERENCES `maison` (`maison_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `conso_piece`
--
ALTER TABLE `conso_piece`
  ADD CONSTRAINT `fk_conso_piece_piece1` FOREIGN KEY (`piece_piece_id`) REFERENCES `piece` (`piece_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `coupon`
--
ALTER TABLE `coupon`
  ADD CONSTRAINT `fk_coupon_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `evenement`
--
ALTER TABLE `evenement`
  ADD CONSTRAINT `fk_evenement_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `item`
--
ALTER TABLE `item`
  ADD CONSTRAINT `fk_item_shop1` FOREIGN KEY (`shop_shop_id`, `shop_user_user_id`) REFERENCES `shop` (`shop_id`, `user_user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `piece`
--
ALTER TABLE `piece`
  ADD CONSTRAINT `fk_piece_maison1` FOREIGN KEY (`maison_maison_id`) REFERENCES `maison` (`maison_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `piece_has_type_piece`
--
ALTER TABLE `piece_has_type_piece`
  ADD CONSTRAINT `fk_piece_has_type_piece_piece1` FOREIGN KEY (`piece_piece_id`) REFERENCES `piece` (`piece_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_piece_has_type_piece_type_piece1` FOREIGN KEY (`type_piece_type_piece_id`) REFERENCES `type_piece` (`type_piece_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `scene`
--
ALTER TABLE `scene`
  ADD CONSTRAINT `fk_scene_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `scene_has_piece`
--
ALTER TABLE `scene_has_piece`
  ADD CONSTRAINT `fk_scene_has_piece_piece1` FOREIGN KEY (`piece_piece_id`, `piece_maison_maison_id`) REFERENCES `piece` (`piece_id`, `maison_maison_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_scene_has_piece_scene1` FOREIGN KEY (`scene_scene_id`, `scene_user_user_id`) REFERENCES `scene` (`scene_id`, `user_user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `shop`
--
ALTER TABLE `shop`
  ADD CONSTRAINT `fk_shop_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_has_badge`
--
ALTER TABLE `user_has_badge`
  ADD CONSTRAINT `fk_user_has_badge_badge1` FOREIGN KEY (`badge_niveau`) REFERENCES `badge` (`niveau`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_has_badge_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `user_has_maison`
--
ALTER TABLE `user_has_maison`
  ADD CONSTRAINT `fk_user_has_maison_maison1` FOREIGN KEY (`maison_maison_id`) REFERENCES `maison` (`maison_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `fk_user_has_maison_user1` FOREIGN KEY (`user_user_id`) REFERENCES `user` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
