-- CreateTable
CREATE TABLE "SpeedLog" (
    "id" SERIAL NOT NULL,
    "speed" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "SpeedLog_pkey" PRIMARY KEY ("id")
);
