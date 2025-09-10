import { Box, Heading } from "@chakra-ui/react";
import type { ReactNode } from "react";
interface Props {
  term: string;
  children: ReactNode;
}

const GameDefenition = ({ term, children }: Props) => {
  return (
    <Box marginY={7}>
      <Heading color={"gray.600"}>{term}</Heading>
      <dd>{children}</dd>
    </Box>
  );
};
export default GameDefenition;
