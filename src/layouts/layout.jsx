import { Header } from "../components/header";
import { Footer } from "../components/footer";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpLong } from "@fortawesome/free-solid-svg-icons";
export const Layout = ({ children }) => {
  // show scroll to top button when user scrolls down 50% of the page

  const [showScroll, setShowScroll] = useState(false);

  const checkScrollTop = () => {
    if (!showScroll && window.scrollY > 500) {
      setShowScroll(true);
    } else if (showScroll && window.scrollY <= 500) {
      setShowScroll(false);
    }
  };

  window.addEventListener("scroll", checkScrollTop);

  return (
    <div
      className="font-BrickGrotesque flex h-full w-full flex-col bg-dark text-white">
      <Header />
      <main
        className="mx-auto my-20 w-full max-w-4xl px-4">
        {children}
      </main>
      <Footer />

      <div className={`${showScroll ? "flex" : "hidden"}`}>
        <a
          href="#top"
          className="
            fixed
            bottom-4
            right-4
            z-[999]
            flex
            h-12
            w-12
            items-center
            justify-center
            
            rounded-full
            border
            border-light 
            bg-transparent
            bg-opacity-10
            transition
            duration-300
            ease-in-out
            hover:bg-neutral-700
            "
        >
          <FontAwesomeIcon icon={faArrowUpLong} />
        </a>
      </div>
    </div>
  );
};
