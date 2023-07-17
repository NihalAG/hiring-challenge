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
          <React.Fragment key={ticket._id}>
            <Grid item xs={6}>
              <TicketItem ticket={ticket} onTicketUpdated={onTicketUpdated} index={index} />
            </Grid>
            <Grid item xs={6} />
          </React.Fragment>
        ))
      }
    </Grid>
  );
};

export default TicketList;
