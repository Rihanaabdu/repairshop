-- CreateEnum
CREATE TYPE "Status" AS ENUM ('Completed', 'Active', 'Pending');

-- CreateEnum
CREATE TYPE "ItemType" AS ENUM ('Phone', 'Laptop', 'TV', 'Camera', 'Desktop', 'Monitor', 'Other');

-- CreateTable
CREATE TABLE "Admin" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Staff" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,

    CONSTRAINT "Staff_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Item" (
    "id" SERIAL NOT NULL,
    "type" "ItemType" NOT NULL,
    "other" TEXT,
    "brand" TEXT NOT NULL,
    "model" TEXT,
    "status" "Status" NOT NULL DEFAULT 'Pending',
    "staff_id" INTEGER NOT NULL,

    CONSTRAINT "Item_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "Admin"("username");

-- CreateIndex
CREATE UNIQUE INDEX "Staff_username_key" ON "Staff"("username");

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_staff_id_fkey" FOREIGN KEY ("staff_id") REFERENCES "Staff"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
