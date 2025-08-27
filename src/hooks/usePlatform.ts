import platforms from "@/data/platforms";

// import useData from "./useData";
export interface Platforms {
  id: number;
  name: string;
  slug: string;
}

// const usePlatform = () => useData<Platforms>("/platforms/lists/parents");
const usePlatform = () => ({ data: platforms, error: null, isLoading: false });
export default usePlatform;
// const usePlatform = () => ({ data: platforms, error: null, isLoading: false });
