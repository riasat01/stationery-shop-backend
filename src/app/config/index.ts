import dotenv from 'dotenv';
import path from 'path';

dotenv.config({ path: path.join(process.cwd(), '/.env') });

export const port = process.env.PORT;
export const dbUrl = process.env.DB_URL;
