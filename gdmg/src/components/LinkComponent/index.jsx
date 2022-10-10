import React from 'react';
import { IconGitPullRequest,IconMail,IconCoinEuro,IconCalendarEvent,IconBrandGoogleAnalytics } from '@tabler/icons';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';


function Link(props) {
  const navigate = useNavigate();
  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,

        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        }
      })}
      onClick={() => navigate(props.link)}
    >
      <Group>
        <ThemeIcon color={props.color} variant="light">
          {props.icon}
        </ThemeIcon>

        <Text size="sm">{props.label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const data = [
  { icon: <IconGitPullRequest size={16} />, color: 'blue', label: 'Tableau de bord' ,link:'/dashboard'},
  {icon:<IconCalendarEvent size={16}/>,color:'red',label:'Calendrier',link:'/calendar'},
  { icon: <IconCoinEuro size={16} />, color: 'teal', label: 'Recettes',link:'/receipts' },
  { icon: <IconMail size={16} />, color: 'grape', label: 'Envoyer mail', link:'/mail' },
  {icon: <IconBrandGoogleAnalytics size={16}/>,color:'yellow',label:'Performance',link:'/analytics'}
];
export function LinkComponent() {
  const links = data.map((link) => <Link {...link} key={link.label} />);
  return <div>{links}</div>;
}