import { Box, HStack, Image, Text } from "@chakra-ui/react";
import { ColorModeButton } from "./ui/color-mode";
import SearchBar from "./SearchBar";
import logo from "../assets/logo.webp";

interface Props {
  onSearch: (searchParam: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <HStack justifyContent={"space-between"} padding={"10px"}>
      <HStack>
        <Image src={logo} height={20} borderRadius={20} />
        <Text whiteSpace={"nowrap"}>Logo Here </Text>
      </HStack>
      <Box flex={1}>
        <SearchBar onSearch={onSearch} />
      </Box>

      <ColorModeButton />
    </HStack>
  );
};
export default NavBar;
