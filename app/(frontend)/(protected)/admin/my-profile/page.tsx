'use client'

import { Avatar, Box, Flex, Heading, Text } from '@chakra-ui/react'
import EditProfileButton from '@/components/page-myProfile/EditProfileButton'
import MembershipInformation from './_components/MembershipInformation'

export default function MyProfile () {
  const biography =
    'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat sed ratione sapiente sint perferendis facere consequatur expedita repellat eum molestias. Deserunt, quos explicabo facilis quia dolorem a obcaecati est quisquam iusto aliquam voluptate aspernatur, omnis debitis delectus dolorum? Repellendus optio id iure obcaecati reiciendis molestias delectus vero iusto voluptatum commodi autem incidunt, veniam totam error amet dolorum. In consequatur suscipit obcaecati, repudiandae dolorem sunt hic et voluptates sequi doloribus dolore. Autem earum provident vero consectetur doloribus aperiam natus dolorem ipsam, vel nulla quaerat sapiente adipisci perspiciatis tempora, officiis iure dignissimos nihil facilis officia. Perspiciatis quos nobis optio tempore dicta porro doloribus, hic omnis iure! Optio asperiores magni saepe hic et quibusdam perspiciatis id maiores sequi laboriosam. Molestias labore ducimus doloremque totam, rerum quos vel voluptates itaque. Minus pariatur voluptatem animi voluptatibus vero aspernatur ea reprehenderit dignissimos dicta veniam. Sed ipsum tempora fuga autem sapiente asperiores unde minima ratione, commodi excepturi totam recusandae adipisci, quasi vitae molestiae error. Ratione perferendis vitae tempore voluptatem sit cupiditate iure debitis repellat optio reprehenderit expedita porro sapiente vel neque deleniti ut ab incidunt voluptatum numquam, molestias laboriosam autem. Cum praesentium est, eius voluptates vel, voluptatibus nobis fuga, et quisquam consectetur aut! Praesentium laudantium explicabo quaerat?'

  const contactNumber = '09XX XXX XXXX'

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
              John Doe
            </Heading>
            <Box fontFamily={'font.body'}>
              <Text fontSize={'24px'}>Admin | President</Text>
              <Text fontSize={'sm'} lineHeight={0.5} mt='1rem'>
                Status:
              </Text>
              <Text fontSize={'24px'} color={'green'}>
                Active
              </Text>
            </Box>
          </Box>
        </Flex>
        {/* Edit Profile Button */}
        <EditProfileButton
          biography={biography}
          contactNumber={contactNumber}
        />
      </Flex>
      <MembershipInformation
        biography={biography}
        contactNumber={contactNumber}
      />
    </Box>
  )
}
