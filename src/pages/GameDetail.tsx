import ExpandableText from "@/components/ExpandableText";
import useGameDetail from "@/hooks/useGameDetail";
import { Heading, Spinner } from "@chakra-ui/react";
import { useParams } from "react-router-dom";

const GameDetail = () => {
  const { slug } = useParams();

  const { data, error, isLoading } = useGameDetail(slug!);
  if (isLoading) return <Spinner size={"xl"} />;

  if (error || !data) throw error;

  return (
    <>
      <Heading>{data.name}</Heading>
      <ExpandableText>{data.description_raw}</ExpandableText>
    </>
  );
};

export default GameDetail;
