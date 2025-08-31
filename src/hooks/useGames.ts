import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import type { Platforms } from "./usePlatform";
import type { GameQuery } from "@/App";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
}
const apiClient = new ApiClient<Game>("/games");

const useGames = (gameQuery: GameQuery) =>
  useQuery({
    queryKey: [gameQuery],
    queryFn: () =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genre?.id,
          parent_platforms: gameQuery.platform?.id,
          ordering: gameQuery.sort,
          search: gameQuery.search,
        },
      }),
  });

export default useGames;
