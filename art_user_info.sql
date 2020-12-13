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
-- Table structure for table `art_user_info`
--

CREATE TABLE `art_user_info` (
  `user_id` int(11) NOT NULL,
  `name` text NOT NULL,
  `email` text NOT NULL,
  `password` text NOT NULL,
  `user_type` varchar(15) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8;

--
-- Dumping data for table `art_user_info`
--

INSERT INTO `art_user_info` (`user_id`, `name`, `email`, `password`, `user_type`) VALUES
(1, 'John Doe', 'john@metropolia.fi', '$2a$10$H7bXhRqd68DjwFIVkw3G1OpfIdRWIRb735GvvzCBeuMhac/ZniGba', 'Admin'),
(2, 'Jane Doez', 'jane@metropolia.fi', '$2a$10$H7bXhRqd68DjwFIVkw3G1OpfIdRWIRb735GvvzCBeuMhac/ZniGba', ''),
(30, 'Max', 'max@metropolia.com', '$2a$10$pInMzwXGDJ9vHrQGaskXV.i8XiDlXdMik7FdBuPyJnrq/3BD6WODq', ''),
(31, 'Max', 'max@metropolia.com', '$2a$10$UFPs4OPpICpNNTcSmxOVe.cVb8TSKNWj5o7Gp/tlWgnyqH6Vmfd8m', ''),
(32, 'Max', 'max@metropolia.com', '$2a$10$rR6MLMzHN9W8QCXxasrpT.EBptqfFPsnysz1ybkubxPw6lEsnzIIO', ''),
(33, 'Max', 'max@metropolia.com', '$2a$10$3JskOOIicFI9wMY4.lpYZO8NYQd0.52Mpt4yN.hoVrNhmSFb7HYgK', ''),
(28, 'Torres', 'torres@qq.com', '$2a$10$EKq1ttCZX2rTJPg3sjeGdO4DmP0gwT9MLV52Urnk2a0kucSTzfwVK', ''),
(29, 'Torres', 'torres@qq.com', '$2a$10$VF5Zfta2JrHbjWWjK5PDGOYlbOZOPcChcIJusNVH0TAUHdSoHvM3O', ''),
(27, 'Torres', 'torres@qq.com', '$2a$10$shipDAsJFH51hLvMQBzbuuxCk3IoS4twsKyTK.ZkFETLVJLHJqtyq', ''),
(26, 'Torres', 'torres@qq.com', '$2a$10$3xHkdt0x.WZculvwARPPbOx1y4mTQc7G0OBvH.dZjsUq2GVcbjf3u', ''),
(34, 'Max', 'max@metropolia.com', '$2a$10$t8wPpNYuJ652yVqHnBM8s.KK2fmBMnBXYQVnGC.dC8j1cErgwT7uC', ''),
(35, 'Roman', 'rombeldan@gmail.com', '$2a$10$WSd7vCm1U28sz9dTuJNLvOtcQSmZjDAeYwDNDlrNv6UvI3nP7fHNS', ''),
(36, 'Roman', 'rombeldan@gmail.com', '$2a$10$zniAfnHoM8g5bH4Yh9dpNOPxlKQ12R0zE9YVKNNZv27/imZvNv2iu', ''),
(37, 'Roman', 'rombeldan@gmail.com', '$2a$10$zum5gcXD6ZTk3FNscVmb4utGxjE.SNqDUXyKKC0azvEAqJ7ZQGnQO', ''),
(38, 'Roman', 'rombeldan@gmail.com', '$2a$10$7hzhv7qtGvFOtf2qAJ5eEuYkSjVjjVysvrSVfWcWIx9lJjW2flBz.', ''),
(39, 'Roman', 'rombeldan@gmail.com', '$2a$10$2Il4ay1z3.1coW7kG2u7Uepa4o3SExDpj8oPpiA7qf5v0q8ysgUS.', ''),
(40, 'Roman', 'rombeldan@gmail.com', '$2a$10$x9uoLgEJS3zHDBaUisQYS.crwvgpVaKotasiWaGoTwxnQ3Jiai1qi', ''),
(41, 'Roman', 'rombeldan@gmail.com', '$2a$10$36gQuKw8HR8bvYaRFNSQ5e.dxDN1aDvSC1fd4PyqZbJTpHgXiuFJ2', ''),
(42, 'Roman', 'rombeldan@gmail.com', '$2a$10$QyhmonknrGRL1O8F0IgyTOJL6hZ1rGicgYsQdD7h3uSjQAiYxZzvu', ''),
(43, 'Roman', 'rombeldan@gmail.com', '$2a$10$9LEX375fy57HGtGRTqSeNeGAVnfjy02tde1l6OhAGSkHqkSkCUaDC', ''),
(44, 'Roman', 'rombeldan@gmail.com', '$2a$10$.21ksTopir6UqOGVbqV.A.JcbQ8.JL9fVeRXXJ94E1uDuQ3nXXEbu', ''),
(45, 'Roman', 'rombeldan@gmail.com', '$2a$10$QUb/5/EovgBHnfYlxsrvZOkKDtlZ7OraVauYuQeXP5PJflYXXp./m', ''),
(46, 'Roman', 'rombeldan@gmail.com', '$2a$10$FQxqSZt4SD.UGuh/4y1dVuaOZXIlEzjb.XPItiuw1sXa/jzztb66.', ''),
(47, 'Roman', 'rombeldan@gmail.com', '$2a$10$f7pr1vfgCWwZ.cWZM6188OgACM8mqXtNGXG9T1pP/326obkxi3Os2', ''),
(48, 'Roman', 'rombeldan@gmail.com', '$2a$10$6vfMNqzuI2cQ1fimXCTJr.yHYuESmMemzeQPnJIM4y4itRglAqiCm', ''),
(49, 'user1', 'user1@test.com', '$2a$10$C37GZYNvYRKDDbwezOeeM.c/F6V8J103i/x7YEdsRx2lKWzYui0Ym', ''),
(50, 'user1', 'user1@test.com', '$2a$10$v1B/jUwMGZFKjCyEXB2Ra.PwPplBYvDsWy8SEIBGQx4yVOfSDrAGe', ''),
(51, 'user1', 'user1@test.com', '$2a$10$MI45tisFjS0tsTjxQ/e4D.cTuN1juwTDKjzpSyJEf4BMdfIK8D2ma', ''),
(52, 'user1', 'user1@test.com', '$2a$10$59osYzgTYXdoBU1AvmSwe.yyG9E.I2RhPSkwag142bzn8S.7TJc7O', ''),
(53, 'newTester', 'testing@test.test', '$2a$10$SaPK4T7wKQq0iRF/igR54.8nD5/mTGcTyYME9Rasu0BmoUOVfVw0K', ''),
(54, 'newTester', 'testing@test.test', '$2a$10$hUZP38TPMYupt9i223//Leo2KhCirzPDD/eWx4mruaOXaT6LUcztG', ''),
(55, 'newTester', 'testing@test.test', '$2a$10$n/mDMerd.lWLM4x1P5rbmu7ilMATBMYWy9j8WRf/EBCIk71igTUNa', ''),
(56, 'ilkka', 'ilkka@test.fi', '$2a$10$deRCVt0/sJXDXxvqw/IF8uSX/ZW8C5QRfdR3txCfpQCvOKuuuvw3O', ''),
(57, 'Tester', 'testertt@gmail.com', '$2a$10$zPsKXZTtANf2dDOxaYTkvO4Idav4iPNrggE/nFv0qAgg5E.Vo1apK', ''),
(58, 'Tester', 'testertt@gmail.com', '$2a$10$epMawlTUuO5FsW11Mu6z6uJEb9LSazghxHWfKneE2Lzs.9hObY45u', ''),
(59, 'qqq', 'qqq@qq.com', '$2a$10$fOtOJY6TsR2g7wkJhW6B7e.aEIxC6vSHi7FsC0Gx0rGMcdiPjsFki', ''),
(60, 'qqq', 'qqq@qq.com', '$2a$10$yEJpP9dpiu3IaE1Ylj8HkuYpxtXuaaD810krSUowP1l8kKfXNUIDe', ''),
(61, 'qqq', 'qqq@qq.com', '$2a$10$lUo3AIttuSEucpZYkv7yC.EsgjKuP99JOXRmwmJtxhPHY7lBCuW1O', ''),
(62, 'Test111', 'test1@test.fi', '$2a$10$17HIsGo5m7dl3.XkQ7oW6eredvtsUDTxY69kADEpWixIog.IHW4pO', ''),
(63, 'qqq', 'qqq@qq.com', '$2a$10$7M2lMwUCfgryh6RG1GeTWOWS/kx895zJw2bmENKSreVO86AtkDTW6', ''),
(64, 'qqq', 'qqq@qq.com', '$2a$10$gF0lXhugZ8wEh6vG.APa0OOt4VcG8mzdChIl.O4vfZvSkyJyz9Ije', ''),
(65, 'qqq', 'qqq@qq.com', '$2a$10$jJ3IiGSj1ALzf0igBpz..OgQN698ZXcmCBcgrIHlZxOz1NGUpmkNm', ''),
(66, 'tbtester', 'tbtester@metropolia.fi', '$2a$10$E0MrWxOeHTV6ukYGZdNUpO5nbkwkoK4Bh823ejYXUw8aUsmz4AIem', ''),
(67, '123', 'try@tt.com', '$2a$10$JP.9VcNrJevR6XNUKxK2FebW8e6ILjMHwkU7z9W6fD43yvyHni0ZW', ''),
(68, '123', 'try@tt.com', '$2a$10$yCTzOTIKbt6KFSL6Hudvke8hPt3B0BPElKR7BLPd9YSfoNYMzuVJ.', ''),
(69, '123', 'try@tt.com', '$2a$10$sn844hSFeJVTLkCZtPbuk.2aHQEA31IeNZNggPgw33/3Kx5pQwnF2', ''),
(70, '123', 'try@tt.com', '$2a$10$zSd77AGvcvUgU..dQQMFAuH3A8Ikz.9Qy9Ztah7qdsQ4pkbBEI0Ky', ''),
(71, '123', 'try@tt.com', '$2a$10$0EDa0JfvLEo/a5Yu3PQFBebV8PXkjEucLnw/c5/1M179PITf5/bwG', '');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `art_user_info`
--
ALTER TABLE `art_user_info`
  ADD PRIMARY KEY (`user_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `art_user_info`
--
ALTER TABLE `art_user_info`
  MODIFY `user_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=72;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
