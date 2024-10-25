import React from "react";

function useEscapeKey(callback, ...args) {
  console.log(args);
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.code === "Escape") {
        callback(...args);
      }
    };
    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [callback, args]);
}

export default useEscapeKey;
