import * as React from "react";
import { ChakraProvider, theme } from "@chakra-ui/react";
type ProvidersProps = { children: React.ReactNode };

export function Providers({ children }: ProvidersProps) {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
}
