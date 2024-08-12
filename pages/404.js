import React from 'react'
import { Flex } from '@chakra-ui/react'
import classes from './404.module.css'

const notFound = () => {
  return (
    <Flex className={classes.notFound} width="100%" height="100vh" justifyContent="center" alignItems="center" flexDir="column">
        <h1>404</h1>
        <h2>This Page not found</h2>
        <p>Go back to the <a href="/">Homepage</a></p>
    </Flex>
  )
}

export default notFound