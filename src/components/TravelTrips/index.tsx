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
                <Flex
                    justifyContent="space-between"
                    flexWrap="wrap"
                    w="100%"
                    gap={1}
                >
                        <ItemTravelTrips text="vida noturna" image="/cocktail.png" />
                        <ItemTravelTrips text="praia" image="/surf.png" />
                        <ItemTravelTrips text="moderno" image="/building.png" />
                        <ItemTravelTrips text="clássica" image="/museum.png" />
                        <ItemTravelTrips text="e mais..." image="/earth.png" />
                </Flex>
            </Box>

            <Divider colorScheme="gray.900" w="90px" marginX="auto" />
        </Box>
    )
}