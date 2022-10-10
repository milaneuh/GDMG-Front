import React from 'react';
import { Group, Box, Title } from '@mantine/core';


export default function BrandComponent() {

  return (
    <Box
      sx={(theme) => ({
        paddingTop: theme.spacing.xs,
        paddingLeft: theme.spacing.xs,
        paddingRight: theme.spacing.xs,
        paddingBottom: theme.spacing.lg,
        borderBottom: `1px solid ${
          theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
        }`,
      })}
    >
      <Group position="apart">
        <Title>GDMG Gestionnaire</Title>
      </Group>
    </Box>
  );
}