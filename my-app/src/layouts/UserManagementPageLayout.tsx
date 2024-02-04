import { Table, Thead, Tbody, Box, Tr, Th, Td, Button } from "@chakra-ui/react";
import ViewMemberDetailsButton from "../components/ViewMemberDetailsButton";

const UserManagementPageLayout = () => {
  return (
    <Box>
      <Table
        mt="30px"
        size="md"
        variant="striped"
        colorScheme="gray"
        // tableLayout="fixed"
      >
        <Thead backgroundColor="brand.400">
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
            <Th>Status</Th>
            <Th>Member Type</Th>
            <Th>Member Name</Th>
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
          <Td>Active</Td>
          <Td>President</Td>
          <Td>John Doe</Td>
          <Td>
            <ViewMemberDetailsButton />
          </Td>
        </Tbody>
        <Tbody>
          <Td>Inactive</Td>
          <Td>Vice President</Td>
          <Td>Diego Pallasigue</Td>
          <Td>
            <ViewMemberDetailsButton />
          </Td>
        </Tbody>
        <Tbody>
          <Td>Active</Td>
          <Td>Resident</Td>
          <Td>Kathleen Tan</Td>
          <Td>
            <ViewMemberDetailsButton />
          </Td>
        </Tbody>
        <Tbody>
          <Td>Inactive</Td>
          <Td>Tenant</Td>
          <Td>Maxine Feliciano</Td>
          <Td>
            <ViewMemberDetailsButton />
          </Td>
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserManagementPageLayout;
