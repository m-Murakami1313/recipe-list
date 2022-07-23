/*
  Warnings:

  - Made the column `recipeId` on table `list_recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tableNo` on table `list_recipe` required. This step will fail if there are existing NULL values in that column.
  - Made the column `dayOfWeek` on table `list_recipe` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE `list_recipe` DROP FOREIGN KEY `List_Recipe_recipeId_fkey`;

-- AlterTable
ALTER TABLE `list_recipe` MODIFY `recipeId` VARCHAR(191) NOT NULL,
    MODIFY `tableNo` INTEGER NOT NULL,
    MODIFY `dayOfWeek` VARCHAR(191) NOT NULL;

-- AddForeignKey
ALTER TABLE `List_Recipe` ADD CONSTRAINT `List_Recipe_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
