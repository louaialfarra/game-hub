import ExpandableText from "@/components/ExpandableText";
import GameAttribute from "@/components/GameAttribute";
import GameScreenshot from "@/components/GameScreenshot";

import GameTrailer from "@/components/GameTrailer";
import useGameDetail from "@/hooks/useGameDetail";
import { Box, GridItem, Heading, SimpleGrid, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useGameDetail(slug!);
  if (isLoading) return <Spinner size={"xl"} />;

  if (error || !data) throw error;

  return (
    <Box padding={5}>
      <SimpleGrid columns={{ base: 1, md: 2 }}>
        <GridItem>
          <Heading>{data.name}</Heading>
          <ExpandableText>{data.description_raw}</ExpandableText>
          <GameAttribute game={data} />
        </GridItem>
        <GridItem>
          <GameTrailer gameId={data.id} />
          <GameScreenshot gameId={data.id} />
        </GridItem>
      </SimpleGrid>
    </Box>
  );
};

export default GameDetail;
