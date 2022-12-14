import { Navbar} from '@mantine/core';
import { LinkComponent } from '../LinkComponent';
import { UserInfoComponent } from '../UserInfoComponent';

function NavBarComponent(props) {
  return (
    <Navbar  p="md" hiddenBreakpoint="sm"  hidden={!props.opened} width={{ sm: 200, lg: 300 }}>
        <Navbar.Section grow mt="md">
            <LinkComponent/>
        </Navbar.Section>
        <Navbar.Section>
            <UserInfoComponent />
        </Navbar.Section>
    </Navbar>
  );
}

export default NavBarComponent