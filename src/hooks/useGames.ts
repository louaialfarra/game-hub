import { useInfiniteQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
import type { Platforms } from "./usePlatform";
import useStoreGame from "@/state-managment/store";
import type { Genre } from "./useGenre";

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platforms }[];
  metacritic: number;
  slug: string;
  description_raw: string;
  platforms: { platform: Platforms }[];
  genres: Genre[];
  publishers: Publisher[];
}

interface Publisher {
  id: number;
  name: string;
}
const apiClient = new ApiClient<Game>("/games");

const useGames = () => {
  const gameQuery = useStoreGame((s) => s.gameQuery);
  return useInfiniteQuery({
    queryKey: [gameQuery],
    queryFn: ({ pageParam }) =>
      apiClient.getAll({
        params: {
          genres: gameQuery.genreId,
          parent_platforms: gameQuery.platformId,
          ordering: gameQuery.sort,
          search: gameQuery.search,
          page: pageParam,
        },
      }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      if (lastPage.next) return allPages.length + 1;
    },
    staleTime: 24 * 60 * 60 * 1000, //24h
  });
};

export default useGames;
