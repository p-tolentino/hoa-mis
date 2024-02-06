"use client";
import { Table, Thead, Tbody, Box, Tr, Th, Td, Button } from "@chakra-ui/react";
import ViewMemberDetailsButton from "./ViewMemberDetailsButton";
import { getUsers, getAllProfile } from '@/backend/actions/getUsers'
import {useState, useEffect} from 'react'

interface userData {
  id: string;
  name: string | null;
  email: string | null;
  image: string | null;
  emailVerified: Date | null;
  status: string;
  password: string | null;
  role: string;
}

interface userProfile {
    id:string,
    userId: string,
    firstName: string| null,
    middleName: string| null,
    lastName: string| null,
    phoneNumber: string| null,
    birthDay: Date| null,
    type: string| null,
  };

  interface CombinedUser {
    id: string;
    name: string | null;
    email: string | null;
    image: string | null;
    emailVerified: Date | null;
    status: string;
    password: string | null;
    role: string;
    firstName: string | null;
    middleName: string | null;
    lastName: string | null;
    phoneNumber: string | null;
    birthDay: Date | null;
    type: string | null;
  }

const UserManagementTable = () => {

  const [member, setMember] = useState<userData[] | null>(null)
  const [personal, setPersonal] = useState<userProfile[] | null>(null)
  const [combinedUsers, setCombinedUsers] = useState<CombinedUser[] | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      const data = await getUsers();
      setMember(data);
    };

    const fetchProfile = async () => {
      const info = await getAllProfile();
      setPersonal(info);
    };

    fetchUsers();
    fetchProfile();
  }, []);

  useEffect(() => {
    if (member && personal) {
      const combined = member.map(member => {
        const personals = personal.find(p => p.userId === member.id);
        return {
          ...member,
          firstName: personals?.firstName || null,
          middleName: personals?.middleName || null,
          lastName: personals?.lastName || null,
          phoneNumber: personals?.phoneNumber || null,
          birthDay: personals?.birthDay || null,
          type: personals?.type || null,
        };
      });
      setCombinedUsers(combined);
    }
  }, [member, personal]); 

 console.log("hi")
 console.log(member)
 console.log(personal)
 console.log(combinedUsers)

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
              Status
            </Th>
            <Th fontFamily="font.heading" color="black">
              Member Type
            </Th>
            <Th fontFamily="font.heading" color="black">
              Member Name
            </Th>
            <Th fontFamily="font.heading" color="black">
              View Member Details
            </Th>
          </Tr>
        </Thead>
        <Tbody fontSize="sm">
          {combinedUsers && combinedUsers.map((info) => (
            <Tr key={info.id}>
              <Td fontFamily="font.body">{info.status}</Td>
              <Td fontFamily="font.body">{info.type}</Td>
              <Td fontFamily="font.body">{[info.firstName, info.middleName, info.lastName].filter(Boolean).join(' ')}</Td>
              <Td>
                <ViewMemberDetailsButton/>
              </Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default UserManagementTable;
