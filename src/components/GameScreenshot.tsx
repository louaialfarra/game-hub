import useGameScreenshot from "@/hooks/useGameScreenshot";
import { Image, SimpleGrid } from "@chakra-ui/react";
interface Props {
  gameId: number;
}
const GameScreenshot = ({ gameId }: Props) => {
  const { data, isLoading, error } = useGameScreenshot(gameId);

  if (isLoading) return null;
  if (error) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} gap={5}>
      {data?.results.map((s) => (
        <Image key={s.id} src={s.image} />
      ))}
    </SimpleGrid>
  );
};
export default GameScreenshot;
