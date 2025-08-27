import {
  CardRoot,
  CardTitle,
  CardBody,
  HStack,
  SkeletonText,
  Skeleton,
  Badge,
} from "@chakra-ui/react";

const GameSkeletonCard = () => {
  return (
    <CardRoot
      borderRadius={"10px"}
      overflow={"hidden"}
      gap={"6px"}
      height={{ xl: "350px" }}
      justifyContent={"space-between"}
    >
      <Skeleton height={{ base: "200px", xl: "230px" }} />

      <CardTitle>
        <SkeletonText marginX={5} noOfLines={2} />
      </CardTitle>
      <CardBody>
        <HStack justifyContent={"space-between"}>
          <SkeletonText noOfLines={1} width={"50%"} />
          <Skeleton>
            <Badge>00</Badge>
          </Skeleton>
        </HStack>
      </CardBody>
    </CardRoot>
  );
};
export default GameSkeletonCard;
