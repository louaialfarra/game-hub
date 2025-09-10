import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const limit = 30;

  if (children.length < limit) return <Text>{children}</Text>;

  const Summary = expanded ? children : children.substring(0, 200) + "...";

  return (
    <Text>
      {Summary}
      <Button
        marginX={3}
        colorPalette={"yellow"}
        size={"xs"}
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? "Show Less" : "Show More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
