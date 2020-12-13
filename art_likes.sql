-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: Dec 13, 2020 at 02:03 AM
-- Server version: 10.1.48-MariaDB
-- PHP Version: 7.4.13

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `ziangz`
--

-- --------------------------------------------------------

--
-- Table structure for table `art_likes`
--

CREATE TABLE `art_likes` (
  `like_id` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `like_type` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `art_likes`
--

INSERT INTO `art_likes` (`like_id`, `art_id`, `user_id`, `like_type`) VALUES
(1, 1, 2, 0),
(2, 2, 2, 1),
(40, 28, 2, 1),
(58, 29, 67, 1),
(59, 29, 30, 1),
(60, 54, 30, 1),
(61, 55, 30, 1),
(62, 56, 2, 1);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `art_likes`
--
ALTER TABLE `art_likes`
  ADD PRIMARY KEY (`like_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `art_likes`
--
ALTER TABLE `art_likes`
  MODIFY `like_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=64;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
