-- DropForeignKey
ALTER TABLE "specificationsCars" DROP CONSTRAINT "specificationsCars_carId_fkey";

-- DropForeignKey
ALTER TABLE "specificationsCars" DROP CONSTRAINT "specificationsCars_specificationId_fkey";

-- AddForeignKey
ALTER TABLE "specificationsCars" ADD CONSTRAINT "specificationsCars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE SET NULL ON UPDATE SET NULL;

-- AddForeignKey
ALTER TABLE "specificationsCars" ADD CONSTRAINT "specificationsCars_specificationId_fkey" FOREIGN KEY ("specificationId") REFERENCES "specifications"("id") ON DELETE SET NULL ON UPDATE SET NULL;
