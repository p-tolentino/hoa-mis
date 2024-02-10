'use client'

import { Flex } from '@chakra-ui/react'
import ModuleMenuCard from '@/components/system/ModuleMenuCard'

export default function FinanceManagementMenu () {
  const homeownerReportsMenuCard = [
    {
      category: 'Homeowner Reports (Admin/Officers/BOD View)',
      category_buttons: ['Homeowner Payment Record'],
      category_hrefs: ['/admin/finance-management/homeowner-payment-record'],
      category_descriptions: [
        'View the payment record of each homeowner to determine whether they currently have any outstanding balances.'
      ]
    }
  ]

  const fundManagementMenuCard = [
    {
      category: 'Fund Management (Admin/Treasurer)',
      category_buttons: ['Income & Expense Management', 'Budget Planning'],
      category_hrefs: [
        '/admin/finance-management/income-expense-management',
        '/admin/finance-management/budget-planning'
      ],
      category_descriptions: [
        "Enter the organization's revenues and expenditures, and access its reports.",
        'Enter estimated values for organizational funds and expenses to generate a visual representation of the organizational budget for a specified duration.'
      ]
    }
  ]

  const yourFinancesMenuCard = [
    {
      category: 'Your Finances (Homeowner View)',
      category_buttons: ['Statement of Account', 'Payment History'],
      category_hrefs: [
        '/admin/finance-management/statement-of-account',
        '/admin/finance-management/payment-history'
      ],
      category_descriptions: [
        "View your outstanding balance to the Homeowners' Association.",
        "View all payments made to the Homeowners' Association."
      ]
    }
  ]

  return (
    <Flex gap='2.5rem'>
      {/* Homeowner Reports Buttons */}
      {homeownerReportsMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {/* Fund Management Buttons */}
      {fundManagementMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {/* Your Finances Buttons */}
      {yourFinancesMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}
    </Flex>
  )
}
