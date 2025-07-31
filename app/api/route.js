import { NextResponse } from "next/server";

export async function GET(req) {
    return NextResponse.json({ time: new Date().toLocaleString() })
}


//mongodb+srv://gu1lh3rmesv:<BobEsponja>@cluster0.uanfodt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0