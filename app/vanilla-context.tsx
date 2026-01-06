"use client";

import { createContext, useContext, useState } from "react";
import Counter from "@/src/components/counter";
import IncrementButton from "@/src/components/increment-button";
import { useMemo } from "react";

export const VanillaContext = createContext({
  count1: 0,
  count2: 0,
  increment1: () => {},
  increment2: () => {},
  incrementAll: () => {},
});

const Provider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);
  const increment1 = () => {
    setCount(count + 1);
  };
  const increment2 = () => {
    setCount2(count2 + 1);
  };
  const incrementAll = () => {
    setCount(count + 1);
    setCount2(count2 + 1);
  };
  const contextValue = {
    count1: count,
    count2: count2,
    increment1: increment1,
    increment2: increment2,
    incrementAll: incrementAll,
  };
  return (
    <VanillaContext.Provider value={contextValue}>
      {children}
    </VanillaContext.Provider>
  );
};

const Counter1 = () => {
  const { count1 } = useContext(VanillaContext);
  return <Counter count={count1} label="Count 1" />;
};

const Counter2 = () => {
  const { count2 } = useContext(VanillaContext);
  // Perform an intentionally slow synchronous computation to block rendering
  const total = Array.from(
    { length: 1e7 },
    (_, i) => (i + count2) % 123
  ).reduce((acc, cur) => acc + cur, 0);
  console.log("total", total);
  return <Counter count={count2} label="Count 2" />;
};

const IncrementAll = () => {
  const { incrementAll } = useContext(VanillaContext);
  return <IncrementButton increment={incrementAll} label="Increment All" />;
};

const Increment1 = () => {
  const { increment1 } = useContext(VanillaContext);
  return <IncrementButton increment={increment1} label="Increment count 1" />;
};

const Increment2 = () => {
  const { increment2 } = useContext(VanillaContext);
  return <IncrementButton increment={increment2} label="Increment count 2" />;
};

export const VanillaContextPage = () => {
  return (
    <Provider>
      <div className="flex items-center flex-col gap-2">
        <div className="flex items-center gap-2">
          <IncrementAll />
          <Increment1 />
          <Increment2 />
        </div>
        <div className="flex items-center gap-2">
          <Counter1 />
          <Counter2 />
        </div>
      </div>
    </Provider>
  );
};

export default VanillaContextPage;
