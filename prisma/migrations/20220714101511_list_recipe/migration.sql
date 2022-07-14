/*
  Warnings:

  - You are about to drop the `user_list` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `user_recipe` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `tableId` to the `List_Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `user_list` DROP FOREIGN KEY `User_List_listId_fkey`;

-- DropForeignKey
ALTER TABLE `user_list` DROP FOREIGN KEY `User_List_sessionId_fkey`;

-- DropForeignKey
ALTER TABLE `user_recipe` DROP FOREIGN KEY `User_Recipe_recipeId_fkey`;

-- DropForeignKey
ALTER TABLE `user_recipe` DROP FOREIGN KEY `User_Recipe_sessionId_fkey`;

-- AlterTable
ALTER TABLE `ingredients` MODIFY `weight` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `list_recipe` ADD COLUMN `tableId` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `user_list`;

-- DropTable
DROP TABLE `user_recipe`;

-- CreateTable
CREATE TABLE `_RecipeToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_RecipeToUser_AB_unique`(`A`, `B`),
    INDEX `_RecipeToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `_ListToUser` (
    `A` VARCHAR(191) NOT NULL,
    `B` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `_ListToUser_AB_unique`(`A`, `B`),
    INDEX `_ListToUser_B_index`(`B`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `_RecipeToUser` ADD CONSTRAINT `_RecipeToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `Recipe`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_RecipeToUser` ADD CONSTRAINT `_RecipeToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ListToUser` ADD CONSTRAINT `_ListToUser_A_fkey` FOREIGN KEY (`A`) REFERENCES `List`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `_ListToUser` ADD CONSTRAINT `_ListToUser_B_fkey` FOREIGN KEY (`B`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
