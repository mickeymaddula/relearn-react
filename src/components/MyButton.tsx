import React, { useState } from "react";

const MyButton = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount(count + 1)}>I'm a button</button>
      <span>Clicked {count} times</span>
    </>
  );
};

export default MyButton;
