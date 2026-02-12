/**
 * Test script to verify password hashing and create test users
 * Run with: npx tsx scripts/test-password.ts
 */

import { hashPassword, verifyPassword } from '../src/lib/auth-db';

async function testPassword() {
  console.log('=== Password Hash Test ===\n');

  const actualPassword = '007117';
  const actualHash = '$2y$10$cezGj5q0ipoX8rBn7tIGSegBOh.Kx3LlUo9R8IondHQZxkMnwaUbW';

  // Test 1: Check if actual password matches the hash
  console.log(`Testing actual password "${actualPassword}" against database hash:`);
  const matches = await verifyPassword(actualPassword, actualHash);
  console.log(`Result: ${matches ? '✅ MATCH!' : '❌ NO MATCH'}\n`);

  // Test 2: Generate new hash for the actual password
  console.log(`\nGenerating NEW hash for password: "${actualPassword}"`);
  const newHash = await hashPassword(actualPassword);
  console.log(`Generated hash: ${newHash}\n`);

  // Test 3: Verify the new hash works
  console.log('Verifying new hash works:');
  const newHashWorks = await verifyPassword(actualPassword, newHash);
  console.log(`Result: ${newHashWorks ? '✅ WORKS!' : '❌ FAILED'}\n`);

  // Test 4: Show SQL update query
  console.log('=== SQL Update Query ===');
  console.log('To update the password in your database, run:\n');
  console.log(`UPDATE users SET password = '${newHash}' WHERE email = 'INTERTRONICA@GMAIL.COM';\n`);
  
  console.log('Or update using Laravel Tinker:');
  console.log(`$user = User::where('email', 'INTERTRONICA@GMAIL.COM')->first();`);
  console.log(`$user->password = '${actualPassword}';`);
  console.log(`$user->save();`);
}

testPassword().catch(console.error);
