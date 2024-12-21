import { NextResponse } from 'next/server';
import Establishment from '@/models/Establishment';
import connect from '@/database/mongodb';

/**
 * Retrieves all establishment records from the database.
 *
 * @remarks
 * This is an API route handler for GET requests. It connects to the database
 * and fetches all establishment documents.
 *
 * @returns A NextResponse containing either:
 *  - Status 200 with an array of establishment documents
 *  - Status 500 with an error message if the operation fails
 *
 * @throws Will return a 500 response if database connection or query fails
 */
export async function GET() {
  try {
    await connect();

    const establishmentItems = await Establishment.find();
    return NextResponse.json(establishmentItems, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      {
        error: `Error fetching establishments: ${error}`,
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
