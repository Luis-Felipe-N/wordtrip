import { Box, Text, Image as ImageChakra, useBreakpointValue } from "@chakra-ui/react";
import Image from "next/image";

interface IItemTravelTripsProps {
    image: string;
    text: string
}

export function ItemTravelTrips({image, text}: IItemTravelTripsProps) {
    const isWideVersion = useBreakpointValue({
        base: false,
        lg: true
    })

    return (
        <Box
            alignItems="center"
            display="flex"
            flexDir={{base: 'row', lg: 'column'}}
            gap={{base: '.5rem', lg: '24px'}}
        >
            {isWideVersion ? (
                <ImageChakra
                    src={image}
                    alt="Ícone de um cocktail"
                />
            ) : (
                <Box 
                    w="8px"
                    h="8px"
                    backgroundColor="yellow.900"
                    borderRadius="100%"
                ></Box>
            )}
            <Text fontSize={24} fontWeight="semibold" color="#47585B">{text}</Text>
        </Box>
    )
}