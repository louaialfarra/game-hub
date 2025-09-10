import type { Game } from "@/hooks/useGames";
import {
  Box,
  CardBody,
  CardRoot,
  CardTitle,
  HStack,
  Image,
} from "@chakra-ui/react";
import GamePlatform from "./GamePlatform";
import GameScore from "./GameScore";
import noImage from "../assets/no-image.png";
import { useNavigate } from "react-router-dom";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const navigate = useNavigate();
  return (
    <Box
      onClick={() => navigate(`games/${game.slug}`)}
      _hover={{
        transform: "scale(1.03)",
        transition: "transform 0.15s ease-in",
      }}
    >
      <CardRoot
        borderRadius={"10px"}
        overflow={"hidden"}
        gap={"6px"}
        height={{ lg: "380px", xl: "450px" }}
        justifyContent={"space-between"}
      >
        <Image
          src={game.background_image ?? noImage}
          objectFit={"cover"}
          height={{ lg: "250px" }}
        />
        <CardBody height={1}>
          <HStack justifyContent={"space-between"}>
            <GamePlatform platform={game.parent_platforms} />
            <GameScore score={game.metacritic} />
          </HStack>
        </CardBody>
        <CardTitle margin={5} flex={1}>
          {game.name}{" "}
        </CardTitle>
      </CardRoot>
    </Box>
  );
};
export default GameCard;
