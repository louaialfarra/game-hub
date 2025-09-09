import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
import type { Game } from "./useGames";

const apiClient = new ApiClient<Game>("/games");

const useGameDetail = (slug: string) =>
  useQuery({
    queryKey: ["gameDetail", slug],
    queryFn: () => apiClient.Get(slug),
  });

export default useGameDetail;
