import React, { useEffect, useRef, useState } from 'react';

const Counter: React.FC<{}> = () => {
  const [value, setValue] = useState<number>(0);

  const incriment = () => {
    setValue((prevSrate: number) => prevSrate + 1);
  };

  const decrement = () => {
    setValue((prevSrate: number) => prevSrate - 1);
  };

  const renderTimes = useRef<number>(0);
  useEffect(() => {
    renderTimes.current = renderTimes.current + 1;
  });

  return (
    <div>
      <div>value: {value}</div>
      <button onClick={incriment}>+1</button>
      <button onClick={decrement}>-1</button>
      <div>This component was re-rendered {renderTimes.current} times! </div>
    </div>
  );
};

export default Counter;
