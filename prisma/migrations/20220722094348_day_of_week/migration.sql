/*
  Warnings:

  - Added the required column `dayOfWeek` to the `List_Recipe` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `list_recipe` ADD COLUMN `dayOfWeek` VARCHAR(191) NOT NULL;
