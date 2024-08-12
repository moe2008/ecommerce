import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'
const DashboardNavLink = (props) => {
  return (
    <Box
        marginBottom={["0rem", "0rem", "2rem"]}
        _hover={{ cursor: "pointer" }}
        display="flex"
        flexDirection="row"
        alignItems="center"
        justifyContent="center"
        onClick={props.setView}
      >
        <Image
          src={props.img}
          height={"1rem"}
          width={"1rem"}
          marginRight={"1"}
          display={["none", "none", "block"]}
        />
        <Text color="#F3F3F3">{props.name}</Text>
      </Box>
  )
}

export default DashboardNavLink