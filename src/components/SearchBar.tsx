import { Input, InputGroup } from "@chakra-ui/react";
import { useRef } from "react";
import { BiSearch } from "react-icons/bi";

interface Props {
  onSearch: (searcParam: string) => void;
}

const SearchBar = ({ onSearch }: Props) => {
  const ref = useRef<HTMLInputElement>(null);
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (ref.current) onSearch(ref.current.value);
      }}
    >
      <InputGroup startElement={<BiSearch />}>
        <Input ref={ref} placeholder="Search for Games" borderRadius={18} />
      </InputGroup>
    </form>
  );
};

export default SearchBar;
