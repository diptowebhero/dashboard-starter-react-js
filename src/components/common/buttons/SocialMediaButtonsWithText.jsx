import { Facebook, Github } from "lucide-react";
import { BsGoogle } from "react-icons/bs";

const SocialMediaButtonsWithText = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Google */}
      <button className="bg-danger-500 hover:bg-danger-400 inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out focus:outline-none">
        <span className="pointer-events-none">
          <BsGoogle className="size-4" />
        </span>
        <span className="flex-1 text-start">Login with Google</span>
      </button>
      {/* Facebook */}
      <button className="inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md bg-primary/100 px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out hover:bg-primary/90 focus:outline-none">
        <span className="pointer-events-none">
          <Facebook className="size-5" />
        </span>
        <span className="flex-1 text-start">Login with Facebook</span>
      </button>
      {/* Facebook */}
      <button className="bg-secondary-800 hover:bg-secondary-700 inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md px-6 py-2 text-sm text-white transition-all duration-150 ease-in-out focus:outline-none">
        <span className="pointer-events-none">
          <Github className="size-5" />
        </span>
        <span className="flex-1 text-start">Login with Github</span>
      </button>
    </div>
  );
};

export default SocialMediaButtonsWithText;
