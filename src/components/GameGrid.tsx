import useGames from "@/hooks/useGames";
import { GridItem, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeletonCard from "./GameSkeletonCard";
import type { GameQuery } from "@/App";

interface Props {
  GameQuery: GameQuery;
}

const GameGrid = ({ GameQuery }: Props) => {
  const { data, error, isLoading } = useGames(GameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <p>{error}</p>;

  return (
    <SimpleGrid
      columns={{ sm: 1, md: 1, lg: 2, xl: 4 }}
      gap={"20px"}
      padding={"10px"}
    >
      {isLoading && skeletons.map((s) => <GameSkeletonCard key={s} />)}
      {data.map((game) => (
        <GridItem key={game.id}>
          <GameCard game={game} />
        </GridItem>
      ))}
    </SimpleGrid>
  );
};
export default GameGrid;
