import { Box } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { Hero } from '../components/Hero'
import { Slider } from '../components/Slider'
import { TravelTrips } from '../components/TravelTrips'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <Box>
      <Hero />
      <TravelTrips />
      <Slider />
    </Box>
  )
}

export default Home
