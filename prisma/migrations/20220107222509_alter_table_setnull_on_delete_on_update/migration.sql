-- DropForeignKey
ALTER TABLE "cars" DROP CONSTRAINT "cars_categoryId_fkey";

-- AddForeignKey
ALTER TABLE "cars" ADD CONSTRAINT "cars_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "categories"("id") ON DELETE SET NULL ON UPDATE SET NULL;
