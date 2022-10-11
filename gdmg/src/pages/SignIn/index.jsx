import {
        TextInput,
        PasswordInput,
        Anchor,
        Paper,
        Title,
        Text,
        Container,
        Button,
      } from '@mantine/core';
import React from 'react';
      
      export default function SignIn() {
        return (
                <Container size={420} my={40}>
                        <Title 
                        align='center'
                        sx={(theme) => ({fontFamily : `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
                                Bienvenu sur le site Gestionnaire !
                        </Title>
                        <Text
                                color={'dimmed'}
                                size={'sm'}
                                align={"center"}
                                mt={5}
                        >
                                Vous n'avez pas de compte ?{' '}
                                <Anchor href='#' size={'sm'} onClick={(e) => e.preventDefault()}>
                                        Créer un compte
                                </Anchor> 
                        </Text>

                        <Paper 
                                withBorder
                                shadow={'md'}
                                p={30}
                                mt={30}
                                radius="md"
                        >
                                <TextInput label="Email" placeholder="votremail@mail.com" required />
                                <PasswordInput label="Password" placeholder="Votre mot de passe" required mt="md" />
                                <Button fullWidth mt="xl">
                                        Sign in
                                </Button>
                        </Paper>
                </Container>
        );
      }