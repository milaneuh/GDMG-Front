import React from 'react';
import { Stack,Text,Group, ScrollArea, Grid, Title, Container, Divider, Button, SimpleGrid, Box, Space } from '@mantine/core';
import { IconTrash,IconEdit } from '@tabler/icons';
import ExpendedClientInfoComponent from '../ExpendedClientInfoComponent';
import ExpendedResaInfoComponent from '../ExpendedResaInfoComponent';
function ExpandedRowComponent({children}) {
    return (  
        <Container px={0}>
        <Grid>
                <Grid.Col  span={4}>
                   <ExpendedResaInfoComponent children={children}/>
                </Grid.Col>
                <Grid.Col  span={6}>
                   <ExpendedClientInfoComponent children={children}/>
                </Grid.Col>
                <Grid.Col span={2}>
                <Space h='md'/>   

                <Group>
                   <Button leftIcon={<IconEdit size={14}/>} color={"blue"}>
                        Modifier
                    </Button>
                    <Button leftIcon={<IconTrash size={14}/>} color={"red"}>
                        Supprimer
                    </Button>
                   </Group>
                   
                </Grid.Col>
            </Grid>
        </Container>
      
    );
}

export default ExpandedRowComponent;