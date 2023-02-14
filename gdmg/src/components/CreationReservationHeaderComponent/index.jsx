import { UnstyledButton, Group,Text, Space } from '@mantine/core';
import {IconChevronLeft} from '@tabler/icons';
import { useNavigate } from 'react-router-dom';
function CreationReservationHeader() {
    const navigate = useNavigate();
    return ( 
        <Group>
            <UnstyledButton onClick={() => {navigate('/dashboard')}} >
                <Group>
                <IconChevronLeft size={16}/>
                <Text color={'blue'}>
                Retourner sur la page de visualisation
                </Text>
                </Group>
            </UnstyledButton>

        </Group>
     );
}

export default CreationReservationHeader;