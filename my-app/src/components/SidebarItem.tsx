import {
  Flex,
  Text,
  Icon,
  Link,
  Menu,
  MenuButton,
  // MenuList,
  Box
} from '@chakra-ui/react'

export default function SidebarItem ({
  icon,
  title,
  active,
  sidebarSize
}: {
  icon: any
  title: string
  active: boolean
  sidebarSize: string
}) {
  return (
    <Box
      mt={30}
      w='100%'
      alignItems={sidebarSize === 'small' ? 'center' : 'left'}
    >
      <Menu placement='right'>
        <Link
          backgroundColor={active ? 'brand.300' : 'none'}
          p={3}
          borderRadius={8}
          _hover={{
            textDecor: 'none',
            backgroundColor: active || '#688f6e',
            color: 'white'
          }}
          w={sidebarSize}
        >
          <MenuButton w='100%'>
            <Flex>
              <Icon
                as={icon}
                fontSize='xl'
                color={active ? 'black' : 'white'}
              />
              <Text
                textAlign={'left'}
                ml={5}
                display={sidebarSize === 'small' ? 'none' : 'flex'}
                color={active ? 'black' : 'white'}
                fontWeight={active ? 'bold' : 'normal'}
              >
                {title}
              </Text>
            </Flex>
          </MenuButton>
        </Link>
        {/* <MenuList
          py={0}
          border='none'
          w={200}
          h={200}
          bgColor={'brand.400'}
          opacity={0}
        ></MenuList> */}
      </Menu>
    </Box>
  )
}
