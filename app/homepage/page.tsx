'use client'

import { Text, Heading, Stack, Center, Box, Flex } from '@chakra-ui/react'
import About from './about/page'
import RegisterHOA from './register-hoa/page'
import ContactUs from './contact-us/page'
import HomepageLayout from './layout'

function Homepage () {
  return (
    <HomepageLayout>
      <Center
        h='30vh'
        bgSize={'cover'}
        bgImage={`url("/landscapeLowerOpacity.png")`}
      >
        <Flex bgColor={'rgba(255, 255, 255, 0.6)'}>
          <Stack
            direction={'column'}
            alignItems={'center'}
            textAlign={'center'}
            p='2rem'
          >
            <Heading size={'2xl'} fontFamily='font.heading'>
              System Name
            </Heading>
            <Text
              fontFamily='font.body'
              fontSize='1.5rem'
              textAlign={'center'}
              textShadow='1px 1px grey.05'
            >
              A Management Information System (MIS) for Homeowners' Associations
              in the Philippines.
            </Text>
          </Stack>
        </Flex>
      </Center>
      <About />
      <RegisterHOA />
      <ContactUs />
    </HomepageLayout>
  )
}
export default Homepage
