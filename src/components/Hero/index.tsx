import { Box, Image, Text, useBreakpointValue } from "@chakra-ui/react";

export function Hero() {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box
            backgroundImage="/Background.png"
            backgroundRepeat="no-reapet"
            backgroundSize="cover"
        >
            <Box
                maxW={1300}
                paddingX="15px"
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
                        lineHeight="1.2"
                    >5 Continentes, <br /> infinitas possibilidades.</Text>
                    <Text
                        fontSize={20}
                        margin-top={20}
                    >Chegou a hora de tirar do papel a viagem que você sempre sonhou. </Text>
                </Box>

                {isWideVersion && (
                    <Image
                        src="/Airplane.png" 
                        alt="Imagem de um avião amarelo e nuvens"
                        maxW={417.15}
                        w="100%"
                        h="270.74"
                        marginTop={10}
                        rotate="20deg"
                    />
                )}
            </Box>
        </Box>
    )
}