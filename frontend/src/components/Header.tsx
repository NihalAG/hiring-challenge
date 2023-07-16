import React from 'react';
import { CalendarMonth } from '@mui/icons-material';
import { Grid } from '@mui/material';
const Header: React.FC = () => {
    return (
        <Grid container>
            <span>
                <CalendarMonth 
                    style={{
                        color: '#1c486f'
                    }}/>
            </span>
            <span>
                <h3 style={{ marginTop: "0px", marginLeft: "15px" }}>Timeline</h3>
            </span>
        </Grid>
    )
}

export default Header;