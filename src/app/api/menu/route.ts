import { NextResponse } from 'next/server';
import Menu from '@/models/Menu';
import connect from '@/database/mongodb';

export async function GET() {
  try {
    await connect();

    const menuItems = await Menu.find();
    return NextResponse.json(menuItems, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error fetching menu: ${error}`,
      },
      { status: 500 }
    );
  }
}

export async function POST() {}
