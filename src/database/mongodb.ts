import mongoose from 'mongoose';

/**
 * Establishes a connection to MongoDB using mongoose.
 *
 * @throws {Error} When MONGODB environment variable is not defined in .env
 *                 or if the connection fails
 * @returns A promise that resolves when the connection is established
 *
 * @remarks
 * Requires the MONGODB environment variable to be set with a valid MongoDB
 * connection string in the .env file
 */
export default async function connect() {
  try {
    await mongoose.connect(process.env.MONGODB || '');
  } catch (error) {
    throw new Error(
      'Please define the MONGODB environment variable inside .env. Error: ' +
        error
    );
  }
}
