import { Container,Text,Group } from "@mantine/core";

function ExpendedResaInfoComponent({children}) {
    return ( 
    <Container>
         <Text weight={500}>
                        Réservation :
                    </Text>
                    <Container px="xs">
                    <Text weight={400}>
                            Recettes :
                    </Text>
                        <Container>
                            <Group spacing={6}>
                                <Text className={"row-label"}>Montant réglé :</Text>
                                <Text>{children.montant_regle}</Text>
                            </Group>
                            <Group spacing={6}>
                                <Text className={"row-label"}>Reste à percevoir :</Text>
                                <Text>{children.reste_percevoir}</Text>
                            </Group>
                            <Group spacing={6}>
                                <Text className={"row-label"}>Taxe séjour :</Text>
                                <Text>{children.taxe_sejour}</Text>
                            </Group>
                        </Container>
                    <Text weight={400}>
                        Précisions :
                    </Text>
                    <Container>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Adultes :</Text>
                        <Text>{children.nb_adultes}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Enfants :</Text>
                        <Text>{children.nb_enfants}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Bébé :</Text>
                        <Text>{children.nb_bebe}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Animaux :</Text>
                        <Text>{children.nb_animaux}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Group spacing={6}>
                            <Text className={"row-label"}>Menage :</Text>
                            <Text>{children.menage}</Text>
                        </Group>
                        <Group spacing={6}>
                            <Text className={"row-label"}>Serviettes :</Text>
                            <Text>{children.serviettes}</Text>
                        </Group>
                        <Group spacing={6}>
                            <Text className={"row-label"}>Chauffage :</Text>
                            <Text>{children.chauffage}</Text>
                        </Group>
                    </Group>
                    <Group spacing={6} >
                        <Text className={"row-label"}>Précision resa :</Text>
                        
                        <Text sx={{wordBreak:"break-all"}} >{children.prec_resa}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Précision animaux :</Text>
                        
                        <Text sx={{wordBreak:"break-all"}}>{children.prec_animaux}</Text>
                    </Group>
                    <Group spacing={6}>
                        <Text className={"row-label"}>Précision enfants :</Text>
                        
                        <Text sx={{wordBreak:"break-all"}}>{children.prec_enfants}</Text>
                    </Group>
                    </Container>
                    </Container>
    </Container> );
}

export default ExpendedResaInfoComponent;