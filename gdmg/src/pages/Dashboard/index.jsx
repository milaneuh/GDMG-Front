import { Box, Button, Title } from "@mantine/core";
import React from "react";
import AppShellComponent from "../../components/AppShellComponent";
import DataTableComponent from "../../components/DataTableComponent";
import { IconPlus } from '@tabler/icons';

function Dashboard() {
    return ( 
    
    <AppShellComponent>
        <Title>Vos réservations :</Title>
        
        <Box sx={{height : 600}}>
            <DataTableComponent/>
        </Box>
       
    </AppShellComponent>
    );
}

export default Dashboard;