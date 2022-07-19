/*
  Warnings:

  - You are about to drop the `_listtouser` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_recipetouser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE `_listtouser` DROP FOREIGN KEY `_ListToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_listtouser` DROP FOREIGN KEY `_ListToUser_B_fkey`;

-- DropForeignKey
ALTER TABLE `_recipetouser` DROP FOREIGN KEY `_RecipeToUser_A_fkey`;

-- DropForeignKey
ALTER TABLE `_recipetouser` DROP FOREIGN KEY `_RecipeToUser_B_fkey`;

-- DropTable
DROP TABLE `_listtouser`;

-- DropTable
DROP TABLE `_recipetouser`;

-- CreateTable
CREATE TABLE `User_Recipe` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `recipeId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User_List` (
    `id` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `listId` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `User_Recipe` ADD CONSTRAINT `User_Recipe_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_Recipe` ADD CONSTRAINT `User_Recipe_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_List` ADD CONSTRAINT `User_List_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_List` ADD CONSTRAINT `User_List_listId_fkey` FOREIGN KEY (`listId`) REFERENCES `List`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
