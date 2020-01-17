
import React from "react";
import { AppContext } from "ink";
import App from "./App";

const Wrapper = ({ command, args }: { command: string, args: string[] }) => {
  return (
    <AppContext.Consumer>
      {({exit}) => (<App args={args} command={command} exit={exit} />)}
    </AppContext.Consumer>
  );
}

export default Wrapper;
