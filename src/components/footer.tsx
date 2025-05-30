import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTwitter,
  faGithub,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import { faCopyright } from "@fortawesome/free-regular-svg-icons";

const socialLinks = [
  {
    link: "https://www.linkedin.com/in/dapoadedire/",
    icon: faLinkedinIn,
  },
  {
    link: "https://www.github.com/dapoadedire",
    icon: faGithub,
  },
  {
    link: "https://www.twitter.com/dapo_adedire",
    icon: faTwitter,
  },
];

export const Footer = () => {
  return (
   <footer>
    <div
    className="border-t border-neutral-800"
    ></div>
     <section
      className="mt-auto
      
      flex
      max-w-[950px]
        w-full
        mx-auto
      
        justify-between
        items-center
        
        px-3 py-5  md:py-8 md:px-10
        text-light
    "
    >
      <p className="text-base">
        <span className="mr-1">Dapo Adedire</span>
        <span
          className="
        [&>*]:h-3 [&>*]w-3
        "
        >
          {<FontAwesomeIcon icon={faCopyright} />}
        </span>
        {`
    
    ${new Date().getFullYear()}`}
      </p>
      <div className="flex gap-4">
        {socialLinks.map((social, index) => (
          <a
            key={index}
            href={social.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-light hover:text-white transition duration-300 ease-in-out"
          >
            <FontAwesomeIcon icon={social.icon} className="size-4" />
          </a>
        ))}
      </div>
     
    </section>
    <div className="footer"></div>
   </footer>
  );
};
