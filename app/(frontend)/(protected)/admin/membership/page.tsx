'use client'

import { Flex } from '@chakra-ui/react'

import ModuleMenuCard from '@/components/system/ModuleMenuCard'

export default function MembershipModuleMenu () {
  const userManagementMenuCard = [
    {
      category: 'User Management',
      category_buttons: ['Homeowners Directory', 'Admin Officers Directory'],
      category_hrefs: [
        '/admin/membership/user-management/homeowners-directory',
        '/admin/membership/user-management/admin-officers-directory'
      ],
      category_descriptions: [
        "View the list of all Homeowners' Association-registered homeowners.",
        "View the list of all admins and officers within the Homeowners' Association."
      ]
    }
  ]

  const propertyManagementMenuCard = [
    {
      category: 'Property Management',
      category_buttons: [
        'Browse Properties (Maps)',
        'Property Information Form'
      ],
      category_hrefs: [
        '/admin/membership/property-management/browse-properties',
        '/admin/membership/property-management/property-information-form'
      ],
      category_descriptions: [
        "View property information and browse through properties owned by the Homeowners' Association.",
        "All homeowners are required to complete the property information form before gaining access to the system's functionalities."
      ]
    }
  ]

  const userRegistrationMenuCard = [
    {
      category: 'User Registration',
      category_buttons: ['Membership Form'],
      category_hrefs: ['/admin/membership/user-registration/membership-form'],
      category_descriptions: [
        "All homeowners are required to complete the membership form before gaining access to the system's functionalities."
      ]
    }
  ]

  return (
    <Flex gap='2.5rem'>
      {userManagementMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {propertyManagementMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {userRegistrationMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}
    </Flex>
  )
}
