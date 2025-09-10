import { Text } from "@chakra-ui/react";
import GameDefenition from "./GameDefenition";
import GameScore from "./GameScore";
import type { Game } from "@/hooks/useGames";

interface Props {
  game: Game;
}

const GameAttribute = ({ game }: Props) => {
  return (
    <>
      <GameDefenition term="Platforms">
        {game.parent_platforms.map((p) => (
          <Text key={p.platform.id}>{p.platform.name}</Text>
        ))}
      </GameDefenition>
      <GameDefenition term="Score">
        <GameScore score={game.metacritic} />
      </GameDefenition>
      <GameDefenition term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </GameDefenition>
      <GameDefenition term="Publisher">
        {game.publishers.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </GameDefenition>
    </>
  );
};
export default GameAttribute;
