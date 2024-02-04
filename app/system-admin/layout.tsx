'use client'

import { Box, Flex } from '@chakra-ui/react'

import Sidebar from '../components/system-components/Sidebar'
import PageHeader from '../components/system-components/PageHeader'

import React from 'react'

export default function SystemLayout ({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <Flex>
        <Sidebar />
        <Flex flexDir={'column'} w='100%'>
          <PageHeader title={'Membership'} />
          <Box p='6'>{children}</Box>
        </Flex>
      </Flex>
    </>
  )
}
