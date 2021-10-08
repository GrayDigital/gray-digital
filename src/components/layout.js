import * as React from "react"
import PropTypes from "prop-types"
import {
  ColorModeScript,
  Box,
  Button,
  Flex,
  HStack,
  useColorModeValue as mode,
  Image,
  ChakraProvider,
} from "@chakra-ui/react"
import { StaticImage } from "gatsby-plugin-image"
import { MobileNav } from "./MobileNav"
import { NavLink } from "./NavLink"
import theme from "../@chakra-ui/gatsby-plugin/theme"

const Layout = ({ children }) => {
  console.log(theme)
  return (
    <>
      <ChakraProvider theme={theme} resetCSS={true}>
        <ColorModeScript />
        <Box minH="480px">
          <Box as="header" bg={mode("white", "black")} borderBottomWidth="1px">
            <Box maxW="7xl" mx="auto" py="4" px={{ base: "6", md: "8" }}>
              <Flex as="nav" justify="space-between">
                <HStack spacing="8">
                  <Box as="a" href="/" rel="home">
                    <StaticImage
                      placeholder="none"
                      layout="fixed"
                      width={107}
                      height={30}
                      src="../images/gray_digital_logo_white.png"
                      alt="Gray Digital Logo"
                    />
                  </Box>
                </HStack>
                <Flex align="center">
                  <HStack spacing="8" display={{ base: "none", md: "flex" }}>
                    <NavLink.Desktop>Our Work</NavLink.Desktop>
                    <NavLink.Desktop>Services</NavLink.Desktop>
                    <NavLink.Desktop>Company</NavLink.Desktop>
                    <NavLink.Desktop>Team</NavLink.Desktop>
                    <NavLink.Desktop>Insights</NavLink.Desktop>
                    <NavLink.Desktop>Contact</NavLink.Desktop>
                    <NavLink.Desktop active>[LN]</NavLink.Desktop>
                    <Button bg="white" color="black" size="md" rounded="full">
                      Join Us
                    </Button>
                  </HStack>
                  <Box ml="5">
                    <MobileNav />
                  </Box>
                </Flex>
              </Flex>
            </Box>
          </Box>
        </Box>

        <main>{children}</main>
      </ChakraProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
