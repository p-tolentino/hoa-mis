'use client'
import { Table, Thead, Tbody, Box, Tr, Th, Td } from '@chakra-ui/react'

const AdminOfficersDirectoryTable = () => {
  const data = [
    {
      adminID: '100',
      position: 'President',
      adminName: 'John Doe',
      contactNumbername: '0900 000 0000',
      cNlink: '"tel:+63-900-000-0000"',
      emailAddress: 'john.doe@gmail.com',
      eAlink: 'mailto:john.doe@gmail.com'
    }
  ]

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
              Admin ID
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Position
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Admin Name
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Contact Number
            </Th>
            <Th fontFamily='font.heading' color='black'>
              Email Address
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
          {data.map((val, i) => (
            <Tr key={i}>
              <Td fontFamily='font.body'>{val.adminID}</Td>
              <Td fontFamily='font.body'>{val.position}</Td>
              <Td fontFamily='font.body'>{val.adminName}</Td>
              <Td fontFamily='font.body'>
                <a href={val.cNlink} target='_blank'>
                  {val.contactNumbername}
                </a>
              </Td>
              <Td fontFamily='font.body'>
                <a href={val.eAlink} target='_blank'>
                  {val.emailAddress}
                </a>
              </Td>
            </Tr>
          ))}
          {data.map((val, i) => (
            <Tr key={i}>
              <Td fontFamily='font.body'>{val.adminID}</Td>
              <Td fontFamily='font.body'>{val.position}</Td>
              <Td fontFamily='font.body'>{val.adminName}</Td>
              <Td fontFamily='font.body'>
                <a href={val.cNlink} target='_blank'>
                  {val.contactNumbername}
                </a>
              </Td>
              <Td fontFamily='font.body'>
                <a href={val.eAlink} target='_blank'>
                  {val.emailAddress}
                </a>
              </Td>
            </Tr>
          ))}
          {data.map((val, i) => (
            <Tr key={i}>
              <Td fontFamily='font.body'>{val.adminID}</Td>
              <Td fontFamily='font.body'>{val.position}</Td>
              <Td fontFamily='font.body'>{val.adminName}</Td>
              <Td fontFamily='font.body'>
                <a href={val.cNlink} target='_blank'>
                  {val.contactNumbername}
                </a>
              </Td>
              <Td fontFamily='font.body'>
                <a href={val.eAlink} target='_blank'>
                  {val.emailAddress}
                </a>
              </Td>
            </Tr>
          ))}
          {data.map((val, i) => (
            <Tr key={i}>
              <Td fontFamily='font.body'>{val.adminID}</Td>
              <Td fontFamily='font.body'>{val.position}</Td>
              <Td fontFamily='font.body'>{val.adminName}</Td>
              <Td fontFamily='font.body'>
                <a href={val.cNlink} target='_blank'>
                  {val.contactNumbername}
                </a>
              </Td>
              <Td fontFamily='font.body'>
                <a href={val.eAlink} target='_blank'>
                  {val.emailAddress}
                </a>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  )
}

export default AdminOfficersDirectoryTable
