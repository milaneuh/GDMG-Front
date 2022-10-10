import React from 'react';
import { IconLogout} from '@tabler/icons';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';

export function UserInfoComponent(props) {
  const theme = useMantineTheme();

  return (
    <Box
      sx={{
        paddingTop: theme.spacing.sm,
        borderTop: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      }}
    >
    <Group
       sx={{
        width: '100%',
        display: 'block',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black
    }}>

  
        <Group>
          <Avatar
           radius="xl"
          />
          <Box sx={{ flex: 1 }}>
            <Text size="sm" weight={500}>
              Mock User
            </Text>
            <Text color="dimmed" size="xs">
              mock@gmail.com
            </Text>
          </Box>

          <UnstyledButton
            sx={{
                '&:hover': {
                    backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            }}
          >
            <IconLogout size={18}/>
          </UnstyledButton>
        </Group>
       
      </Group>
    </Box>
  );
}