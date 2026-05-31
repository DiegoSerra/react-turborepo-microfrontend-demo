import { formatDate } from "@repo/core";
import { useMediaQuery, usePrevious } from "@repo/hooks";
import { Button, Text } from "@repo/ui";
import { useState } from "react";

export const Header = () => {
  const [count, setCount] = useState(0);

  const isDesktop = useMediaQuery('(min-width: 1024px)');
  const previousCount = usePrevious(count);
  
  return (
    <header>
      <Text>Header {formatDate(new Date())}</Text>
       <Text>Desktop: {String(isDesktop)}</Text>
      <Text>Current: {count}</Text>
      <Text>Previous: {String(previousCount)}</Text>
      <Button onClick={() => setCount(count + 1)}>Increment</Button>
    </header>
  );
}