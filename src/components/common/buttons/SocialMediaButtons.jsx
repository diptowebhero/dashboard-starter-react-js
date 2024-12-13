import { Facebook, Github, Linkedin } from "lucide-react";
import { BsWhatsapp } from "react-icons/bs";

const SocialMediaButtons = () => {
  return (
    <div className="item-center flex">
      <ul className="flex items-center gap-x-5">
        <li>
          <a
            href="https://www.facebook.com/dipto.das.52438/"
            target="_blank"
            className="relative flex size-[35px] items-center justify-center rounded-full border-[1px] border-primary/100 text-primary/100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary/100 hover:text-white"
          >
            <Facebook className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dipto-das-617901216/"
            target="_blank"
            className="relative flex size-[35px] items-center justify-center rounded-full border-[1px] border-primary/100 text-primary/100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary/100 hover:text-white"
          >
            <Linkedin className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/diptowebhero"
            target="_blank"
            className="relative flex size-[35px] items-center justify-center rounded-full border-[1px] border-primary/100 text-primary/100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary/100 hover:text-white"
          >
            <Github className="size-5" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=8801743591672"
            target="_blank"
            className="relative flex size-[35px] items-center justify-center rounded-full border-[1px] border-primary/100 text-primary/100 transition-all duration-300 ease-in-out hover:-translate-y-1 hover:bg-primary/100 hover:text-white"
          >
            <BsWhatsapp className="size-5" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialMediaButtons;
