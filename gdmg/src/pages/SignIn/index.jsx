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
  Title,
  LoadingOverlay,
  SimpleGrid,
  Image,
  Flex,
  MediaQuery,
  Grid,
  Alert,
  Text,
  Center
} from '@mantine/core';
import { IconLock,IconAt } from '@tabler/icons';
import PasswordValidator from 'password-validator';
import * as EmailValidator from 'email-validator';
import { login } from '../../service/apiService';
import { showNotification } from '@mantine/notifications';
import AuthService from '../../service/auth/authService';
import styles from './index.css'
export function SignInForm(props) {
  const navigate = useNavigate();
  const [visible, setVisible] = useState(false);

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
      setVisible(true);
      const validate = form.validate();
      if(validate.hasErrors == false){
        AuthService.login(form.values.email,form.values.password).then(
          (res) => {
            console.log(res);
            navigate("/dashboard");
            window.location.reload();
          },
          (error) => {
            console.log(error.response);
            setVisible(false);
            showNotification({
              color: 'red',
              title: 'Impossible de vous connnecter',
              message: 'Une erreur est survenue, veuillez vérifier que vous avez mis des identifiants correct',
              autoClose: 5000,
            })
          }
        )
       }
  }

  return (
    <div id='formContainer'>
<form id='form' onSubmit={form.onSubmit(handleSubmit)} >
    <MediaQuery smallerThan={"sm"} styles={{display:"none"}}>
        <Container  size={"75%"} my={40} >
    <Paper  radius="lg" p="xl" withBorder {...props} shadow='md'>
      <Title 
        align='center'
        color='#5D5FEF'
        sx={(theme) => ({fontFamily : `Lato, ${theme.fontFamily}`, fontWeight: 500 })}>
        Connexion Membre
    </Title>
    <LoadingOverlay visible={visible} overlayBlur={2} />
    <Grid justify="center" align="center"   style={{marginTop:"50px"}}>
      <Grid.Col span={"auto"}>
      <Image
      width={"100%"}
      heigth={"100%"}
          radius="md"
          src={require("../../images/undraw_Designer_re_5v95.jpg")}
          alt="Random unsplash image"
          
        />
      </Grid.Col>
      <Grid.Col span={7} >
        <Center>
          <Stack justify="center" spacing="sm">    
            <TextInput
              required
              radius="xl"
              size="xl"
              placeholder="Email"
              icon={<IconAt size={20} />}
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Votre email est invalide'}
            />

            <PasswordInput
              required
              radius="xl"
              size="xl"
              icon={<IconLock size={20}/>}
              placeholder="Mot de passe"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Le mot de passe est invalide'}
            />

            <Button 
              color="green" 
              radius="xl" 
              size="xl"
              disabled={form.isDirty() ? false : true} 
              type="submit">
                Valider
            </Button>
            <Text size={10}>
            En cas d’incident technique ou d’oubli de mot de passe. Veuillez contacter votre adiministrateur système local.
            </Text>
          </Stack>         
        </Center>
      </Grid.Col>
      </Grid>
    </Paper>
    </Container>
    </MediaQuery>
    <MediaQuery largerThan={"sm"} styles={{display:"none"}}>
    <Center style={{ width: "100%", height: '100%' }}>
    
    <Stack justify="center" spacing="sm"> 
    <Title 
        align='center'
        color='#5D5FEF'
        sx={(theme) => ({fontFamily : `Lato, ${theme.fontFamily}`, fontWeight: 500 })}>
        Connexion Membre
    </Title>   
            <TextInput
              required
              radius="xl"
              size="xl"
              placeholder="Email"
              icon={<IconAt size={20} />}
              value={form.values.email}
              onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
              error={form.errors.email && 'Votre email est invalide'}
            />

            <PasswordInput
              required
              radius="xl"
              size="xl"
              icon={<IconLock size={20}/>}
              placeholder="Mot de passe"
              value={form.values.password}
              onChange={(event) => form.setFieldValue('password', event.currentTarget.value)}
              error={form.errors.password && 'Le mot de passe est invalide'}
            />

            <Button 
              color="green" 
              radius="xl" 
              size="xl"
              disabled={form.isDirty() ? false : true} 
              type="submit">
                Valider
            </Button>
            <Text size={14}>
            En cas d’incident technique ou d’oubli de mot de passe. Veuillez contacter votre adiministrateur système local.
            </Text>
          </Stack> 
    </Center>
    
    </MediaQuery>
    </form>    
    </div>
    

  );
}