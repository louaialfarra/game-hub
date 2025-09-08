import useStoreGame from "@/state-managment/store";
import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

const SearchBar = () => {
  const setSearchtext = useStoreGame((s) => s.setSearchtext);

  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) setSearchtext(ref.current.value);
      }}
    >
      <InputGroup startElement={<BiSearch />}>
        <Input ref={ref} placeholder="Search for Games" borderRadius={18} />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
