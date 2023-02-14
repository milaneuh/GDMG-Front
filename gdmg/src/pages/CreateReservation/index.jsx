import { Space } from '@mantine/core';
import {react} from 'react';
import AppShellComponent from '../../components/AppShellComponent';
import CreationReservationHeader from '../../components/CreationReservationHeaderComponent';
import CreationReservationComponent from '../../components/CréationReservationComponent';

function CreateReservation() {
    return ( 
        <AppShellComponent>
        <CreationReservationHeader/>
        <Space h='md'></Space>
        <CreationReservationComponent/>
        </AppShellComponent>
     ); 
}

export default CreateReservation;