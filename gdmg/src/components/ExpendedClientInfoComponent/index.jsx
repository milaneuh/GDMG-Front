import { Container,Text,Group } from "@mantine/core";

function ExpendedClientInfoComponent({children}) {
    return ( 
        <Container>
                    <Text weight={500}>
                        Client :
                    </Text>
                    <Container>
                       
                        <Group spacing={6}>
                        <Text className={"row-label"}>Nom client :</Text>
                        <Text>{children.nom} {children.prenom}</Text>
                        </Group>
                        <Group spacing={6}>
                        <Text className={"row-label"}>Addresse Postal:</Text>
                        <Text>
                            {children.street_adress}, {children.postal_code}, {children.city}, {children.country}
                        </Text>
                        </Group>
                        <Group spacing={6}>
                            <Text className={"row-label"}>Mail :</Text>
                            <Text>{children.email}</Text>
                        </Group>
                        <Group spacing={6}>
                            <Text className={"row-label"}>Tel :</Text>
                            <Text>{children.telephone}</Text>
                        </Group>
                    </Container>
                  
        </Container>
     );
}

export default ExpendedClientInfoComponent;