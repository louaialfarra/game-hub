"use client";

import {
  ChakraProvider,
  // createSystem,
  // defaultConfig,
  defaultSystem,
  // defineConfig,
} from "@chakra-ui/react";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

// const config = defineConfig({
//   theme: {
//     tokens: {
//       colors: {
//         // gray: {
//         //   50: { value: "#f2f2f2" },
//         //   100: { value: "#d9d9d9" },
//         //   200: { value: "#bfbfbf" },
//         //   300: { value: "#a6a6a6" },
//         //   400: { value: "#8c8c8c" },
//         //   500: { value: "#737373" },
//         //   600: { value: "#595959" },
//         //   700: { value: "#404040" },
//         //   800: { value: "#262626" },
//         //   900: { value: "#0d0d0d" },
//         // },
//       },
//     },
//   },
// });

// const system = createSystem(defaultConfig, config);
export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={defaultSystem}>
      <ColorModeProvider {...props} defaultTheme="dark" />
    </ChakraProvider>
  );
}
