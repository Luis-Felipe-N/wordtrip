import { Box, Text, Image as ImageChakra } from "@chakra-ui/react";
import Image from "next/image";

interface IItemTravelTripsProps {
    image: string;
    text: string
}

export function ItemTravelTrips({image, text}: IItemTravelTripsProps) {
    return (
        <Box
            alignItems="center"
            display="flex"
            flexDir="column"
            gap="24px"
        >
            <ImageChakra
                src={image}
                alt="Ícone de um cocktail"
            />
            <Text fontSize={24} fontWeight="semibold" color="#47585B">{text}</Text>
        </Box>
    )
}