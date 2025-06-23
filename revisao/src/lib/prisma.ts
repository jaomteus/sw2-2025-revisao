import { PrismaClient } from "@prisma/client";

const prismaClientSingleTon = () => {
    return new PrismaClient();
}

declare const globalThis: {
    PrismaGlobal: ReturnType<typeof prismaClientSingleTon>;
} & typeof global;

export const prisma = globalThis.PrismaGlobal ?? prismaClientSingleTon();

if(process.env.NODE_ENV != "production") globalThis.PrismaGlobal = prisma;