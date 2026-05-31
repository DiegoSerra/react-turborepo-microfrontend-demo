import { PropsWithChildren } from "react";
import { registerRemotes } from "@module-federation/runtime";

export const RemoteManager = ({ children }: PropsWithChildren) => {
  const remotes = [
    {
      type: "module",
      name: "remote",
      entry: "http://localhost:4174/remote/remoteEntry.js",
      entryGlobalName: "remote",
      shareScope: "default",
    },
    {
      type: "module",
      name: "remote-2",
      entry: "http://localhost:4175/remote-2/remoteEntry.js",
      entryGlobalName: "remote-2",
      shareScope: "default",
    },
  ];

  registerRemotes(remotes);

  return children;
};
