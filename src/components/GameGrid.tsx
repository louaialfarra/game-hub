import useGames from "@/hooks/useGames";
import { Button, GridItem, SimpleGrid, Spinner } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameSkeletonCard from "./GameSkeletonCard";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const GameGrid = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    hasNextPage,
  } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8];
  if (error) return <p>{error.message}</p>;

  const PagesLength =
    data?.pages.reduce((acc, curr) => acc + curr.results.length, 0) || 0;
  console.log(data?.pages, "thois os c");

  return (
    <>
      <InfiniteScroll
        dataLength={PagesLength}
        next={() => fetchNextPage()}
        hasMore={hasNextPage}
        loader={<Spinner />}
      >
        <SimpleGrid
          columns={{ sm: 1, md: 1, lg: 2, xl: 4 }}
          gap={"20px"}
          padding={"10px"}
        >
          {isLoading && skeletons.map((s) => <GameSkeletonCard key={s} />)}
          {data?.pages.map((page, i) => (
            <React.Fragment key={i}>
              {page.results.map((game) => (
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
      </InfiniteScroll>
    </>
  );
};
export default GameGrid;
