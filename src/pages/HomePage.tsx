import GameGrid from "@/components/GameGrid";
import GenreList from "@/components/GenreList";
import PlatformFilter from "@/components/PlatofrmFilter";
import Sort from "@/components/Sort";
import { Grid, GridItem, Heading, HStack } from "@chakra-ui/react";

const HomePage = () => {
  return (
    <>
      <Grid
        templateAreas={{ base: ` " main"`, lg: ` "aside main"` }}
        templateColumns={{ base: "1fr", lg: "20% 1fr", xl: "15% 1fr" }}
      >
        <GridItem
          display={{ base: "none", lg: "block" }}
          area="aside"
          padding={"10px"}
        >
          <GenreList />
        </GridItem>

        <GridItem area="main">
          <Heading />
          <HStack padding={3}>
            <PlatformFilter />
            <Sort />
          </HStack>

          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
