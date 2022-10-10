import React from 'react';
import { AppShell, Header} from '@mantine/core';
import NavBarComponent from '../NavBarComponent';
import BrandComponent from '../BrandComponent';


export default function AppShellComponent({children}) {

  return (
    <AppShell
      padding="md"
      fixed={false}
      navbar={
        <NavBarComponent />
      }
      header={
        <Header height={60}>
            <BrandComponent />
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        },
      })}
    >
        {children}
    </AppShell>
  );
}