import { Link } from "react-router-dom";

const ServerError = () => {
  return (
    <div className="not-found-main">
      <div className="content relative">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 400 200"
          role="img"
          aria-label="500 Error"
        >
          <rect fill="#e2e8f0" />
          <text
            x="50%"
            y="50%"
            textAnchor="middle"
            fill="#e2e8f0"
            dy=".35em"
            fontFamily="Arial, sans-serif"
          >
            500
          </text>
        </svg>

        <div className="relative z-[1] pt-[50px] text-center">
          <h1 className="text-center text-[32px] font-bold text-[#092635] dark:text-white md:text-[50px]">
            Oops, something went wrong
          </h1>
          <p className="mx-0 my-5 text-[15px] dark:text-white">
            Server Error 500. We apologise and are fixing the problem Please try
            again at a later stage
          </p>

          <div className="mx-auto w-1/2 flex-row content-center md:flex md:justify-around">
            <Link to="/">
              <button className="rounded-lg bg-primary/100 px-4 py-2 text-white md:px-6">
                Back To Home
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServerError;
