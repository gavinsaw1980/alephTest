import {NextRequest, NextResponse} from "next/server";

export async function GET (req: NextRequest, { params }: { params: { slug: string } }){
    const slug = params.slug;
    const paramGreeting = req.nextUrl.searchParams.get('greeting')
    const greeting = `${paramGreeting || 'Hello'} ${slug}!!!`
    const json = {
        greeting
    };
    return NextResponse.json(json);
}