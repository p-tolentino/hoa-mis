'use client'

import { Flex } from '@chakra-ui/react'

import ModuleMenuCard from '@/components/page-moduleMenu/ModuleMenuCard'

export default function MembershipModuleMenu () {
  const userManagementMenuCard = [
    {
      category: 'User Management',
      category_buttons: ['Homeowners Directory', 'Admin Officers Directory'],
      category_hrefs: [
        '/admin/membership/user-management',
        '/admin/membership/association-contact-directory'
      ],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?',
        '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  const propertyManagementMenuCard = [
    {
      category: 'Property Management',
      category_buttons: [
        'Browse House Lots (Maps)',
        'Property Information Form'
      ],
      category_hrefs: [
        '/admin/membership/property-management',
        '/admin/membership/property-management/property-management-form'
      ],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?',
        '2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  const userRegistrationMenuCard = [
    {
      category: 'User Registration',
      category_buttons: ['Membership Form'],
      category_hrefs: ['/admin/membership/membership-form'],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  const systemSettingsMenuCard = [
    {
      category: 'System Settings',
      category_buttons: ['Button'],
      category_hrefs: ['/admin/membership/'],
      category_descriptions: [
        '1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi, quo veritatis repudiandae amet deserunt pariatur?'
      ]
    }
  ]

  return (
    <Flex p='1rem' gap='1.5rem'>
      {userManagementMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {propertyManagementMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {userRegistrationMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}

      {systemSettingsMenuCard.map((categoryData, index) => (
        <ModuleMenuCard key={index} data={categoryData}></ModuleMenuCard>
      ))}
    </Flex>
  )
}
