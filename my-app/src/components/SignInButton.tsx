import { Button } from '@chakra-ui/react'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'

function SignInButton () {
  const [isButtonClicked, setButtonClicked] = useState(false)

  const handleClick = () => {
    if (!isButtonClicked) {
      setButtonClicked(true)
    }
  }

  return (
    <Button
      as={NavLink}
      to={'sign-in'}
      colorScheme='yellow'
      fontFamily='font.body'
      fontWeight={{ base: '650', md: '800' }}
      borderRadius='5'
      onClick={handleClick}
      disabled={isButtonClicked}
    >
      Sign in
    </Button>
  )
}

export default SignInButton
