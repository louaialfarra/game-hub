import genres from "@/data/genres";
// import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  slug: string;
  image_background: string;
}
const useGenre = () => ({ data: genres, error: null, isLoading: null });

export default useGenre;
