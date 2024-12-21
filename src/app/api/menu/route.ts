import { NextResponse } from 'next/server';
import Menu from '@/models/Menu';
import connect from '@/database/mongodb';

/**
 * Retrieves all menu items from the database.
 *
 * @remarks
 * This is an API route handler that connects to the database and fetches all menu items.
 *
 * @returns A NextResponse containing either:
 * - Status 200 with an array of menu items on success
 * - Status 500 with an error message if the database operation fails
 *
 * @throws Will return a 500 response if database connection or query fails
 */
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

/**
 * Handles HTTP POST requests.
 * 
 * @async
 * @returns A Promise that resolves with the response
 */
export async function POST() {}
