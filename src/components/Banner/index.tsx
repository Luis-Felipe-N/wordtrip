import { Box, Text } from "@chakra-ui/react";

interface IBannerProps {
    continent: string;
    bannerImage: string
}

export function Banner({ continent, bannerImage}: IBannerProps) {
    return (
        <Box
            backgroundImage={bannerImage}
            backgroundPosition="center"
            backgroundSize="cover"
            height={['150px', '150px', '500px']}

        >
            <Box
                maxW={1300}
                height="100%"
                marginX="auto"
                padding="15px"

            >
                    <Text
                        marginTop="autos"
                        fontSize="48px"
                        fontWeight="semibold"
                        color="gray.100"
                    >
                        {continent} 
                    </Text>
            </Box>
        </Box>
    )
}