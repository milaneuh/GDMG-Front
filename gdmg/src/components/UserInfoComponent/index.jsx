import React from 'react';
import { IconLogout} from '@tabler/icons';
import { UnstyledButton, Group, Avatar, Text, Box, useMantineTheme } from '@mantine/core';
import AuthService from '../../service/auth/authService';
import { useNavigate } from 'react-router-dom';

export function UserInfoComponent(props) {
  const theme = useMantineTheme();
  const session = AuthService.getCurrentUser();
  const navigate = useNavigate();

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
              {session.surname} {session.name}
            </Text>
            <Text color="dimmed" size="xs">
              {session.email}
            </Text>
          </Box>

          <UnstyledButton
            sx={{
                '&:hover': {
                    backgroundColor:
                    theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
                },
            }}
            onClick={() => {
              AuthService.logout();
              navigate("/");
            }}
          >
            <IconLogout size={18}/>
          </UnstyledButton>
        </Group>
       
      </Group>
    </Box>
  );
}