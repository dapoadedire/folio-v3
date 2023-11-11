import type { FC } from "react";
import { useEffect, useRef } from "react";
 
export const Comments: FC = () => {
  const parentRef = useRef<HTMLDivElement>(null);
 
  useEffect(() => {
    const parent = parentRef?.current;
    const script = document.createElement("script");
 
    script.setAttribute("src", "https://utteranc.es/client.js");
    script.setAttribute("repo", "dapoadedire/comments");
    script.setAttribute("issue-term", "pathname");
    script.setAttribute("theme", "github-dark");
    script.setAttribute("crossorigin", "anonymous");
    script.setAttribute("async", "true");
 
    parent?.appendChild(script);
  }, [parentRef]);
 
  return (
    <>
      <div ref={parentRef} />
    </>
  );
};
 