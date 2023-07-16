import axios from 'axios';
import Ticket from '../models/Ticket';

const BASE_URL = 'http://localhost:8080/tickets';

export async function getAllTickets(): Promise<Ticket[]> {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('An error occurred while fetching tickets:', error);
    throw error;
  }
}

export async function updateTicketStatus(id: string, status: 'open' | 'closed'): Promise<void> {
  try {
    await axios.put(`${BASE_URL}/${id}`, { status });
  } catch (error) {
    console.error(`An error occurred while updating ticket ${id} status:`, error);
    throw error;
  }
}

export async function createRandomTicket(): Promise<void> {
  try {
    const client = `Client ${Math.floor(Math.random() * 100)}`;
    const issue = `Issue ${Math.floor(Math.random() * 100)}`;
    const deadline = new Date(
      Date.now() + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 2) * 24 * 60 * 60 * 1000
    ).toISOString();

    const ticket = {
      client,
      issue,
      status: 'open',
      deadline,
    };

    await axios.post(BASE_URL, ticket);
  } catch (error) {
    console.error('An error occurred while creating a random ticket:', error);
    throw error;
  }
}
