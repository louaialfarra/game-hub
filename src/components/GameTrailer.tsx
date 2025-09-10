import useGameTrailer from "@/hooks/useGameTrailer";

interface Props {
  gameId: number;
}

const GameTrailer = ({ gameId }: Props) => {
  const { data, error, isLoading } = useGameTrailer(gameId);
  console.log(data);

  if (isLoading) return null;
  if (error) throw error;

  if (!data?.results[0]) return null;
  return (
    <video
      src={data?.results[0]?.data[480]}
      poster={data?.results[0]?.preview}
      controls
    />
  );
};

export default GameTrailer;
