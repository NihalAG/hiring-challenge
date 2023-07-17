import React, { useState, useEffect } from 'react';
import { Grid } from '@mui/material';
import Ticket from './models/Ticket';
import TicketList from './components/TicketList';
import TicketForm from './components/TicketForm';
import Header from './components/Header'
import { getAllTickets } from './api/ticketApi';
import styled from "styled-components";

const App: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);

  useEffect(() => {
    fetchTickets();
  }, []);
  
  const fetchTickets = async () => {
    try {
      const fetchedTickets = await getAllTickets();
      setTickets(fetchedTickets);
    } catch (error) {
      console.error('An error occurred while fetching tickets:', error);
    }
  };

  const handleTicketUpdated = async () => {
    await fetchTickets();
  };

  const AppWrapper = styled.div`
    padding: 45px 15px;
    border: 2px solid #d8d8d8;
    border-radius: 25px;
    margin: 30px 40px;
  `

  const TicketListWrapper = styled.div`
    max-height: 65vh;
    overflow-y: auto;
  `
  return (
    <AppWrapper>
      <Header />
      <TicketListWrapper>
        <TicketList tickets={tickets} onTicketUpdated={handleTicketUpdated} />
      </TicketListWrapper>
      <Grid container margin={2}>
        <Grid item xs={9} />
        <Grid item xs={2}>
          <TicketForm onTicketGenerated={handleTicketUpdated} />
        </Grid>
      </Grid>
    </AppWrapper>
  );
};

export default App;
