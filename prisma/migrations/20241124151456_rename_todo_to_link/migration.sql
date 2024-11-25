-- CreateTable
CREATE TABLE "Links" (
    "id" SERIAL NOT NULL,
    "long" VARCHAR(255) NOT NULL,
    "short" VARCHAR(20) NOT NULL,

    CONSTRAINT "Links_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Links_long_key" ON "Links"("long");

-- CreateIndex
CREATE UNIQUE INDEX "Links_short_key" ON "Links"("short");
