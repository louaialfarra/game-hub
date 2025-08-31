import genres from "@/data/genres";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";

const apiClient = new ApiClient<Genre>("/genres");

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const useGenre = () =>
  useQuery({
    queryKey: ["genres"],
    queryFn: apiClient.getAll,

    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: genres,
  });

export default useGenre;
