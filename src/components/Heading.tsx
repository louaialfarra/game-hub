import type { GameQuery } from "@/App";
import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import { Text } from "@chakra-ui/react";
interface Props {
  gameQuery: GameQuery;
}

const Heading = ({ gameQuery }: Props) => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const GenreName = genres.results.find((g) => g.id === gameQuery.genreId);
  const platformsName = platforms.results.find(
    (p) => p.id === gameQuery.platformId
  );

  const Heading = `${GenreName?.name || ""} ${
    platformsName?.name || ""
  } Games `;

  return (
    <>
      <Text fontSize={50}>{Heading}</Text>
    </>
  );
};
export default Heading;
