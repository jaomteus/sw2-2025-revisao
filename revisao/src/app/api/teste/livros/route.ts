import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
    const livros = await prisma.Livros.findMany()
    return NextResponse.json(livros);
}