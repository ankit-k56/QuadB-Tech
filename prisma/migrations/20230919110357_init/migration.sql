-- CreateTable
CREATE TABLE "Cryptos" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "last" TEXT NOT NULL,
    "buy" TEXT NOT NULL,
    "Sell" TEXT NOT NULL,
    "Volume" TEXT NOT NULL,
    "base_unit" TEXT NOT NULL,

    CONSTRAINT "Cryptos_pkey" PRIMARY KEY ("id")
);
