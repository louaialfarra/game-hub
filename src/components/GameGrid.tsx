import useGames from "@/hooks/useGames";
import { Button, GridItem, SimpleGrid } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeletonCard from "./GameSkeletonCard";
import type { GameQuery } from "@/App";
import React from "react";

interface Props {
  GameQuery: GameQuery;
}

const GameGrid = ({ GameQuery }: Props) => {
  const { data, error, isLoading, fetchNextPage, isFetchingNextPage } =
    useGames(GameQuery);
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <SimpleGrid
        columns={{ sm: 1, md: 1, lg: 2, xl: 4 }}
        gap={"20px"}
        padding={"10px"}
      >
        {isLoading && skeletons.map((s) => <GameSkeletonCard key={s} />)}
        {data?.pages.map((page, i) => (
          <React.Fragment key={i}>
            {" "}
            {page.map((game) => (
              <GridItem key={game.id}>
                <GameCard game={game} />
              </GridItem>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      <Button margin={3} onClick={() => fetchNextPage()}>
        {isFetchingNextPage ? "Loading...." : "Load More "}
      </Button>
    </>
  );
};
export default GameGrid;
