import { Flex, Image as ImageChakra } from "@chakra-ui/react";
import Image from "next/image";

export function Header() {
    return (
        <Flex
            justifyContent="center"
            height={100}
            alignItems="center"
            as="header"
        >
            <ImageChakra
                src="/Logo.png"
                alt="Logo"
                width={184.06}
                height={45.92}
            />
        </Flex>
    )
}