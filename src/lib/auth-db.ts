import pool from './db';
import bcrypt from 'bcryptjs';

export interface User {
  id: number;
  email: string;
  password: string;
  username: string;
  role?: string;
}

/**
 * Get user by email from database
 */
export async function getUserByEmail(email: string): Promise<User | null> {
  try {
    const [rows] = await pool.query(
      'SELECT id, email, password, username FROM users WHERE email = ?',
      [email]
    );
    
    const users = rows as User[];
    
    if (users.length === 0) {
      return null;
    }
    
    return users[0];
  } catch (error) {
    console.error('[DB] Error fetching user:', error);
    throw new Error('Database error');
  }
}

/**
 * Verify password against hashed password
 */
export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  try {
    // PHP uses $2y$ but bcryptjs expects $2a$ or $2b$
    // Convert $2y$ to $2a$ for compatibility
    let normalizedHash = hashedPassword;
    if (hashedPassword.startsWith('$2y$')) {
      normalizedHash = hashedPassword.replace(/^\$2y\$/, '$2a$');
    }
    
    return await bcrypt.compare(password, normalizedHash);
  } catch (error) {
    console.error('[BCRYPT] Error verifying password:', error);
    return false;
  }
}

/**
 * Hash a password (for user creation/password reset)
 */
export async function hashPassword(password: string): Promise<string> {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
}
