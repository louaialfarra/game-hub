import { Grid, GridItem, HStack } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import type { Genre } from "./hooks/useGenre";
import PlatformFilter from "./components/PlatofrmFilter";
import Sort from "./components/Sort";
import Heading from "./components/Heading";
import type { Platforms } from "./hooks/usePlatform";

export interface GameQuery {
  genre: Genre | null;
  platform: Platforms | null;
  sort: string;
  search: string;
}

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  // const [selectedGenre, setSelectedGenre] = useState<Genre | null>(null);
  // const [selectedPlatform, setSelectedPlatform] = useState<Platform | null>(
  //   null
  // );

  return (
    <Grid
      templateAreas={{ base: `"nav" " main"`, lg: `"nav nav" "aside main"` }}
      templateColumns={{ base: "1fr", lg: "20% 1fr", xl: "15% 1fr" }}
    >
      <GridItem area="nav">
        <NavBar onSearch={(s) => setGameQuery({ ...gameQuery, search: s })} />
      </GridItem>
      <GridItem
        display={{ base: "none", lg: "block" }}
        area="aside"
        padding={"10px"}
      >
        <GenreList
          selectedGenre={(g) => setGameQuery({ ...gameQuery, genre: g })}
        />
      </GridItem>

      <GridItem area="main">
        <Heading gameQuery={gameQuery} />
        <HStack padding={3}>
          <PlatformFilter
            onSelectedPlatform={(p) =>
              setGameQuery({ ...gameQuery, platform: p })
            }
            selectedPlatform={gameQuery.platform}
          />
          <Sort
            Onsort={(s) => setGameQuery({ ...gameQuery, sort: s })}
            selectedSort={gameQuery.sort}
          />
        </HStack>

        <GameGrid GameQuery={gameQuery} />
      </GridItem>
    </Grid>
  );
}

export default App;
