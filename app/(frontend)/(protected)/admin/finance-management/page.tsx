'use client'

import { Flex } from '@chakra-ui/react'
import ModuleMenuCard from '@/components/page-moduleMenu/ModuleMenuCard'

export default function FinanceManagementMenu () {
  const homeownerFinanceButtons = [
    {
      category: 'Homeowners',
      category_buttons: ['HOA Dues Payment Record'],
      category_hrefs: ['/admin/finance-management/dues-payment-record'],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  const hoaOfficerAdminFinanceButtons = [
    {
      category: 'Admins & Officers',
      category_buttons: [
        'HOA Income Statements',
        'HOA Cash Flow Statement',
        'HOA Balance Sheets',
        'HOA Budget Reports'
      ],
      category_hrefs: [
        '/admin/finance-management/income-statements',
        '/admin/finance-management/cash-flow-statement',
        '/admin/finance-management/balance-sheets',
        '/admin/finance-management/budget-reports'
      ],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?',
        '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?',
        '3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?',
        '4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  return (
    <Flex p='1rem' gap='2.5rem'>
      {/* Homeowner Finance Buttons */}
      {homeownerFinanceButtons.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {/* HOA Admin and Officer Buttons */}
      {hoaOfficerAdminFinanceButtons.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}
    </Flex>
  )
}
