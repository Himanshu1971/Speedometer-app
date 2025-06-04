// Import necessary modules
import express from 'express';
import { createServer } from 'http';
import { Server } from 'socket.io';
import cors from 'cors';
import { PrismaClient } from '@prisma/client';
import { startSpeedSimulation } from './speedDataSimulator.js';

// Initialize Prisma Client for database operations
const prisma = new PrismaClient();

// Initialize Express app and HTTP server
const app = express();
const server = createServer(app);

// Initialize Socket.IO server with CORS enabled for all origins
const io = new Server(server, { cors: { origin: "*" } });

// Enable CORS middleware for Express
app.use(cors());

// REST endpoint to retrieve the latest 10 speed logs from the database
app.get('/api/speed-logs', async (req, res) => {
  try {
    const logs = await prisma.speedLog.findMany({
      orderBy: { created_at: 'desc' }, // Order logs by most recent
      take: 10 // Limit results to the latest 10 entries
    });
    res.json(logs); // Send logs as JSON response
  } catch (error) {
    console.error('Error fetching speed logs:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// Listen for new WebSocket client connections
io.on('connection', (socket) => {
  console.log('Client connected');
  // You can add more event listeners here if needed
});

// Start the HTTP server on port 5000 and begin speed simulation
server.listen(5000,'0.0.0.0', () => {
  console.log('Server on port 5000');
  startSpeedSimulation(io); // Emit simulated speed data via Socket.IO
});
