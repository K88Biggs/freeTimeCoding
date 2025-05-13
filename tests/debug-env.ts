// tests/debug-env.ts
import * as dotenv from 'dotenv';
dotenv.config();

console.log('EMAIL:', process.env.EMAIL);
console.log('PASSWORD:', process.env.PASSWORD);
