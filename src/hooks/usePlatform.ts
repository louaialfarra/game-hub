import platforms from "@/data/platforms";
import { useQuery } from "@tanstack/react-query";
import ApiClient from "@/services/api-client";
const apiClient = new ApiClient<Platforms>("/platforms/lists/parents");

// import useData from "./useData";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

const usePlatform = () =>
  useQuery({
    queryKey: ["platforms"],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, //24h
    initialData: platforms,
  });
export default usePlatform;
