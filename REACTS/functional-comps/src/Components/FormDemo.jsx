import { useState } from "react";

export function User() {
  const [message, setMessage] = useState("welcome to user component");

  return (
    <div>
      <h2>{message}</h2>
      <button
        onClick={() => {
          setMessage("i am changed by setMessage !!!");
        }}
      >
        {" "}
        change message
      </button>
    </div>
  );
}
