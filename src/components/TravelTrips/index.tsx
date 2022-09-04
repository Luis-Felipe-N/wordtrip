import { Box, calc, Divider, Flex, Grid, GridItem, Image, Text } from "@chakra-ui/react";
import { ItemTravelTrips } from "./ItemTravelTrips";

export function TravelTrips() {
    return (
        <Box>
            <Box
                maxW={1300}
                paddingX="15px"
                marginX="auto"
                marginY="80px"
                display="flex"
                alignItems="center"
                justifyContent="space-between"
            > 
                <Grid
                    templateColumns="repeat(auto-fit, minmax(160px, 1fr))"
                    flexWrap="wrap"
                    w="100%"
                >
                    <GridItem>
                        <ItemTravelTrips text="vida noturna" image="/cocktail.png" />
                    </GridItem>
                    <GridItem>
                        <ItemTravelTrips text="praia" image="/surf.png" />
                    </GridItem>
                    <GridItem>
                        <ItemTravelTrips text="moderno" image="/building.png" />
                    </GridItem>
                    <GridItem>
                        <ItemTravelTrips text="clássica" image="/museum.png" />
                    </GridItem>
                    <GridItem>
                        <ItemTravelTrips text="e mais..." image="/earth.png" />
                    </GridItem>
                </Grid>
            </Box>

            <Divider colorScheme="gray.900" w="90px" marginX="auto" />
        </Box>
    )
}