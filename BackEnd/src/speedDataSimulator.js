// Import Prisma Client to interact with the database
import { PrismaClient } from '@prisma/client';

// Initialize Prisma Client instance
const prisma = new PrismaClient();

// Starts the speed simulation process.
 
export function startSpeedSimulation(io) {
  // Set up a recurring task that runs every 1000 milliseconds (1 second)
  setInterval(async () => {
    // Generate a random speed between 0 and 119
    const speed = Math.floor(Math.random() * 120);

    // Save the generated speed as a new entry in the 'speedLog' table
    console.log("About to insert speed log:", speed);
    const entry = await prisma.speedLog.create({
      data: { speed }
    });

    // Log the generated speed and the database entry to the console
    console.log("Generated speed:", speed);
    console.log("Created DB entry:", entry);

    // Emit the new speed value to all connected clients via Socket.IO
    io.emit("speedUpdate", entry.speed);
  }, 1000); // Interval set to 1 second
}
