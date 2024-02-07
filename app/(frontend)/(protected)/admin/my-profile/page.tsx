'use client'

import { Avatar, Box, Flex, Heading, Text, Spinner } from '@chakra-ui/react'
import EditProfileButton from '@/components/page-myProfile/EditProfileButton'
import MembershipInformation from './_components/MembershipInformation'
import { getUserById, getUserProfileById, getMyUserId } from '@/backend/actions/getUsers'
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
    bio: string|null,
    position: string|null
  };

  export default function MyProfile() {
    const [myId, setId] = useState<string | null>(null);
    const [member, setMember] = useState<userData | null>(null);
    const [personal, setPersonal] = useState<userProfile | null>(null);
    const [isLoading, setIsLoading] = useState(true); // Initial loading state
  
    useEffect(() => {
      const fetchIdAndData = async () => {
        try {
          const id = await getMyUserId();
          setId(id);
  
          const userData = await getUserById(id);
          const userProfile = await getUserProfileById(id);
  
          setMember(userData);
          setPersonal(userProfile);
        } catch (error) {
          console.error("Failed to fetch data:", error);
        } finally {
          setIsLoading(false); // Data has been fetched
        }
      };
  
      fetchIdAndData();
    }, []);
  
    if (isLoading) {
      return (
        <Flex justifyContent="center" alignItems="center" minHeight="100vh">
          <Spinner size="xl" />
        </Flex>
      );
    }
  

  return (
    <Box zIndex={1}>
      <Flex
        justifyContent={'space-between'}
        flexDir={{ md: 'column', lg: 'row' }}
      >
        {/* Profile Information */}
        <Flex gap='1.5rem'>
          <Avatar size='2xl' src='avatar-1.jpg' />
          <Box mb={{ md: '2rem', lg: '0' }}>
            <Heading size='lg' fontFamily={'font.heading'}>
            {[personal?.firstName, personal?.middleName, personal?.lastName].filter(Boolean).join(' ')}
            </Heading>
            <Box fontFamily={'font.body'}>
              <Text fontSize={'24px'}>{personal?.position}</Text>
              <Text fontSize={'sm'} lineHeight={0.5} mt='1rem'>
                Status:
              </Text>
              <Text fontSize={'24px'} color={'black'}>
                {member?.status}
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Edit Profile Button
       <EditProfileButton
          biography={biography}
          contactNumber={contactNumber}
        /> */}
      </Flex> 
       <MembershipInformation
        biography={personal?.bio || null}
        contactNumber={personal?.phoneNumber||null}
        emailAddress={member?.email||null}
        // address
      />
    </Box>
  )
}
