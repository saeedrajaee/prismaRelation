/*
  Warnings:

  - You are about to drop the column `description` on the `GroupPost` table. All the data in the column will be lost.
  - Added the required column `discription` to the `GroupPost` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "GroupPost" DROP COLUMN "description",
ADD COLUMN     "discription" TEXT NOT NULL;
