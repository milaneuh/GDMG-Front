import { Checkbox, Container, Grid, Group, Button, NumberInput, Paper, Space, Stack, Text, Textarea, TextInput, Title } from "@mantine/core";
import { useForm } from "@mantine/form";
import { DatePicker } from '@mantine/dates';
import * as EmailValidator from 'email-validator';
import { Status } from "../../models/Status";
import { SaveResaRequest } from "../../models/SaveResaRequest";
import ResaService from "../../service/resa/ReservationService";



function CreationReservationComponent() {

    function round(value, decimals) {
        return Number(Math.round(value+'e'+decimals)+'e-'+decimals);
    }

    function calculerTotal(){
        const debut = form.values.debut;
        const fin = form.values.fin;
        const nuit = Math.floor(((fin - debut)/(24*60*60*1000))-1);        
        
        const nb_adultes = form.values.nb_adultes;
        const taxeSejour = round(((0.99*nuit)*nb_adultes),2);
        const total = round(((nuit*67)+taxeSejour),2);

        form.values.total = total;
        form.values.taxeSejour = taxeSejour;
        console.log("Total : "+total+" Taxe séjour : "+taxeSejour);
    }

    function createResa(){
        const status = new Status(1,"EN_ATT","En Attente");
        var resa = new SaveResaRequest();
        resa.build(form.values.debut.toString(),form.values.fin.toString(),form.values.total,0,form.values.taxeSejour,(form.values.menage == "on" ? true: false),(form.values.chauffage == "on" ? true: false),(form.values.serviettes == "on" ? true: false),form.values.nb_adultes,form.values.nb_enfant,form.values.nb_bebe,form.values.nb_animaux,form.values.prec_resa,form.values.prec_enfant,form.values.prec_animaux,form.values.name,form.values.surname,form.values.email,form.values.adress,form.values.postal_code,form.values.ville,form.values.pays,form.values.telephone,status)
        console.log(resa);
        ResaService.saveResa(resa);
    }
    const form = useForm({ initialValues: {
        email: '',
        name: '',
        surname : '',
        telephone: '',
        adress: '',
        postal_code: '',
        ville:'',
        pays: '',
        debut: '',
        fin: '',
        nb_adultes: 0,
        nb_animaux: 0,
        nb_enfant: 0,
        nb_bebe : 0,
        prec_enfant: '',
        prec_animaux: '',
        prec_resa : '',
        serviettes: false,
        menage : false,
        chauffage : false,
        total:0,
        taxeSejour:0
      },
      validate:{
        email :  (val) => (EmailValidator.validate(val) ? null : 'Invalid email'),
        name: (val) => (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(val) ? null : 'Le prénom est invalide'),
        surname: (val) => (/^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/.test(val) ? null : 'Le nom est invalide'),
        telephone : (val) => (/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})]$/.test(val) ? null : 'Le téléphone est invalide'),

      }
  
    });
    const handleSubmit = async (event) => {
       
            console.log("ok");
            const resa = createResa();
            console.log(resa);
    }
    return (
        <Container>
            <Paper shadow="xs" p="md">
                <form onSubmit={form.onSubmit(handleSubmit)}>

                <Text weight={600}>Informations client : </Text>
                <Grid>
                <Grid.Col span={6}>
                    <TextInput
                            required
                            label="Nom"
                            placeholder="Dupont"
                            value={form.values.surname}
                            onChange={(event) => form.setFieldValue('surname', event.currentTarget.value)}
                        />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Prenom"
                        placeholder="Jean"
                        value={form.values.name}
                        onChange={(event) => form.setFieldValue('name', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Email"
                        placeholder="jean.dupont@mail.com"
                        value={form.values.email}
                        onChange={(event) => form.setFieldValue('email', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Telephone"
                        placeholder="06923849"
                        value={form.values.telephone}
                        onChange={(event) => form.setFieldValue('telephone', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Adresse"
                        placeholder="17 rte des mottes gachin"
                        value={form.values.adress}
                        onChange={(event) => form.setFieldValue('adress', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Ville"
                        placeholder="Lyon"
                        value={form.values.ville}
                        onChange={(event) => form.setFieldValue('ville', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Code postal"
                        placeholder="31400"
                        value={form.values.postal_code}
                        onChange={(event) => form.setFieldValue('postal_code', event.currentTarget.value)}
                    />
                </Grid.Col>
                <Grid.Col span={6}>
                    <TextInput
                        required
                        label="Pays"
                        placeholder="France"
                        value={form.values.country}
                        onChange={(event) => form.setFieldValue('pays', event.currentTarget.value)}
                    />
                </Grid.Col>
                </Grid>
                <Space h={'md'}></Space>
                <Text weight={600}>Informations réservation : </Text>
                <Grid>
                <Grid.Col span={5}>
                <DatePicker 
                placeholder="Choisissez une date" label="Début"                         
                onChange={(event) => form.setFieldValue('debut', event)} withAsterisk />
                </Grid.Col>
                <Grid.Col span={5}>
                    <DatePicker
                     placeholder="Choisissez une date" 
                     onChange={(event) => form.setFieldValue('fin', event)}
                     label="Fin" withAsterisk />
                </Grid.Col>
                <Grid.Col span={3}>
                    <NumberInput
                    onChange={(event) => form.setFieldValue('nb_adultes', event)}
                    defaultValue={0} label="Nombre adultes" withAsterisk />
                </Grid.Col>
                <Grid.Col span={3}>
                    <NumberInput
                    onChange={(event) => form.setFieldValue('nb_enfant', event)}
                    defaultValue={0} label="Nombre enfants" withAsterisk />
                </Grid.Col>
                <Grid.Col span={3}>
                    <NumberInput 
                    onChange={(event) => form.setFieldValue('nb_animaux', event)}
                    defaultValue={0} label="Nombre animaux" withAsterisk />
                </Grid.Col>
                <Grid.Col span={3}>
                    <NumberInput 
                    onChange={(event) => form.setFieldValue('nb_bebe', event)}
                    defaultValue={0} label="Nombre bébé" withAsterisk />
                </Grid.Col>
                <Grid.Col span={4}>
                    <Textarea 
                        onChange={(event) => form.setFieldValue('prec_enfant', event.currentTarget.value)}
                        label="Précisions enfants"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Textarea 
                        onChange={(event) => form.setFieldValue('prec_animaux', event.currentTarget.value)}
                        label="Précisions animaux"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Textarea
                        onChange={(event) => form.setFieldValue('prec_resa', event.currentTarget.value)}
                        label="Précisions reservation"/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Checkbox 
                        onChange={(event) => form.setFieldValue('serviettes', event.currentTarget.value)}
                        label={"Serviettes"}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Checkbox 
                        onChange={(event) => form.setFieldValue('menage', event.currentTarget.value)}
                        label={"Menage"}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Checkbox
                        onChange={(event) => form.setFieldValue('chauffage', event.currentTarget.value)}
                        label={"Chauffage"}/>
                </Grid.Col>
                <Grid.Col span={4}>
                    <Button onClick={(event) => {calculerTotal()}}fullWidth h={35}  className="buttonCalculate">
                        Calculer total
                    </Button>
                </Grid.Col>   
                <Grid.Col span={4}>
                    <TextInput
                        value = {form.values.total}
                        label="Total :"
                        disabled
                    />
                </Grid.Col>
                <Grid.Col span={4}>
                    <TextInput
                            value={form.values.taxeSejour}
                            label="Taxe de séjour :"
                        disabled
                    />
                </Grid.Col>
                <Grid.Col span={6} offset={3}>
                    <Button            onClick={() => {console.log(createResa());}}>
                        Valider
                    </Button>
                </Grid.Col>
                </Grid>
                </form>
            </Paper>
        </Container>
      
    );
}

export default CreationReservationComponent;