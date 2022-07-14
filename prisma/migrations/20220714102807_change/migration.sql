/*
  Warnings:

  - You are about to alter the column `tableNo` on the `list_recipe` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.
  - You are about to alter the column `processNo` on the `process` table. The data in that column could be lost. The data in that column will be cast from `VarChar(191)` to `Int`.

*/
-- AlterTable
ALTER TABLE `list_recipe` MODIFY `tableNo` INTEGER NOT NULL;

-- AlterTable
ALTER TABLE `process` MODIFY `processNo` INTEGER NOT NULL;
