import { Box, Image, Text } from "@chakra-ui/react";

export function Hero() {
    return (
        <Box
            backgroundImage="/Background.png"
            backgroundRepeat="no-reapet"
            backgroundSize="cover"
        >
            <Box
                maxW={1240}
                margin="auto"
                display="flex"
                alignItems="center"
                justifyContent="space-between"

            >
                <Box
                    color="white"
                >
                    <Text
                        as="h1"
                        fontSize={36}
                    >5 Continentes, <br /> infinitas possibilidades.</Text>
                    <Text
                        fontSize={20}
                        margin-top={20}
                    >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Box>

                <Image
                    src="/Airplane.png" 
                    alt="Imagem de um avião amarelo e nuvens"
                    maxW={417.15}
                    w="100%"
                    h="270.74"
                    marginTop={10}
                    rotate="20deg"
                />
            </Box>
        </Box>
    )
}