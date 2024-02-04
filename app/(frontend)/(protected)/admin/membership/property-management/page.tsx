'use client'

import { ExternalLinkIcon } from '@chakra-ui/icons'
import {
  Box,
  Center,
  Heading,
  Select,
  SimpleGrid,
  UnorderedList,
  Link,
  VStack,
  Text,
  ListItem
} from '@chakra-ui/react'

export default function PropertyManagement () {
  return (
    <>
      <SimpleGrid
        columns={2}
        spacing={10}
        justifyContent='space-around'
        p={'1rem'}
        h={'70vh'}
        minChildWidth={{ md: '50vh', lg: '20vh' }}
      >
        <Center bg='lightgrey' minHeight={'200px'}>
          Insert Google Map here
        </Center>
        <Box fontFamily={'font.body'}>
          <Text size={'md'}>Please select a house address:</Text>
          <Select size='lg' variant='filled' mb={'2rem'}>
            <option value={'address1'}>Address 1</option>
            <option value={'address2'}>Address 2</option>
            <option value={'address3'}>Address 3</option>
          </Select>
          <VStack
            borderWidth={'1px'}
            borderRadius={'lg'}
            p='2rem'
            alignItems={'left'}
            spacing={'1.5rem'}
          >
            <Box>
              <Heading size={'md'} fontFamily={'font.heading'}>
                Property Owner
              </Heading>
              <Text fontSize={'lg'} fontFamily={'font.body'} lineHeight={2}>
                John Doe
              </Text>
            </Box>
            <Box>
              <Heading size={'md'} fontFamily={'font.heading'}>
                Occupancy Status
              </Heading>
              <Text fontSize={'lg'} fontFamily={'font.body'} lineHeight={2}>
                Occupied
              </Text>
            </Box>
            <Box>
              <Heading size={'md'} fontFamily={'font.heading'} mb={'1rem'}>
                Property Documents
              </Heading>
              <UnorderedList spacing={2} fontFamily={'font.body'}>
                <ListItem>
                  <Link isExternal>
                    Intent to Purchase or Letter of Intent{' '}
                    <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Reservation Letter <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Contract to Sell <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Letter of Guarantee <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Deed of Absolute Sale <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Certification of Title <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
                <ListItem>
                  <Link isExternal>
                    Tax Decleration <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </ListItem>
              </UnorderedList>
            </Box>
          </VStack>
        </Box>
      </SimpleGrid>
    </>
  )
}
