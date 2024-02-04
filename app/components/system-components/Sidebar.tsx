'use client'

import { useState, useEffect } from 'react'
import {
  Flex,
  Text,
  IconButton,
  Divider,
  Avatar,
  Heading,
  Link
} from '@chakra-ui/react'
import {
  FiMenu,
  FiHome,
  FiCalendar,
  FiDollarSign,
  FiBriefcase,
  FiUsers,
  FiUserCheck
} from 'react-icons/fi'
import { BsNewspaper } from 'react-icons/bs'
import { PiBinocularsBold, PiBroomFill } from 'react-icons/pi'
import SidebarItem from './SidebarItem'

export default function Sidebar () {
  const [sidebarSize, changeSidebarSize] = useState('large')

  useEffect(() => {
    const handleResize = () => {
      const isSmallScreen = window.innerWidth <= 768 // You can adjust the breakpoint (768) as needed
      changeSidebarSize(isSmallScreen ? 'small' : 'large')
    }

    // Initial check on mount
    handleResize()

    // Event listener for window resize
    window.addEventListener('resize', handleResize)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <Flex
      pos='sticky'
      top={0}
      h='100vh'
      minW={sidebarSize === 'small' ? '75px' : '280px'}
      flexDir='column'
      justifyContent='space-around'
      bgColor={'brand.500'}
      color={'white'}
      zIndex={3}
    >
      <Flex
        p={sidebarSize === 'small' ? '17%' : '5%'}
        flexDir='column'
        w='100%'
        alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
        as='nav'
      >
        <IconButton
          background='none'
          color={'white'}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (sidebarSize === 'small') changeSidebarSize('large')
            else changeSidebarSize('small')
          }}
          aria-label={''}
          alignSelf={'flex-start'}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiHome}
          title='Dashboard'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiUserCheck}
          title='Membership'
          active={true}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiDollarSign}
          title='Finance Management'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiUsers}
          title='Community Engagement'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiBriefcase}
          title='Dispute Resolution'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={PiBinocularsBold}
          title='Violation Monitoring'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiCalendar}
          title='Facility Reservation'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={PiBroomFill}
          title='Maintenance Handling'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={BsNewspaper}
          title='Election Management'
          active={false}
        />
      </Flex>

      <Flex
        p='1rem'
        flexDir='column'
        w='100%'
        alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
        mb={4}
      >
        <Divider
          display={sidebarSize === 'small' ? 'none' : 'flex'}
          mt={'1rem'}
        />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='avatar-1.jpg' />
          <Flex
            flexDir='column'
            ml={4}
            display={sidebarSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as='h3' size='sm' fontFamily='font.heading'>
              John Doe
            </Heading>
            <Text color='brand.300' fontFamily='font.body'>
              Admin
            </Text>
          </Flex>
        </Flex>

        <Flex
          mt={3}
          fontSize={'sm'}
          display={sidebarSize === 'small' ? 'none' : 'flex'}
        >
          <Link href='/system-admin/my-profile' fontFamily={'font.body'}>
            My Profile
          </Link>
        </Flex>
        <Flex
          mt={2}
          fontSize={'sm'}
          display={sidebarSize === 'small' ? 'none' : 'flex'}
        >
          <Text as={Link} fontFamily='font.body'>
            Settings
          </Text>
        </Flex>
        <Flex
          mt={2}
          fontSize={'sm'}
          display={sidebarSize === 'small' ? 'none' : 'flex'}
        >
          <Link href='/' fontFamily={'font.body'}>
            Sign Out
          </Link>
        </Flex>
      </Flex>
    </Flex>
  )
}
