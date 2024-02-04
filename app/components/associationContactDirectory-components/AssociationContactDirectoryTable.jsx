"use client";
import { Table, Thead, Tbody, Box, Tr, Th, Td, Button } from "@chakra-ui/react";

const AssociationContactDirectoryTable = () => {
  return (
    <Box>
      <Table
        mt="30px"
        size="md"
        variant="striped"
        colorScheme="gray"
        // tableLayout="fixed"
      >
        <Thead backgroundColor="brand.300">
          {/* <Tr width="full">
                {props.headers.map((header, index) => (
                  <Th
                    key={index}

                  >
                    {header}
                  </Th>
                ))}
              </Tr> */}
          <Tr width="full">
            <Th fontFamily="font.heading" color="black">
              Admin ID
            </Th>
            <Th fontFamily="font.heading" color="black">
              Position
            </Th>
            <Th fontFamily="font.heading" color="black">
              Admin Name
            </Th>
            <Th fontFamily="font.heading" color="black">
              Contact Number
            </Th>
            <Th fontFamily="font.heading" color="black">
              Email Address
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize="sm">
          {/* {props.data.map((row, rowIndex) => {
                const keys = Object.keys(row);
                const cells = keys.map((key) =>
                  renderCell(row[key], rowIndex, key)
                );
                return <Tr key={rowIndex}>{cells}</Tr>;
              })} */}
          <Tr>
            <Td fontFamily="font.body">100</Td>
            <Td fontFamily="font.body">President</Td>
            <Td fontFamily="font.body">John Doe</Td>
            <Td fontFamily="font.body">0912 000 0000</Td>
            <Td fontFamily="font.body">john.doe@gmail.com</Td>
          </Tr>
          <Tr>
            <Td fontFamily="font.body">101</Td>
            <Td fontFamily="font.body">Vice President</Td>
            <Td fontFamily="font.body">Diego Pallasigue</Td>
            <Td fontFamily="font.body">0912 000 0000</Td>
            <Td fontFamily="font.body">diego.pallasigue@gmail.com</Td>
          </Tr>
          <Tr>
            <Td fontFamily="font.body">102</Td>
            <Td fontFamily="font.body">Secretary</Td>
            <Td fontFamily="font.body">Kathleen Tan</Td>
            <Td fontFamily="font.body">0912 000 0000</Td>
            <Td fontFamily="font.body">kathleen.tan@gmail.com</Td>
          </Tr>
          <Tr>
            <Td fontFamily="font.body">103</Td>
            <Td fontFamily="font.body">Treasurer</Td>
            <Td fontFamily="font.body">Maxine Feliciano</Td>
            <Td fontFamily="font.body">0912 000 0000</Td>
            <Td fontFamily="font.body">maxine.feliciano@gmail.com</Td>
          </Tr>
        </Tbody>
      </Table>
    </Box>
  );
};

export default AssociationContactDirectoryTable;
