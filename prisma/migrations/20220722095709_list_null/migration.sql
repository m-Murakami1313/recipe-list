-- DropForeignKey
ALTER TABLE `list_recipe` DROP FOREIGN KEY `List_Recipe_recipeId_fkey`;

-- AlterTable
ALTER TABLE `list_recipe` MODIFY `recipeId` VARCHAR(191) NULL,
    MODIFY `tableNo` INTEGER NULL,
    MODIFY `dayOfWeek` VARCHAR(191) NULL;

-- AddForeignKey
ALTER TABLE `List_Recipe` ADD CONSTRAINT `List_Recipe_recipeId_fkey` FOREIGN KEY (`recipeId`) REFERENCES `Recipe`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
