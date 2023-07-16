import express, { Request } from "express";
import cors from "cors";
import mongoose from "mongoose";
import { MongoMemoryServer } from "mongodb-memory-server";
import ticketRoutes from './routes/ticketRoutes';

const start = async () => {
  try {
    // Creating the mongoDB memory server
    const mongoServer = await MongoMemoryServer.create();

    // Connecting to the mongoDB memory server using mongoose
    await mongoose.connect(mongoServer.getUri(), { dbName: "notificationsDB" });

    // Creating the express app
    const app = express();
    app.use(cors<Request>());
    app.use(express.json());

    app.use('/tickets', ticketRoutes);

    // Starting the server
    await new Promise<void>((resolve, reject) => {
      app.listen(8080, resolve).on("error", reject);
    });
    console.log(`Server started at http://localhost:8080`);
  } catch (error: unknown) {
    console.log(error);
    process.exit(1);
  }
};

process.on("beforeExit", async () => {
  await mongoose.disconnect();
  console.log("mongoose disconnected");
});

if (require.main === module) {
  start();
}

export { start };
