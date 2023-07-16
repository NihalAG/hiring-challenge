import mongoose, { Schema } from 'mongoose';

// Define the ticket interface
export interface ITicket {
  client: string;
  issue: string;
  status: 'open' | 'closed';
  deadline: Date;
}

// Create the ticket schema
const ticketSchema = new Schema<ITicket>({
  client: { type: String, required: true },
  issue: { type: String, required: true },
  status: { type: String, enum: ['open', 'closed'], required: true },
  deadline: { type: Date, required: true },
});

// Create the ticket model
export const Ticket = mongoose.model<ITicket>('Ticket', ticketSchema);
