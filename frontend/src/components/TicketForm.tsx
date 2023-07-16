import React, { useState } from 'react';
import { Button } from '@mui/material';
import { createRandomTicket } from '../api/ticketApi';

interface TicketFormProps {
  onTicketGenerated: () => void;
}

const TicketForm: React.FC<TicketFormProps> = ({ onTicketGenerated }) => {
  const [loading, setLoading] = useState(false);

  const generateRandomTicket = async () => {
    setLoading(true);
    try {
      createRandomTicket();
      onTicketGenerated();
    } catch (error) {
      console.error('An error occurred while generating a random ticket:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button variant="contained" disabled={loading} onClick={generateRandomTicket}>
      {loading ? 'Generating...' : 'Create Randomly'}
    </Button>
  );
};

export default TicketForm;
