import useGames from "@/hooks/useGames";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug: gameSlug } = useParams();

  const { data } = useGames();

  const game = data?.pages
    .flatMap((p) => p.results)
    .find((game) => game.slug === gameSlug);

  return (
    <>
      <h1>
        game detail {game?.name} {gameSlug}
      </h1>
    </>
  );
};

export default GameDetail;
