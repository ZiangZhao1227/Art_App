-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: Dec 13, 2020 at 02:02 AM
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
-- Table structure for table `art_gallery`
--

CREATE TABLE `art_gallery` (
  `art_id` int(11) NOT NULL,
  `description` text NOT NULL,
  `owner` int(11) NOT NULL,
  `filename` text NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `art_gallery`
--

INSERT INTO `art_gallery` (`art_id`, `description`, `owner`, `filename`) VALUES
(29, 'torres test', 28, '849369fc742d0c1543b60598941c8904'),
(28, 'art test', 2, 'a9e20cf27a09bdef2e1dc7f2ff9d6b0b'),
(56, 'asda', 2, '510f699a063ab3ef1001fb3c6d66ef16');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `art_gallery`
--
ALTER TABLE `art_gallery`
  ADD PRIMARY KEY (`art_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `art_gallery`
--
ALTER TABLE `art_gallery`
  MODIFY `art_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=57;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
