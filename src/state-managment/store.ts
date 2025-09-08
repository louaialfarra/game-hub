import { create } from "zustand";

interface GameQuery {
  genreId?: number;
  platformId?: number;
  sort?: string;
  search?: string;
}
interface GameStoreType {
  gameQuery: GameQuery;
  setSearchtext: (searchParam: string) => void;
  setGenreid: (genreParam: number) => void;
  setPlatformId: (platformParam: number) => void;
  setSort: (sortParam: string) => void;
}

const useStoreGame = create<GameStoreType>((set) => ({
  gameQuery: {},
  setSearchtext: (searchParam) =>
    set(() => ({ gameQuery: { search: searchParam } })),
  setGenreid: (genreParam) =>
    set((store) => ({
      ...store.gameQuery,
      gameQuery: { genreId: genreParam },
    })),
  setPlatformId: (platformParam) =>
    set((store) => ({
      ...store.gameQuery,
      gameQuery: { platformId: platformParam },
    })),
  setSort: (sortParam) =>
    set((store) => ({ ...store.gameQuery, gameQuery: { sort: sortParam } })),
}));

export default useStoreGame;
