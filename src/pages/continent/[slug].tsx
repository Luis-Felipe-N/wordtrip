import { Box, Grid, GridItem, Text } from "@chakra-ui/react";
import { Banner } from "../../components/Banner";
import { Citys } from "../../components/Citys";

export default function Continent() {
    return (
        <Box
            as="main"
        >   
            <Banner bannerImage="/banner.png" continent="Europa" />

            <Box>
                <Grid
                    maxW={1300}
                    paddingX="15px"
                    marginX="auto"
                    marginY="80px"
                    
                    templateColumns="repeat(2, 1fr)"
                    alignItems="center"
                    gap="70px"
                >
                    <GridItem>
                        <Text
                            fontSize="24px"
                        >
                        A Europa é, por convenção, um dos seis continentes do mundo. Compreendendo a península ocidental da Eurásia, a Europa geralmente divide-se da Ásia a leste pela divisória de águas dos montes Urais, o rio Ural, o mar Cáspio, o Cáucaso, e o mar Negro a sudeste
                        </Text>
                    </GridItem>

                    <GridItem
                        display="flex"
                        justifyContent="space-between"
                    >
                        <Box
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                        >
                            <Text
                                color="yellow.900"
                                fontSize="48px"
                                fontWeight="semibold"
                                lineHeight="1"
                            >
                                50
                            </Text>
                            <Text 
                                fontSize="24px"
                                fontWeight="semibold"
                            >
                                países
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                        >
                            <Text
                                color="yellow.900"
                                fontSize="48px"
                                fontWeight="semibold"
                                lineHeight="1"
                            >
                                60
                            </Text>
                            <Text 
                                fontSize="24px"
                                fontWeight="semibold"
                            >
                                línguas
                            </Text>
                        </Box>
                        <Box
                            display="flex"
                            flexDir="column"
                            alignItems="center"
                        >
                            <Text
                                color="yellow.900"
                                fontSize="48px"
                                fontWeight="semibold"
                                lineHeight="1"
                            >
                                27
                            </Text>
                            <Text 
                                fontSize="24px"
                                fontWeight="semibold"
                            >
                                cidades +100
                            </Text>
                        </Box>
                    </GridItem>
                </Grid>
            </Box>

            <Citys />
        </Box>
    )
}