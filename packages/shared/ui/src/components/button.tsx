import { useContext } from "react";
import { DisabledContext } from "@repo/core";

function Button({ onClick, children }: { onClick?: () => void; children: React.ReactNode }) {
  const contextDisabled = useContext(DisabledContext);

  return (
    <button disabled={contextDisabled} onClick={onClick}>
      {children}
    </button>
  );
}

export { Button };