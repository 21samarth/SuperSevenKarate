import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import Admin from './models/Admin.js';
import authRoutes from './routes/auth.js';
import contentRoutes from './routes/content.js';
import enquiryRoutes from './routes/enquiries.js';

const app = express();
let initialization;

export async function initializeDatabase() {
  if (mongoose.connection.readyState === 1) return;
  if (!process.env.MONGO_URI) throw new Error('MONGO_URI is required');

  initialization ||= (async () => {
    await mongoose.connect(process.env.MONGO_URI);
    if (process.env.ADMIN_EMAIL && process.env.ADMIN_PASSWORD) {
      const exists = await Admin.findOne({ email: process.env.ADMIN_EMAIL });
      if (!exists) {
        await Admin.create({
          email: process.env.ADMIN_EMAIL,
          passwordHash: await bcrypt.hash(process.env.ADMIN_PASSWORD, 12),
        });
        console.log(`Admin created: ${process.env.ADMIN_EMAIL}`);
      }
    }
  })().catch((error) => {
    initialization = undefined;
    throw error;
  });

  return initialization;
}

app.use(cors({ origin: process.env.CLIENT_URL?.split(',') || true }));
app.use(express.json({ limit: '2mb' }));
app.use(morgan('dev'));
app.use('/api', async (_req, _res, next) => {
  try {
    await initializeDatabase();
    next();
  } catch (error) {
    next(error);
  }
});

app.get('/api/health', (_req, res) => res.json({ ok: true, name: 'Super Seven API' }));
app.use('/api/auth', authRoutes);
app.use('/api/content', contentRoutes);
app.use('/api/enquiries', enquiryRoutes);
app.use((error, _req, res, _next) => {
  console.error(error);
  res.status(500).json({ message: 'Server configuration error' });
});

export default app;
