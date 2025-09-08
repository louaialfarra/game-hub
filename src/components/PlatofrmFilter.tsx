import usePlatform from "@/hooks/usePlatform";
import useStoreGame from "@/state-managment/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const PlatformFilter = () => {
  const setPlatformId = useStoreGame((s) => s.setPlatformId);
  const platformId = useStoreGame((s) => s.gameQuery.platformId);

  const { data, error } = usePlatform();

  const platformName = data.results.find((p) => p.id === platformId);
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
                  onClick={() => setPlatformId(p.id)}
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
