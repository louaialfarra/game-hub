import useStoreGame from "@/state-managment/store";
import { Button, Menu, Portal } from "@chakra-ui/react";
import { BiChevronDown } from "react-icons/bi";

const Sort = () => {
  const setSort = useStoreGame((s) => s.setSort);
  const sortOrder = useStoreGame((s) => s.gameQuery.sort);

  const sort = [
    { value: "name", label: "By Name" },
    { value: "-released", label: "By Released" },
    { value: "added", label: "By Added" },
    { value: "created", label: "By Created" },
    { value: "updated", label: "By Updated" },
    { value: "-metacritic", label: "By Meta" },
  ];
  const Sorting = sort.find((s) => s.value === sortOrder);

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant={"outline"}>
          {Sorting?.label || "Sort by"}
          <BiChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            {sort.map((s) => (
              <Menu.Item
                key={s.value}
                value={s.value}
                onClick={() => setSort(s.value)}
              >
                {s.label}
              </Menu.Item>
            ))}
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};
export default Sort;
