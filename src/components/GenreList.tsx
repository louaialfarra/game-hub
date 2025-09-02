import useGenre, { type Genre } from "@/hooks/useGenre";
import { Button, HStack, Image, Link, List, Spinner } from "@chakra-ui/react";

interface Props {
  selectedGenre: (genreParam: Genre) => void;
}

const GenreList = ({ selectedGenre }: Props) => {
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
          <Link onClick={() => selectedGenre(g)}>
            <List.Item key={g.id}>
              <Image
                src={g.image_background}
                boxSize={"32px"}
                borderRadius={"8px"}
              />
              <Button variant={"plain"}>{g.name}</Button>
            </List.Item>
          </Link>
        </HStack>
      ))}
    </List.Root>
  );
};
export default GenreList;
