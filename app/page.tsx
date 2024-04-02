import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <main className="">
      <div className="flex flex-col lg:flex-row items-center bg-[#1E1919] dark:bg-slate-800">
        <div className="p-10 flex flex-col bg-[#2B2929] dark:bg-gray-800 text-white space-y-5">
          <h1 className="text-4xl font-bold">
            Introducing CloudNest <br />
            <br />
            Upgrade to the cloud. Say goodbye to clunky hard drives and hello to
            seamless storage
          </h1>

          <p>
            Store all your files securely in the cloud and access them from
            anywhere, at any time. Whether you are on your desktop, laptop,
            tablet, or smartphone, CloudNest ensures that your files are always
            within reach. Say goodbye to the hassle of carrying around external
            drives or worrying about storage limitations.
          </p>

          <Link
            href="/dashboard"
            className="flex cursor-pointer bg-blue-500 p-5 w-fit"
          >
            Get Access!
            <ArrowRight className="ml-10" />
          </Link>
        </div>

        <div className="bg-[#1E1919] dark:bg-slate-800 h-full p-10">
          <video autoPlay loop muted className="rounded-lg">
            <source
              src="https://aem.dropbox.com/cms/content/dam/dropbox/warp/en-us/dropbox/dbx1-hero-1920x1080.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag
          </video>
        </div>
      </div>

      <p className="text-center font-bold text-xl pt-5">Disclaimer</p>
      <p className="text-center font-light p-2">
        This project is made by <br />
        Syed Muhammad Saad Reg.No 452334 <br />
        Hafeez Ahmad Reg.No 452485 <br />
        Sayed Hassan Zeb Reg.No 451860 <br />
        Hassan Saleem Ramay Reg.No 452471 <br />
        Zaeem Ullah Reg.No 000000 <br />
      </p>
    </main>
  );
}
