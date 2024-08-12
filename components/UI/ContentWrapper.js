import React from 'react'
import { Flex } from '@chakra-ui/react'

const ContentWrapper = (props) => {
  return (
    <Flex width="100%" height="100vh" backgroundColor={props.c}>{props.children}</Flex>
  )
}

export default ContentWrapper