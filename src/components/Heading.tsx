import type { GameQuery } from "@/App";
import { Text } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  const Heading = `${gameQuery.genre?.name || ""} ${
    gameQuery.platform?.name || ""
  } Games `;

  return (
    <>
      <Text fontSize={50}>{Heading}</Text>
    </>
  );
};
export default Heading;
