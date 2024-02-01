import { Flex } from '@chakra-ui/react'
import SIDEBAR from '../components/Sidebar'
import PAGETITLE from '../components/PageHeader'
import MODULEMENU from '../components/ModuleMenu'

const SystemLayout = () => (
  <Flex>
    <SIDEBAR />
    <Flex flexDir={'column'} w='100%'>
      <PAGETITLE title={'Membership Menu'} />
      <MODULEMENU />
    </Flex>
  </Flex>
)

export default SystemLayout
