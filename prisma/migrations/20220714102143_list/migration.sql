/*
  Warnings:

  - You are about to drop the column `tableId` on the `list_recipe` table. All the data in the column will be lost.
  - Added the required column `tableNo` to the `List_Recipe` table without a default value. This is not possible if the table is not empty.
  - Added the required column `processNo` to the `Process` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `list_recipe` DROP COLUMN `tableId`,
    ADD COLUMN `tableNo` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `process` ADD COLUMN `processNo` VARCHAR(191) NOT NULL;
