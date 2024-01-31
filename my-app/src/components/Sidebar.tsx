import { useState } from 'react'
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
import { PiBroomFill } from 'react-icons/pi'
import SidebarItem from '../components/SidebarItem'
import { NavLink } from 'react-router-dom'

export default function Sidebar () {
  const [sidebarSize, changeSidebarSize] = useState('large')
  return (
    <Flex
      pos='sticky'
      left='5'
      h='95vh'
      marginTop='2.5vh'
      boxShadow='0 4px 12px 0 rgba(0, 0, 0, 0.05)'
      borderRadius={sidebarSize === 'small' ? '15px' : '20px'}
      w={sidebarSize === 'small' ? '75px' : '280px'}
      flexDir='column'
      justifyContent='space-between'
      bgColor={'brand.500'}
      color={'white'}
    >
      <Flex
        p='5%'
        flexDir='column'
        w='100%'
        alignItems={sidebarSize === 'small' ? 'center' : 'flex-start'}
        as='nav'
      >
        <IconButton
          background='none'
          color={'white'}
          mt={5}
          _hover={{ background: 'none' }}
          icon={<FiMenu />}
          onClick={() => {
            if (sidebarSize === 'small') changeSidebarSize('large')
            else changeSidebarSize('small')
          }}
          aria-label={''}
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
          icon={FiDollarSign}
          title='Dispute Resolution'
          active={false}
        />
        <SidebarItem
          sidebarSize={sidebarSize}
          icon={FiBriefcase}
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
        <Divider display={sidebarSize === 'small' ? 'none' : 'flex'} />
        <Flex mt={4} align='center'>
          <Avatar size='sm' src='avatar-1.jpg' />
          <Flex
            flexDir='column'
            ml={4}
            display={sidebarSize === 'small' ? 'none' : 'flex'}
          >
            <Heading as='h3' size='sm'>
              John Doe
            </Heading>
            <Text color='brand.300'>Admin</Text>
          </Flex>
        </Flex>
        <Flex mt={6} display={sidebarSize === 'small' ? 'none' : 'flex'}>
          <Text as={Link}>Settings</Text>
        </Flex>
        <Flex mt={2} display={sidebarSize === 'small' ? 'none' : 'flex'}>
          <Text as={Link}>My Account</Text>
        </Flex>
        <Flex mt={2} display={sidebarSize === 'small' ? 'none' : 'flex'}>
          <Text as={NavLink} to={'/'}>
            Sign Out
          </Text>
        </Flex>
      </Flex>
    </Flex>
  )
}
