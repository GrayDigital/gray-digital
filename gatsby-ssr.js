import React from "react";
import { ColorModeScript } from "@chakra-ui/react";
import { WrapRootElement } from "./src/components/WrapRootElement";
import theme from "./src/@chakra-ui/theme";

export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript
      initialColorMode={theme.config.initialColorMode}
      key="chakra-ui-no-flash"
    />,
  ]);
};

export const wrapRootElement = ({ element }, pluginOptions) => {
  return <WrapRootElement element={element} {...pluginOptions} />;
};
