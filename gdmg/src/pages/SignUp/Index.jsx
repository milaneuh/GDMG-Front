import React, {useState,useContext} from 'react';
import { useForm } from '@mantine/form';
import {
  TextInput,
  PasswordInput,
  Paper,
  Group,
  Container,
  Button,
  Checkbox,
  Anchor,
  Stack,
  Title,
  Select,
  Grid,
} from '@mantine/core';
import PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';

import { useNavigate } from 'react-router-dom';

export function SignUpForm(props) {
const navigate = useNavigate();
  var schema = new PasswordValidator();
  schema
    .is().min(8)
    .is().max(100)
    .has().uppercase(1)
    .has().digits(1)
    .has().symbols(1)
    .has().not().spaces();

    
  const [searchValue, onSearchChange] = useState('');
  const form = useForm({
    initialValues: {
      email: '',
      name: '',
      surname : '',
      password: '',
      civilite: '',
      terms: true,
      newsletter: true
    },

    validate: {
      email: (val) => (EmailValidator.validate(val) ? null : 'Invalid email'),
      password: (val) =>  (schema.validate((val))? null :  'Le mot de passe est invalide'),
      name: (val) => (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(val) ? null : 'Le prénom est invalide'),
      surname: (val) => (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(val) ? null : 'Le nom est invalide')
    },
  });
 
  const handleSubmit = async (event) => {
     
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
          <Grid>
            <Grid.Col span={6}>
                <TextInput
                  required
                  label="Prénom"
                  placeholder="Votre prénom"
                  value={form.values.name}
                  error={form.errors.name && 'Votre prénom est invalide'}

                  onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                />
            </Grid.Col>
            <Grid.Col span={6}>
                <TextInput
                required
                label="Nom"
                placeholder='Votre Nom'
                value={form.values.surname}
                error={form.errors.surname && 'Votre nom est invalide'}
                onChange={(event) => form.setFieldValue('surname', event.currentTarget.value)}
                />

            </Grid.Col>
          </Grid>
              <Select
              required
              label="Votre civilité"
              placeholder="Choisissez-en une"
              searchable
              value={form.values.civilite}
              onChange={(e) => form.setFieldValue('civilite',e.toString())}
              onSearchChange={onSearchChange}
              error={form.errors.civilite && 'Civilite invalide'}
              searchValue={searchValue}
              nothingFound="No options"
              data={['Homme', 'Femme','Test']}
            />

            
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
            description="Votre mot de passe doit contenir au moins huit caracètre, un caractère spécial, un chiffre, et une majuscule"
            placeholder="Votre mot de passe"
            value={form.values.password}
            onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
            error={form.errors.password && 'Le mot de passe est invalide'}
          />

            <Checkbox
              label="J'accepte les termes et les conditions de GDMG"
              checked={form.values.terms}
              onChange={(event) => form.setFieldValue('terms', event.currentTarget.checked)}
            />


            <Checkbox
              label="J'accepte de recevoir des nouvelles de GDMG"
              checked={form.values.newsletter}
              onChange={(event) => form.setFieldValue('newsletter', event.currentTarget.checked)}
            />

        </Stack>

        <Group position="apart" mt="xl">
          <Anchor
            component="button"
            type="button"
            color="dimmed"
            onClick={() => navigate('/')}
            size="xs"
          >
            Déjà un compte ? Connectez-vous    
          </Anchor>
          <Button
            disabled={form.isDirty() ? false : true} 
            type="submit">
            Register
          </Button>
        </Group>
      </form>
    </Paper>
    </Container>
  );
}