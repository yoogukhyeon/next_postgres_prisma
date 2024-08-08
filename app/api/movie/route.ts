import prisma from '@/lib/prisma';
import { NextResponse } from 'next/server';
export async function GET(request: Request) {
	try {
		const data = await prisma.template.findMany(); // template 모든 결과 가져오기
		return Response.json({ data }, { status: 200 });
	} catch (e) {
		return NextResponse.json({ message: 'fail' }, { status: 500 });
	}
}
