import ApiClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

interface GameScreenshots {
  id: number;
  image: string;
}

const useGameScreenshot = (gameId: number) => {
  const apiClient = new ApiClient<GameScreenshots>(
    `/games/${gameId}/screenshots`
  );

  return useQuery({
    queryKey: ["gameScreenshoot", gameId],
    queryFn: apiClient.getAll,
  });
};
export default useGameScreenshot;
