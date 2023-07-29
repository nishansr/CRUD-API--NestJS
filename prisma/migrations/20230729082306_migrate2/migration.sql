/*
  Warnings:

  - You are about to drop the column `taskNmae` on the `task` table. All the data in the column will be lost.
  - Added the required column `taskName` to the `Task` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `task` DROP COLUMN `taskNmae`,
    ADD COLUMN `taskName` VARCHAR(191) NOT NULL;
