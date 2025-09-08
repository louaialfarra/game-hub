import useGenre from "@/hooks/useGenre";
import useStoreGame from "@/state-managment/store";
import {
  Button,
  HStack,
  Image,
  Link,
  List,
  Spinner,
  Text,
} from "@chakra-ui/react";

const GenreList = () => {
  const setGenreid = useStoreGame((s) => s.setGenreid);
  const genreId = useStoreGame((s) => s.gameQuery.genreId);

  const { data, isLoading } = useGenre();

  return (
    <List.Root variant={"plain"}>
      {isLoading && (
        <p>
          <Spinner boxSize={"70px"} />
        </p>
      )}
      {data?.results.map((g) => (
        <HStack gap={"12px"} marginBottom={"8px"} key={g.id}>
          <Link onClick={() => setGenreid(g.id)}>
            <List.Item key={g.id}>
              <Image
                src={g.image_background}
                boxSize={"32px"}
                borderRadius={"8px"}
              />
              <Button variant={"plain"}>
                <Text fontWeight={genreId === g.id ? "bold" : "normal"}>
                  {g.name}
                </Text>
              </Button>
            </List.Item>
          </Link>
        </HStack>
      ))}
    </List.Root>
  );
};
export default GenreList;
