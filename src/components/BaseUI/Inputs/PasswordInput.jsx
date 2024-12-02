import { Eye, EyeOff } from "lucide-react";
import { useState } from "react";
import Box from "../Box";
import Title from "../Title";

const PasswordInput = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <Box>
      <Title title="Password Show/Hide" />

      {/* Password */}
      <div>
        <label
          htmlFor="yourId"
          className="mb-1 inline-block text-sm text-slate-700 dark:text-slate-300"
        >
          Password
        </label>
        <div className="relative">
          <input
            type={`${isVisible ? "text" : "password"}`}
            id="yourId"
            className="w-full rounded border border-gray-300 bg-transparent px-4 py-2 text-sm text-slate-700 transition-colors duration-150 ease-in-out placeholder:text-slate-400 hover:bg-slate-200 focus:border-primary/100 focus:outline-none dark:border-[#1e293b] dark:bg-slate-700 dark:text-slate-300 dark:placeholder:text-slate-100 dark:focus:border-primary-lighter"
            placeholder="Password"
          />
          <div
            className="absolute right-4 top-2 cursor-pointer text-2xl text-gray-500"
            onClick={() => setIsVisible((prev) => !prev)}
          >
            {isVisible ? <Eye size={20} /> : <EyeOff size={20} />}
          </div>
        </div>
      </div>
    </Box>
  );
};

export default PasswordInput;
