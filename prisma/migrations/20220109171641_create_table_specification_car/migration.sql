-- CreateTable
CREATE TABLE "specificationsCars" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "carId" TEXT NOT NULL,
    "specificationId" TEXT NOT NULL,

    CONSTRAINT "specificationsCars_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "specificationsCars" ADD CONSTRAINT "specificationsCars_carId_fkey" FOREIGN KEY ("carId") REFERENCES "cars"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "specificationsCars" ADD CONSTRAINT "specificationsCars_specificationId_fkey" FOREIGN KEY ("specificationId") REFERENCES "specifications"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
