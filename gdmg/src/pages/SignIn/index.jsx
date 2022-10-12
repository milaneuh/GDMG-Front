import React, {useState,useContext} from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Container,
  Button,
  Anchor,
  Stack,
  Title
} from '@mantine/core';
import PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';
import { redirect } from 'react-router-dom';
import apiService from '../../service/apiService';

export function SignInForm(props) {
  const navigate = useNavigate();

  var schema = new PasswordValidator();
  schema
    .is().min(8)
    .is().max(100)
    .has().uppercase(1)
    .has().digits(1)
    .has().symbols(1)
    .has().not().spaces();

    
  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },

    validate: {
      email: (val) => (EmailValidator.validate(val) ? null : 'Invalid email'),
      password: (val) =>  (schema.validate((val))? null :  'Le mot de passe est invalide'),
    },
  });
 
  const handleSubmit = async (event) => {
      const validate = form.validate();
      if(validate.hasErrors == false){

          const login = apiService.login(form.values.email,form.values.password);

          
      }
  }

  return (
    <Container size={420} my={40}>
    <Title 
        align='center'
        sx={(theme) => ({fontFamily : `Greycliff CF, ${theme.fontFamily}`, fontWeight: 900 })}>
        Bienvenue sur le site Gestionnaire !
    </Title>
    <Paper radius="md" p="xl" withBorder {...props} shadow='md'>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
            
          <TextInput
            required
            label="Email"
            placeholder="hello@mail.com"
            value={form.values.email}
            onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
            error={form.errors.email && 'Votre email est invalide'}
          />

          <PasswordInput
            required
            label="Mot de passe"
            placeholder="Votre mot de passe"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Le mot de passe est invalide'}
          />

        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => navigate('/register')}
            size="xs"
          >
          Pas de compte ? Inscrivez-vous
          </Anchor>
          <Button
            disabled={form.isDirty() ? false : true} 
            type="submit">
              Login
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}