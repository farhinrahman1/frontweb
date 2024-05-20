import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

function HeroSection() {
  return (
    <div className=" h-auto mid:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
      <div className="z-10 flex flex-col p-4 items-center justify-center text-center space-y-4">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <h1 className="text-3xl mt-5 font-bold text-center text-slate-300">
          Welcome to FrontWeb
        </h1>
        <p className="text-sm text-center text-slate-300">
          Welcome to Your Frontend Developer Journey! Dive into a curated path
          of essential skills, tools, and resources tailored to help you become
          a proficient frontend developer. Whether you're just starting out or
          looking to sharpen your expertise, join me as we explore HTML,
          Tailwind, Nextjs, Prisma and best practices. Let's build beautiful,
          responsive Fronend together!
        </p>
        <Link href="/courses">
          <button className="w-[150px] bg-black h-[50px] my-3 flex items-center justify-center rounded-xl cursor-pointer relative overflow-hidden transition-all duration-500 ease-in-out shadow-md hover:scale-105 hover:shadow-lg before:absolute before:top-0 before:-left-full before:w-full before:h-full before:bg-gradient-to-r before:from-zinc-700 before:to-zinc-900 before:transition-all before:duration-500 before:ease-in-out before:z-[-1] before:rounded-xl hover:before:left-0 text-[#fff]">
            Let's Start
          </button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
