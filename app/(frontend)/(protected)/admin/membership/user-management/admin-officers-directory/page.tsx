'use client'
import {
  Flex,
  Box,
  HStack,
  Select,
  Spacer,
  Input,
  Stack
} from '@chakra-ui/react'
import AdminOfficersDirectoryTable from '@/components/pages-userManagement/AdminOfficersDirectoryTable'

export default function AdminOfficersDirectory () {
  return (
    <Box h='100rem'>
      <Flex id='association-contact-directory'>
        <Stack direction='row' w='100%'>
          <HStack w='30%'>
            <Select
              size='sm'
              fontFamily='font.body'
              placeholder='Filter Position'
              // value={selectedMemberType}
              // onChange={handleMemberTypeFilterChange}
            >
              {/* {membertype.map((option) => (
              <option key={option.value} value={option.value}>
                {option.MembetTypeCode}
              </option>
            ))} */}
              <option>President</option>
              <option>Vice President</option>
              <option>Secretary</option>
              <option>Treasurer</option>
            </Select>
            <Spacer />
            <Select
              size='sm'
              fontFamily='font.body'
              placeholder='Sort Name'
              // value={selectedMemberName}
              // onChange={handleMemberTypeFilterChange}
            >
              {/* {membername.map((option) => (
              <option key={option.value} value={option.value}>
                {option.MembetNameCode}
              </option>
            ))} */}
              <option>Ascending</option>
              <option>Descending</option>
            </Select>
          </HStack>
          <Spacer />
          <Stack align='flex-end' w='20%'>
            <Input size='sm' type='string' placeholder='Search' />
          </Stack>
        </Stack>
      </Flex>
      <AdminOfficersDirectoryTable />
    </Box>
  )
}
