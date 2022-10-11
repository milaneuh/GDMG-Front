import React,{useState} from 'react';
import { AppShell, Header,MediaQuery,Burger, useMantineTheme} from '@mantine/core';
import NavBarComponent from '../NavBarComponent';
import BrandComponent from '../BrandComponent';


export default function AppShellComponent({children}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      }}
      padding="md"
      fixed={false}
      navbarOffsetBreakpoint="sm"
      navbar={
        <NavBarComponent opened={opened} />
      }
      header={
        <Header height={70} p="md">
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <BrandComponent/>
          </div>
        </Header>
      }
    >
        {children}
    </AppShell>
  );
}