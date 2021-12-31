/*
  Warnings:

  - A unique constraint covering the columns `[name]` on the table `specifications` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "specifications_name_key" ON "specifications"("name");
