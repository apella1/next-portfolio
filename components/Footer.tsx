import { FiLinkedin } from "react-icons/fi";
import { SiGithub, SiTwitter, SiWhatsapp } from "react-icons/si";

const thisYear: string = new Date().getFullYear().toString();

const Footer = () => {
  return (
    <footer className="flex flex-col lg:flex-row lg:justify-between p-4 pt-8 m-4 px-4 md:px-16 lg:px-28 2xl:px-52">
      <div className="flex items-center justify-center space-x-4 md:space-x-6">
        <a
          href="https://linkedin.com/in/johnapella"
          className="text-xl md:text-2xl"
          target="_blank"
        >
          <FiLinkedin />
        </a>
        <a
          href="https://github.com/apella1"
          className="text-xl md:text-2xl"
          target="_blank"
        >
          <SiGithub />
        </a>
        <a
          href="https://twitter.com/apella_john"
          className="text-xl md:text-2xl"
          target="_blank"
        >
          <SiTwitter />
        </a>
        <a
          href="https://wa.me/254704182264"
          className="text-xl md:text-2xl"
          target="_blank"
        >
          <SiWhatsapp />
        </a>
      </div>
      <div className="flex items-center space-x-4">
        <p className="self-center p-2">&copy; {thisYear} - John Apella</p>
        <p className="self-center p-2">All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
