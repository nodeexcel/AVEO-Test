-- AlterTable
ALTER TABLE "Post" ADD COLUMN     "createdDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
