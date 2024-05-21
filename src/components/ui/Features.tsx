import { Link } from "lucide-react";

function features() {
  return (
    <div className="text-white py-12 bg-black mt-24">
      <div>
        <div className="text-center">
          <h2 className="text-base text-teal-700 font-semibold tracking-wide uppercase">
            Explore the Courses
          </h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-wide uppercase">
            Learn with the best
          </p>
        </div>
      </div>
      <div className="mt-10 flex flex-col lg:flex-row justify-center items-center gap-4">
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one
            nivam acestion vue artin dictum.
          </p>
          <p
            style={{
              WebkitTextStroke: "1px gray",
              WebkitTextFillColor: "transparent",
            }}
            className="text-5xl font-bold self-end"
          >
            09
          </p>
        </div>
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one
            nivam acestion vue artin dictum.
          </p>
          <p
            style={{
              WebkitTextStroke: "1px gray",
              WebkitTextFillColor: "transparent",
            }}
            className="text-5xl font-bold self-end"
          >
            09
          </p>
        </div>
        <div className="service-card w-[300px] shadow-xl cursor-pointer snap-start shrink-0 py-8 px-6 bg-white flex flex-col items-start gap-3 transition-all duration-300 group hover:bg-[#202127]">
          <svg
            stroke-linejoin="round"
            stroke-linecap="round"
            stroke-width="2"
            stroke="#000000"
            fill="none"
            viewBox="0 0 24 24"
            className="text-5xl h-12 w-12 stroke-gray-800 group-hover:stroke-gray-400"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect ry="2" rx="2" height="14" width="20" y="3" x="2"></rect>
            <line y2="21" x2="16" y1="21" x1="8"></line>
            <line y2="21" x2="12" y1="17" x1="12"></line>
          </svg>

          <p className="font-bold text-2xl group-hover:text-white text-black/80">
            WEBSITE SEO
          </p>
          <p className="text-gray-400 text-sm">
            Website ravida surna eveti semen the conse tusio anivite dianne one
            nivam acestion vue artin dictum.
          </p>
          <p
            style={{
              WebkitTextStroke: "1px gray",
              WebkitTextFillColor: "transparent",
            }}
            className="text-5xl font-bold self-end"
          >
            09
          </p>
        </div>
      </div>
      <div className="mt-20 flex justify-center items-center text-center">
        <button className="px-4 py-2 rounded text-black border border-neutral-600 bg-white hover:bg-gray-100 transition duration-200">
          View all courses
        </button>
      </div>
    </div>
  );
}

export default features;
