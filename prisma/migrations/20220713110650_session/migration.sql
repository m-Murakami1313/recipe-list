/*
  Warnings:

  - You are about to drop the column `userId` on the `user_list` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `user_recipe` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `user_list` DROP FOREIGN KEY `User_List_userId_fkey`;

-- DropForeignKey
ALTER TABLE `user_recipe` DROP FOREIGN KEY `User_Recipe_userId_fkey`;

-- AlterTable
ALTER TABLE `user_list` DROP COLUMN `userId`,
    ADD COLUMN `sessionId` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `user_recipe` DROP COLUMN `userId`,
    ADD COLUMN `sessionId` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `User_Recipe` ADD CONSTRAINT `User_Recipe_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User_List` ADD CONSTRAINT `User_List_sessionId_fkey` FOREIGN KEY (`sessionId`) REFERENCES `Session`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
