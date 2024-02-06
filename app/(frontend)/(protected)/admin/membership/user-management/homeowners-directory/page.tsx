'use client'
import { Flex, Box, Text, HStack, Select, Spacer } from '@chakra-ui/react'
import HomeownersDirectoryTable from '@/components/pages-userManagement/HomeownersDirectoryTable'

export default function HomeownersDirectory () {
  return (
    <Box h='100rem'>
      <Flex id='user-management'>
        <HStack w='30%'>
          <Select
            size='sm'
            fontFamily='font.body'
            placeholder='Filter Member Type'
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
            <option>Resident</option>
            <option>Tenant</option>
          </Select>
          <Spacer />
          <Select
            size='sm'
            fontFamily='font.body'
            placeholder='Sort Member Name'
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
      </Flex>
      <HomeownersDirectoryTable />
    </Box>
  )
}
