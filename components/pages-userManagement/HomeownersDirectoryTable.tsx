'use client'
import { Table, Thead, Tbody, Box, Tr, Th, Td, Button } from '@chakra-ui/react'
import ViewMemberDetailsButton from './ViewMemberDetailsButton'

const HomeownersDirectoryTable = () => {
  return (
    <Box>
      <Table
        mt='30px'
        size='md'
        variant='striped'
        colorScheme='gray'
        // tableLayout="fixed"
      >
        <Thead backgroundColor='brand.300'>
          {/* <Tr width="full">
                {props.headers.map((header, index) => (
                  <Th
                    key={index}

                  >
                    {header}
                  </Th>
                ))}
              </Tr> */}
          <Tr width='full'>
            <Th fontFamily='font.heading' color='black'>
              Status
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Member Type
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Member Name
            </Th>
            <Th fontFamily='font.heading' color='black'>
              View Member Details
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize='sm'>
          {/* {props.data.map((row, rowIndex) => {
                const keys = Object.keys(row);
                const cells = keys.map((key) =>
                  renderCell(row[key], rowIndex, key)
                );
                return <Tr key={rowIndex}>{cells}</Tr>;
              })} */}
          <Tr>
            <Td fontFamily='font.body'>Active</Td>
            <Td fontFamily='font.body'>President</Td>
            <Td fontFamily='font.body'>John Doe</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td fontFamily='font.body'>Inactive</Td>
            <Td fontFamily='font.body'>Vice President</Td>
            <Td fontFamily='font.body'>Diego Pallasigue</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td fontFamily='font.body'>Active</Td>
            <Td fontFamily='font.body'>Resident</Td>
            <Td fontFamily='font.body'>Kathleen Tan</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td fontFamily='font.body'>Inactive</Td>
            <Td fontFamily='font.body'>Tenant</Td>
            <Td fontFamily='font.body'>Maxine Feliciano</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default HomeownersDirectoryTable
