import React from 'react';
import { Grid } from '@mui/material';
import Ticket from '../models/Ticket';
import TicketItem from './TicketItem'

interface TicketListProps {
  tickets: Ticket[];
  onTicketUpdated: () => void;
}

const TicketList: React.FC<TicketListProps> = ({ tickets, onTicketUpdated }) => {
  return (
    <Grid container>
      {
        tickets.map((ticket, index) => (
          <>
            <Grid item xs={6} key={ticket._id}>
              <TicketItem ticket={ticket} onTicketUpdated={onTicketUpdated} index={index} />
            </Grid>
            <Grid item xs={6} />
          </>
        ))
      }
    </Grid>
  );
};

export default TicketList;
