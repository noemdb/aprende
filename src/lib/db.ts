import mysql from 'mysql2/promise';

// Configuración para entorno Serverless (Lambda/Vercel)
// Se debe asegurar que la BD permita conexiones externas si no está en la misma VPC
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306'),
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
  // Opciones recomendadas para serverless para evitar mantener conexiones zombies
  enableKeepAlive: true,
  keepAliveInitialDelay: 0,
});

export default pool;
