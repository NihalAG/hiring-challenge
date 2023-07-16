import express, { Request, Response } from 'express';
import { Ticket } from '../models/Ticket';

const router = express.Router();

// GET /tickets endpoint
router.get('/', async (req: Request, res: Response) => {
  try {
    // Retrieve all tickets sorted by deadline desc
    const tickets = await Ticket.find().sort({ deadline: -1 });
    res.json(tickets);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// POST /tickets endpoint
router.post('/', async (req: Request, res: Response) => {
  try {
    // Create a new ticket
    const { client, issue, status, deadline } = req.body;
    const ticket = new Ticket({ client, issue, status, deadline });
    await ticket.save();
    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

// PUT /tickets/{id} endpoint
router.put('/:id', async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    let { status } = req.body;

    if(status === 'closed') {
      status = 'open';
    } else if ( status === 'open') {
      status = 'closed';
    }
    
    // Update the ticket
    const ticket = await Ticket.findByIdAndUpdate(
      id,
      { status },
      { new: true }
    );

    res.json(ticket);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred' });
  }
});

export default router;
