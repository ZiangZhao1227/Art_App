-- phpMyAdmin SQL Dump
-- version 5.0.4
-- https://www.phpmyadmin.net/
--
-- Host: mysql.metropolia.fi
-- Generation Time: Dec 13, 2020 at 02:01 AM
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
-- Table structure for table `art_comment`
--

CREATE TABLE `art_comment` (
  `com_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `art_id` int(11) NOT NULL,
  `comment` text NOT NULL,
  `com_type` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `art_comment`
--

INSERT INTO `art_comment` (`com_id`, `user_id`, `art_id`, `comment`, `com_type`) VALUES
(1, 2, 2, 'first comment', 2),
(2, 2, 10, 'second comment', 2),
(3, 2, 16, 'test3', 2),
(4, 2, 10, 'test4', 2),
(5, 2, 10, 'test5', 2),
(6, 2, 2, 'test6', 2),
(7, 2, 1, 'test7', 2),
(8, 2, 2, 'test8', 2),
(9, 2, 24, 'Wow,Nice', 0),
(10, 2, 2, 'Nice', 0),
(11, 2, 12, 'so pretty', 0),
(12, 2, 12, 'so pretty', 0),
(13, 2, 12, 'so pretty', 0),
(14, 2, 1, 'so pretty', 0),
(15, 2, 1, 'so pretty', 0),
(16, 2, 1, 'so pretty', 0),
(17, 2, 1, 'so pretty', 0),
(18, 2, 1, 'so pretty', 0),
(19, 2, 1, 'so pretty', 0),
(20, 2, 1, 'so pretty', 0),
(21, 2, 1, 'so pretty', 0),
(22, 2, 2, 'so pretty', 0),
(23, 2, 2, 'so pretty', 0),
(24, 2, 2, 'so pretty', 0),
(25, 2, 2, 'so pretty', 0),
(26, 2, 2, 'so pretty', 0),
(27, 2, 2, 'so pretty', 0),
(28, 2, 2, 'so pretty', 0),
(29, 2, 24, 'so pretty', 0),
(30, 2, 24, 'so pretty', 0),
(31, 2, 24, 'so pretty', 0),
(32, 2, 24, 'so pretty', 0),
(33, 2, 24, 'so pretty', 0),
(34, 2, 24, 'so pretty', 0),
(35, 2, 24, 'so pretty', 0),
(36, 2, 24, 'so pretty', 0),
(37, 2, 24, 'so pretty', 0),
(38, 2, 24, 'so pretty', 0),
(39, 2, 24, 'good', 0),
(40, 2, 24, 'good', 0),
(41, 2, 24, 'good', 0),
(42, 2, 24, 'good', 0),
(43, 2, 24, 'good', 0),
(44, 2, 1, 'good', 0),
(45, 2, 1, 'good2', 0),
(46, 2, 27, 'nice', 0),
(47, 2, 27, 'nice', 0),
(48, 2, 27, 'km', 0),
(49, 2, 27, 'km', 0),
(50, 2, 27, 'km', 0),
(51, 2, 27, 'km', 0),
(52, 2, 12, 'test', 0),
(53, 2, 12, 'jojijoijioj', 0),
(54, 2, 1, 'test', 0),
(55, 2, 1, 'nijijijij', 0),
(56, 2, 1, 'nijijijij', 0),
(57, 2, 1, 'nijijijij', 0),
(58, 2, 1, 'nijijijij', 0),
(59, 2, 1, 'nijijijij', 0),
(60, 2, 1, 'nijijijij', 0),
(61, 2, 1, 'nijijijij', 0),
(62, 2, 1, 'nijijijij', 0),
(63, 2, 1, 'popopopop', 0),
(64, 2, 1, 'popopopop', 0),
(65, 2, 1, 'popopopop', 0),
(66, 2, 1, 'popopopop', 0),
(67, 2, 1, 'popopopop', 0),
(68, 2, 1, 'popopopop', 0),
(69, 2, 1, 'popopopop', 0),
(70, 2, 1, 'popopopop', 0),
(71, 2, 1, 'popopopop', 0),
(72, 2, 1, 'popopopop', 0),
(73, 2, 1, 'popopopop', 0),
(74, 2, 1, 'popopopop', 0),
(75, 2, 1, 'popopopop', 0),
(76, 2, 1, 'popopopop', 0),
(77, 2, 1, 'popopopop', 0),
(78, 2, 1, 'popopopop', 0),
(79, 2, 1, 'popopopop', 0),
(80, 2, 1, 'popopopop', 0),
(81, 2, 1, 'popopopop', 0),
(82, 2, 27, 'try', 0),
(83, 2, 27, 'try', 0),
(84, 2, 1, 'pop', 0),
(85, 2, 1, 'p', 0),
(86, 2, 2, 'd', 0),
(87, 2, 12, 'df', 0),
(88, 28, 29, 'How nice', 0),
(89, 2, 12, '666', 0),
(90, 2, 12, '666', 0),
(91, 2, 12, '666', 0),
(92, 2, 12, '666', 0),
(93, 2, 12, '444', 0),
(94, 2, 12, '444', 0),
(95, 2, 12, '444', 0),
(96, 2, 12, '444', 0),
(97, 2, 12, '444', 0),
(98, 2, 12, '444', 0),
(99, 2, 12, '222', 0),
(100, 2, 12, '222', 0),
(101, 2, 12, 'df', 0),
(102, 2, 12, 'dfdf', 0),
(103, 2, 12, 'sdfdsfs', 0),
(104, 2, 12, 'sdsdsdsdsdsd', 0),
(105, 2, 12, 'kjoi', 0),
(106, 2, 12, 'kjoi', 0),
(107, 2, 12, 'kjoiffd', 0),
(108, 2, 1, 'fdffd', 0),
(109, 2, 2, 'oo', 0),
(110, 2, 2, 'oo', 0),
(111, 30, 28, 'pp', 0),
(112, 30, 28, 'ppp', 0),
(113, 30, 28, 'ppp', 0),
(114, 30, 28, 'ppp', 0),
(115, 30, 28, 'ppp', 0),
(116, 30, 28, 'ppp', 0),
(117, 30, 28, 'ppp', 0),
(118, 30, 28, 'ppp', 0),
(119, 30, 28, 'ppp', 0),
(120, 30, 2, 'ppp', 0),
(121, 2, 2, 'dfsdfsdf', 0),
(122, 2, 1, 'df', 0),
(123, 2, 1, 'jij', 0),
(124, 2, 1, 'jij', 0),
(125, 2, 1, 'jij', 0),
(126, 2, 1, 'jij', 0),
(127, 2, 1, 'jij', 0),
(128, 2, 1, 'jij', 0),
(129, 2, 1, 'jij', 0),
(130, 2, 1, 'jij', 0),
(131, 2, 1, 'jij', 0),
(132, 2, 29, 'how nice', 0),
(133, 2, 29, 'how nice test 2', 0),
(134, 2, 2, 'gg', 0),
(135, 2, 2, 'gg', 0),
(136, 2, 2, 'gg', 0),
(137, 2, 2, 'gg', 0),
(138, 2, 2, 'gg', 0),
(139, 2, 2, 'gg', 0),
(140, 2, 2, '0', 0),
(141, 2, 29, 'how great', 0),
(142, 2, 29, 'how great', 0),
(143, 2, 29, 'how great', 0),
(144, 2, 29, 'how great', 0),
(145, 2, 28, 'how nice test 2', 0),
(146, 2, 12, 'ki', 0),
(147, 2, 12, 'ki', 0),
(148, 2, 12, 'ki', 0),
(149, 2, 1, 'how nice', 0),
(150, 2, 28, '666', 0),
(151, 2, 1, 'great pic', 0),
(152, 35, 43, 'salam', 0),
(153, 35, 43, 'more', 0),
(154, 35, 43, 'hello', 0),
(155, 35, 29, 'amazing', 0),
(156, 35, 43, 'amazing', 0),
(157, 35, 28, 'dog...', 0),
(158, 35, 44, 'whaaaaaaaat?\n', 0),
(159, 2, 44, 'how nice', 0),
(160, 2, 44, 'how nice', 0),
(161, 2, 44, 'how nice', 0),
(162, 2, 44, 'how nice', 0),
(163, 2, 49, 'how nice', 0),
(164, 35, 53, 'WOW', 0),
(165, 30, 53, '))', 0),
(166, 30, 28, '))', 0),
(167, 56, 54, 'Upload modal wont go away', 0),
(168, 56, 54, 'Comment modal wont go away', 0),
(169, 2, 28, 'how nice', 0),
(170, 2, 28, '0', 0),
(171, 2, 29, '0', 0),
(172, 2, 53, '0', 0),
(173, 67, 29, '98', 0),
(174, 30, 56, 'how nice', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `art_comment`
--
ALTER TABLE `art_comment`
  ADD PRIMARY KEY (`com_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `art_comment`
--
ALTER TABLE `art_comment`
  MODIFY `com_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=175;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
