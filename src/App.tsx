import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import PlatformFilter from "./components/PlatofrmFilter";
import Sort from "./components/Sort";
import Heading from "./components/Heading";

function App() {
  return (
    <Grid
      templateAreas={{ base: `"nav" " main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "20% 1fr", xl: "15% 1fr" }}
    >
      <GridItem area="nav">
        <NavBar />
      </GridItem>
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
  );
}

export default App;
