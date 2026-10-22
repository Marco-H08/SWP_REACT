import { useState } from "react";
type Props = {};

export default function BackwardsCount({}: Props) {
  const [counter, setCounter] = useState(0);

  return (
    <div
      onClick={() => {
        let newValue = counter - 1;
        setCounter(newValue);
      }}
    >
      <div>Hier klicken!!!</div>
      <div>Counter: {counter}</div>
    </div>
  );
}
