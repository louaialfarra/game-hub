import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const CardBox = ({ children }: Props) => {
  return (
    <Box borderRadius={"10px"} overflow={"hidden"} gap={"6px"}>
      {children}
    </Box>
  );
};
export default CardBox;
