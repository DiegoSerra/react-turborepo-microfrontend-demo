import { loadRemote } from "@module-federation/runtime";
import { lazy } from "react";

export const Remote = lazy(() => loadRemote("remote/remote-app") as Promise<any>);
export const Remote2 = lazy(() => loadRemote("remote-2/remote-app") as Promise<any>);
export const Remote2Counter = lazy(() => loadRemote("remote-2/counter") as Promise<any>);
