import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";

export default function FooterContact() {
  return (
    <div className="site-footer__socials flex flex-wrap justify-center gap-4 md:justify-start">
      <a
        href="https://www.linkedin.com/in/ruy-mori-112967259/"
        className="social-btn linkedin"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin className="w-6 h-6 md:w-7 md:h-7" />
      </a>
      <a
        href="https://github.com/Ruyllex"
        className="social-btn github"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub className="w-6 h-6 md:w-7 md:h-7" />
      </a>
    </div>
  );
}
