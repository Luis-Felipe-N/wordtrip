import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


// import required modules
import { Navigation, Pagination } from "swiper";
import { Box, Text } from "@chakra-ui/react";
import { SliderItem } from "./sliderItem";

export function Slider() {
  return (
    <Box 
        maxW={1300} 
        marginX="auto" 
        marginY={20}
    >
      <Swiper navigation={true} pagination={true} modules={[Navigation, Pagination]} className="mySwiper">
        <SwiperSlide>
            <SliderItem
                image="/Continent.png"
                continent="Europa"
                text="O continente mais antigo."
            />
        </SwiperSlide>
        <SwiperSlide>
            <SliderItem
                    image="/Continent.png"
                    continent="Europa"
                    text="O continente mais antigo."
                />
        </SwiperSlide>
        <SwiperSlide>
            <SliderItem
                    image="/Continent.png"
                    continent="Europa"
                    text="O continente mais antigo."
                />
        </SwiperSlide>
      </Swiper>
    </Box>
  );
}
