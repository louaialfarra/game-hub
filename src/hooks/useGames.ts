import type { GameQuery } from "@/App";
import useData from "./useData";
import type { Platforms } from "./usePlatform";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}

const useGames = (gameQuery: GameQuery) =>
  useData<Game>(
    "/games",
    {
      params: {
        genres: gameQuery.genre?.id,
        platforms: gameQuery.platform?.id,
        ordering: gameQuery.sort,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );

export default useGames;
