import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.webp";

const NavBar = () => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image src={logo} height={20} borderRadius={20} />
        <Text whiteSpace={"nowrap"}>Logo Here </Text>
      </HStack>
      <Box flex={1}>
        <SearchBar />
      </Box>

      <ColorModeButton />
    </HStack>
  );
};
export default NavBar;
