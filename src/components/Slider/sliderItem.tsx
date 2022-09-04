import { Box, Text } from "@chakra-ui/react";

interface ISliderItemProps {
    image: string;
    continent: string;
    text: string
}

export function SliderItem({image, continent, text}: ISliderItemProps) {
    return (
        <Box
                backgroundImage={image}
                backgroundSize="cover"
                height="450px"
                display="flex"
                alignItems="center"
                justifyContent="center"
            >
                <Box
                    color="gray.100"
                >
                    <Text fontWeight="bold" fontSize="48px" align="center" verticalAlign="middle">{continent}</Text>
                    <Text fontWeight="bold" fontSize="24px" >{text}</Text>
                </Box>
            </Box>
    )
}