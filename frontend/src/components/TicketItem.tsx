import React from 'react';
import Ticket from '../models/Ticket';
import { FormGroup, FormControlLabel, Switch, Grid } from '@mui/material';
import { RadioButtonChecked } from '@mui/icons-material';
import { updateTicketStatus } from '../api/ticketApi';
import dayjs from 'dayjs';
import styled from "styled-components";

interface TicketItemProps {
    ticket: Ticket;
    index: number;
    onTicketUpdated: () => void;
}

const TicketItemWrapper = styled.div`
    display: flex;
    background-color: #cee3f6;
    padding: 3%;
    border-radius: 25px;
    margin: 10px 0px;
`;

const TicketItemIssueWrapper = styled.div`
    background-color: #ffffff;
    color: #b9b9b9;
    border-radius: 25px;
    min-height: 100px;
    padding: 20px;
    margin-top: 5%;
`;

const TicketItemHeaderTextWrapper = styled.div`
    text-transform: uppercase;
    font-weight: bold;
    font-size: 18px;
    word-wrap: break-word;
`
const TicketItem: React.FC<TicketItemProps> = ( { ticket, onTicketUpdated, index }) => {

    const getStatusColor = (status: 'open' | 'closed', deadline: Date) => {
        const today = new Date();
        if (status === 'closed') {
          return 'green';
        } else if (status === 'open' && today < deadline) {
          return 'yellow';
        } else if (status === 'open' && today > deadline) {
          return 'red';
        }
        return 'inherit';
    };

    const handleStatusChange = async (id: string, status: 'open' | 'closed') => {
        try {
          await updateTicketStatus(id, status);
          onTicketUpdated();
        } catch (error) {
          console.error(`An error occurred while updating ticket ${id} status:`, error);
        }
    };

    return (
        <TicketItemWrapper>
            <Grid container>
                <Grid item xs={1}> <TicketItemHeaderTextWrapper> { index + 1 + '. ' } </TicketItemHeaderTextWrapper> </Grid>
                <Grid item xs={4}> <TicketItemHeaderTextWrapper> { ticket.client } </TicketItemHeaderTextWrapper> </Grid>
                <Grid item xs={4}> <TicketItemHeaderTextWrapper> { dayjs(ticket.deadline).format('DD/MM/YYYY') } </TicketItemHeaderTextWrapper> </Grid>
                <Grid item xs={2}>
                    <FormGroup>
                        <FormControlLabel 
                            label={''} 
                            control={
                            <Switch
                                size='small'
                                onChange={() => {
                                    handleStatusChange(ticket._id, ticket.status)
                                }}
                                defaultChecked={ticket.status === 'closed'}
                            />
                        } 
                        />
                    </FormGroup>
                </Grid>
                <Grid item xs={1}>
                    <RadioButtonChecked 
                        style={{ color: getStatusColor(ticket.status, new Date(ticket.deadline))}} 
                    />
                </Grid>
                <Grid item xs={12}> 
                    <TicketItemIssueWrapper>{ ticket.issue }</TicketItemIssueWrapper>
                </Grid>
            </Grid>
        </TicketItemWrapper>
    );
}

export default TicketItem;