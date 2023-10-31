import { PrismaClient } from "@prisma/client";

declare global {
  var cachedPrisma: PrismaClient | undefined;
}

let prisma: PrismaClient;

if (process.env.NODE_ENV === "production") {
  prisma = new PrismaClient();
} else {
  if (!global.cachedPrisma) {
    global.cachedPrisma = new PrismaClient();
  }
  prisma = global.cachedPrisma;
}

export const db = prisma;

// Function to disconnect Prisma
export const disconnect = async () => {
  if (global.cachedPrisma) {
    await global.cachedPrisma.$disconnect();
    console.log("Prisma is disconnected!");
  }
};
