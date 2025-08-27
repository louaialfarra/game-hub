import { HStack, Icon } from "@chakra-ui/react";
import { FaWindows } from "react-icons/fa";
import { FaPlaystation } from "react-icons/fa";
import { FaXbox } from "react-icons/fa";
import { SiNintendo } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FaAndroid } from "react-icons/fa";
import { FaLinux } from "react-icons/fa";
import { MdPhoneIphone } from "react-icons/md";
import type { IconType } from "react-icons";
import { BsGlobe } from "react-icons/bs";
import type { Platforms } from "@/hooks/usePlatform";

interface Props {
  platform: { platform: Platforms }[];
}

const GamePlatform = ({ platform }: Props) => {
  const ColorMap: { [key: string]: IconType } = {
    pc: FaWindows,
    mac: FaApple,
    xbox: FaXbox,
    playstation: FaPlaystation,
    web: BsGlobe,
    nintendo: SiNintendo,
    linux: FaLinux,
    android: FaAndroid,
    ios: MdPhoneIphone,
  };

  return (
    <>
      <HStack>
        {platform.map((p) => (
          <Icon key={p.platform.id} as={ColorMap[p.platform.slug] || BsGlobe} />
        ))}
      </HStack>
    </>
  );
};
export default GamePlatform;
