interface Ticket {
    _id: string;
    client: string;
    issue: string;
    status: 'open' | 'closed';
    deadline: Date;
  }
  
export default Ticket;
  