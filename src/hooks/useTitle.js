import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `BrainSprouts | ${title}`;
  }, [title]);
};

export default useTitle;