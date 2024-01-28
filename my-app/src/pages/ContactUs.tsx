import {
  Container,
  Flex,
  Button,
  Text,
  Box,
  Textarea,
  Spacer,
  Input
} from '@chakra-ui/react'
// import "@fontsource/cabin";
import { Icon } from '@chakra-ui/react'
import { ArrowForwardIcon, EmailIcon } from '@chakra-ui/icons'
import { useState } from 'react'

function ContactUs () {
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  return (
    <Flex id='contactUsSection' mx={'3rem'}>
      <Container
        id='contact_us'
        maxW={{ base: '90%', md: '900px' }}
        py={{ base: '25px', md: '50px' }}
        pt={{ base: '100px', md: '80px' }}
      >
        <Flex
          direction={{ base: 'column', md: 'row' }}
          border='1px solid #e8e8e8'
          boxShadow='md'
          borderRadius='xl'
        >
          <Flex
            bgColor='brand.500'
            opacity='90%'
            direction='column'
            borderTopLeftRadius={{ base: 'xl', md: 'xl' }}
            borderTopRightRadius={{ base: 'xl', md: '0' }}
            borderBottomLeftRadius={{ base: '0', md: 'xl' }}
            px={{ base: '35px', md: '80px' }}
            py={{ base: '35px', md: '50px' }}
            width={{ base: '200', md: '450px' }}
          >
            <Box>
              <Text
                fontSize={{ base: '20px', md: '30px' }}
                fontStyle='bold'
                fontWeight={{ base: '650', md: '800' }}
                lineHeight={{ base: '20px', md: '30px' }}
                color='white'
              >
                Contact Us
              </Text>
              <Text
                fontSize={{ base: '10px', md: '12px' }}
                fontWeight={{ base: '400px', md: '600px' }}
                lineHeight='30px'
                color='white'
              >
                Fill up the form to contact
              </Text>
              <Text
                fontSize={{ base: '12px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '600px' }}
                lineHeight={{ base: '20px', md: '25px' }}
                color='white'
                marginTop={{ base: '4', md: '6' }}
              >
                Online Hours:
              </Text>
              <Text
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                marginTop={{ base: '1', md: '1.5' }}
                color='white'
              >
                Monday-Friday 8:00AM-5:00PM
              </Text>
              <Text
                fontSize={{ base: '12px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '600px' }}
                lineHeight={{ base: '20px', md: '25px' }}
                color='white'
                marginTop={{ base: '4', md: '6' }}
              >
                Address:
              </Text>
              <Text
                as='a'
                rel='noopener'
                target='_blank'
                href='https://maps.app.goo.gl/6jai6r2Lv8Fx3PvQA'
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                color='white'
              >
                2401 Taft Ave, Malate, Manila, 1004 Metro Manila
                <Icon as={ArrowForwardIcon} />
              </Text>
              <Text
                fontSize={{ base: '12px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '600px' }}
                lineHeight={{ base: '20px', md: '25px' }}
                color='white'
                marginTop={{ base: '4', md: '6' }}
              >
                Email Addresses:
              </Text>
              <Text
                as='a'
                href='mailto:alessandra_maxine_feliciano@dlsu.edu.ph'
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                color='white'
              >
                <Icon as={EmailIcon} /> alessandra_maxine_feliciano@dlsu.edu.ph
              </Text>
              <Spacer />
              <Text
                as='a'
                href='mailto:diego_pallasigue@dlsu.edu.ph'
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                color='white'
              >
                <Icon as={EmailIcon} /> diego_pallasigue@dlsu.edu.ph
              </Text>
              <Spacer />
              <Text
                as='a'
                href='mailto:kathleen_tan@dlsu.edu.ph'
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                color='white'
              >
                <Icon as={EmailIcon} /> kathleen_tan@dlsu.edu.ph
              </Text>
              <Spacer />
              <Text
                as='a'
                href='mailto:philip_tolentino@dlsu.edu.ph'
                fontSize={{ base: '10px', md: '12px' }}
                fontStyle='normal'
                fontWeight={{ base: '400px', md: '300px' }}
                color='white'
              >
                <Icon as={EmailIcon} /> philip_tolentino@dlsu.edu.ph
              </Text>
            </Box>
          </Flex>
          <Spacer />
          <Flex
            alignContent='center'
            direction='column'
            backgroundColor='white'
            borderTopRightRadius={{ base: '0', md: 'xl' }}
            borderTopLeftRadius='0'
            borderBottomRightRadius={{ base: 'xl', md: 'xl' }}
            borderBottomLeftRadius={{ base: 'xl', md: '0' }}
            width={{ base: '200', md: '450px' }}
            padding={{ base: '5', md: '10' }}
          >
            <Text
              fontSize={{ base: '12px', md: '16px' }}
              fontStyle='bold'
              fontWeight={{ base: '300px', md: '600px' }}
              lineHeight='49px'
            >
              Subject
            </Text>
            <Input
              placeholder='Subject'
              type='email'
              //   rows="1"
              fontSize={{ base: '10px', md: '14px' }}
              onChange={e => setSubject(e.target.value)}
            />
            <Text
              fontSize={{ base: '12px', md: '16px' }}
              fontStyle='bold'
              fontWeight={{ base: '300px', md: '600px' }}
              lineHeight='49px'
            >
              Message
            </Text>
            <Textarea
              placeholder='Enter a message'
              fontSize={{ base: '10px', md: '14px' }}
              h={{ base: '50px', md: '200px' }}
              onChange={e => setMessage(e.target.value)}
            />
            <Button
              as='a'
              href={
                'mailto:info@cncdevcorp.com?subject=' +
                subject +
                '&body=' +
                message
              }
              variant='solid'
              backgroundColor='#E9C850'
              fontSize={{ base: '10px', md: '14px' }}
              borderRadius={10}
              marginTop='3'
            >
              Send Message
            </Button>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}

export default ContactUs
