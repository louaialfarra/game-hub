import useGenre from "@/hooks/useGenre";
import usePlatform from "@/hooks/usePlatform";
import useStoreGame from "@/state-managment/store";
import { Text } from "@chakra-ui/react";

const Heading = () => {
  const { data: genres } = useGenre();
  const { data: platforms } = usePlatform();

  const gameQuery = useStoreGame((s) => s.gameQuery);

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
