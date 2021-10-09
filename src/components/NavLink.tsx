import {
  Box,
  chakra,
  Flex,
  HTMLChakraProps,
  Icon,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { Link as GatsbyLink } from "gatsby";

interface DesktopNavLinkProps extends HTMLChakraProps<"a"> {
  active?: boolean;
  to?: string;
}

const DesktopNavLink = (props: DesktopNavLinkProps) => {
  const { active, to, ...rest } = props;

  return (
    <chakra.a
      as={GatsbyLink}
      to={to}
      href="#"
      aria-current={active ? "page" : undefined}
      fontWeight="semibold"
      color={mode("black", "white")}
      {...rest}
      _activeLink={{
        color: mode("blue.600", "blue.300"),
        fontWeight: "bold",
      }}
    />
  );
};

interface MobileNavLinkProps {
  icon: React.ElementType;
  children: React.ReactNode;
  href?: string;
}

const MobileNavLink = (props: MobileNavLinkProps) => {
  const { icon, children, href } = props;
  return (
    <Flex
      as="a"
      href={href}
      m="-3"
      p="3"
      align="center"
      rounded="md"
      cursor="pointer"
      _hover={{ bg: mode("gray.50", "gray.600") }}
    >
      <Icon as={icon} color={mode("blue.600", "blue.400")} fontSize="xl" />
      <Box marginStart="3" fontWeight="medium">
        {children}
      </Box>
    </Flex>
  );
};

export const NavLink = {
  Desktop: DesktopNavLink,
  Mobile: MobileNavLink,
};
