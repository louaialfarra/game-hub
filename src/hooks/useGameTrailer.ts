import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";
interface GameTrailer {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
}

const useGameTrailer = (gameId: number) => {
  const apiClient = new ApiClient<GameTrailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ["gameTrailer", gameId],
    queryFn: apiClient.getAll,
  });
};

export default useGameTrailer;
