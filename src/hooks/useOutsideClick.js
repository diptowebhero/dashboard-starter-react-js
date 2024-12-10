import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    const handleClickOutSide = (e) => {
      if (!ref.current?.contains(e.target)) {
        callback();
      }
    };
    document.addEventListener("mousedown", handleClickOutSide);

    return () => document.removeEventListener("mousedown", handleClickOutSide);
  }, [ref, callback]);
};
