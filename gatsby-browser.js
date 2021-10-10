import * as React from "react";
import { WrapRootElement } from "./src/components/WrapRootElement";

export const wrapRootElement = ({ element }, pluginOptions) => {
  return <WrapRootElement element={element} {...pluginOptions} />;
};
