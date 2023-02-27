/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Address` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Person` table. All the data in the column will be lost.
  - You are about to drop the column `updateAt` on the `Person` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Address" DROP COLUMN "createdAt",
DROP COLUMN "updateAt";

-- AlterTable
ALTER TABLE "Person" DROP COLUMN "createdAt",
DROP COLUMN "updateAt";
