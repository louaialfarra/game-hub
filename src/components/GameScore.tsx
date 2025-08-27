import { Badge } from "@chakra-ui/react";

interface Props {
  score: number;
}

const GameScore = ({ score }: Props) => {
  const bgColor =
    score > 90 ? "green.800" : score > 80 ? "yellow.800" : "red.800";

  return (
    <>
      <Badge bg={bgColor}>{score ?? 0}</Badge>
    </>
  );
};
export default GameScore;
