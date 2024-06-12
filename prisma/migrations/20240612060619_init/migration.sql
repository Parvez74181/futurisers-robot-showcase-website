-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `lastName` VARCHAR(191) NULL DEFAULT '',
    `firstName` VARCHAR(191) NULL DEFAULT '',
    `image` VARCHAR(191) NULL DEFAULT '',
    `username` VARCHAR(50) NULL DEFAULT 'user',
    `fullname` VARCHAR(50) NULL DEFAULT '',
    `email` VARCHAR(191) NOT NULL,
    `phone` VARCHAR(30) NULL DEFAULT '',
    `address` VARCHAR(200) NULL DEFAULT '',
    `district` VARCHAR(100) NULL DEFAULT '',
    `thana` VARCHAR(100) NULL DEFAULT '',
    `password` VARCHAR(150) NOT NULL,
    `dob` DATETIME(3) NULL,
    `gender` VARCHAR(10) NULL DEFAULT '',
    `verificationToken` VARCHAR(200) NULL DEFAULT '',
    `forgetPasswordToken` VARCHAR(200) NULL DEFAULT '',
    `verificationTokenExpiry` DATETIME(3) NULL,
    `forgetPasswordTokenExpiry` DATETIME(3) NULL,
    `isVerified` BOOLEAN NOT NULL DEFAULT false,
    `isActive` BOOLEAN NOT NULL DEFAULT true,
    `isStaff` BOOLEAN NOT NULL DEFAULT false,
    `dateJoined` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    UNIQUE INDEX `User_email_key`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
