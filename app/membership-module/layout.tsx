import { Box, Flex } from '@chakra-ui/react'
import Sidebar from '@/components/system-components/Sidebar'
import PageHeader from '@/components/system-components/PageHeader'

export default function MyProfileLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Flex>
      <Sidebar />
      <Flex flexDir={'column'} w='100%'>
        <PageHeader title={'My Profile'} />
        <Box p='6'>{children}</Box>
      </Flex>
    </Flex>
  )
}
