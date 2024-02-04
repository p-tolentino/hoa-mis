'use client'
import { Table, Thead, Tbody, Box, Tr, Th, Td, Button } from '@chakra-ui/react'
import ViewMemberDetailsButton from './ViewMemberDetailsButton'

const UserManagementTable = () => {
  return (
    <Box>
      <Table
        mt='30px'
        size='md'
        variant='striped'
        colorScheme='gray'
        // tableLayout="fixed"
      >
        <Thead backgroundColor='brand.400'>
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
            <Th>Status</Th>
            <Th>Member Type</Th>
            <Th>Member Name</Th>
            <Th>View Member Details</Th>
          </Tr>
        </Thead>
        <Tbody>
          {/* {props.data.map((row, rowIndex) => {
                const keys = Object.keys(row);
                const cells = keys.map((key) =>
                  renderCell(row[key], rowIndex, key)
                );
                return <Tr key={rowIndex}>{cells}</Tr>;
              })} */}
          <Tr>
            <Td>Active</Td>
            <Td>President</Td>
            <Td>John Doe</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td>Inactive</Td>
            <Td>Vice President</Td>
            <Td>Diego Pallasigue</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td>Active</Td>
            <Td>Resident</Td>
            <Td>Kathleen Tan</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
          <Tr>
            <Td>Inactive</Td>
            <Td>Tenant</Td>
            <Td>Maxine Feliciano</Td>
            <Td>
              <ViewMemberDetailsButton />
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  )
}

export default UserManagementTable
