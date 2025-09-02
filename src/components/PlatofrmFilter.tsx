import usePlatform, { type Platforms } from "@/hooks/usePlatform";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

interface Props {
  onSelectedPlatform: (platparam: Platforms) => void;
  selectedPlatform: number | null;
}

const PlatformFilter = ({ onSelectedPlatform, selectedPlatform }: Props) => {
  const { data, error } = usePlatform();

  const platformName = data.results.find((p) => p.id === selectedPlatform);
  if (error) return;

  return (
    <>
      <Menu.Root>
        <Menu.Trigger asChild>
          <Button variant={"outline"}>
            {platformName?.name || "Platform"}
            <BiChevronDown />
          </Button>
        </Menu.Trigger>
        <Portal>
          <Menu.Positioner>
            <Menu.Content>
              {data.results.map((p) => (
                <Menu.Item
                  value={p.name}
                  key={p.id}
                  onClick={() => onSelectedPlatform(p)}
                >
                  {p.name}
                </Menu.Item>
              ))}
            </Menu.Content>
          </Menu.Positioner>
        </Portal>
      </Menu.Root>
    </>
  );
};
export default PlatformFilter;
