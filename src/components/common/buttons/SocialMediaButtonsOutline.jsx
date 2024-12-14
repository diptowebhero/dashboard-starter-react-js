import { Facebook, Github } from "lucide-react";
import { BsGoogle } from "react-icons/bs";

const SocialMediaButtonsOutline = () => {
  return (
    <div className="flex flex-wrap items-center gap-2">
      {/* Google */}
      <button className="inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-600 bg-transparent px-6 py-2 text-sm text-slate-800 transition-all duration-150 ease-in-out focus:outline-none dark:border-slate-200 dark:text-white">
        <span className="pointer-events-none">
          <BsGoogle className="size-4" />
        </span>
        <span className="flex-1 text-start">Login with Google</span>
      </button>
      {/* Facebook */}
      <button className="inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-600 bg-transparent px-6 py-2 text-sm text-slate-800 transition-all duration-150 ease-in-out focus:outline-none dark:border-slate-200 dark:text-white">
        <span className="pointer-events-none">
          <Facebook className="size-5" />
        </span>
        <span className="flex-1 text-start">Login with Facebook</span>
      </button>
      {/* Facebook */}
      <button className="inline-flex w-1/2 transform cursor-pointer items-center justify-center gap-2 rounded-md border border-slate-600 bg-transparent px-6 py-2 text-sm text-slate-800 transition-all duration-150 ease-in-out focus:outline-none dark:border-slate-200 dark:text-white">
        <span className="pointer-events-none">
          <Github className="size-5" />
        </span>
        <span className="flex-1 text-start">Login with Github</span>
      </button>
    </div>
  );
};

export default SocialMediaButtonsOutline;
