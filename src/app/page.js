import Image from "next/image";
import CoworkingPreview from "../../public/coworking-preview.png";
import KadDigitalPreview from "../../public/kad-digital-preview.png";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-pattern">
      <div className="flex max-w-screen-lg mx-auto min-h-screen items-center justify-between px-6 pt-24 md:px-0">
        <div className="relative z-2">
          <h1 className="text-gradient text-4xl md:text-6xl font-medium">
            Muhammad Anas.
          </h1>
          <h1 className="text-4xl md:text-6xl font-medium mt-2">
            Frontend Developer.
          </h1>
          <h4 className="text-md text-slate-500 font-normal mt-5 max-w-lg">
            I do web stuff. Mostly Angular, React, Next.js and Tailwind.
            I pride myself in working very fast, without any sacrifice on quality.
          </h4>

          <div className="mt-24">
            <h3 className="text-gray-800 text-md font-medium uppercase">Featured Work</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-100">
              <div className="pt-10">
                <a 
                  href="https://coca-coworking.vercel.app/"
                  target="_blank"
                  className="w-100 h-64 md:w-1/2 cursor-pointer md:pr-2"
                >
                  <div className="h-72 border overflow-hidden rounded-lg">
                    <Image className="object-cover h-full ease-in-out duration-200 hover:scale-110" src={CoworkingPreview} alt="coworking" />
                  </div>
                </a>
              </div>
              <div className="flex items-center">
                <div>
                  <span className="py-1 px-3 text-xs text-black rounded-full border border-gray-300">
                    Side project
                  </span>
                  <h2 className="text-2xl font-medium mt-3">
                    Coworking Space
                  </h2>
                  <h6 className="font-normal text-slate-500 mt-3 mb-8">
                    This is website that I made using Next.js and Tailwind.
                    The web design is inspired from Dribbble.
                  </h6>
                  <a 
                    href="https://coca-coworking.vercel.app/"
                    target="_blank"
                    className="bg-slate-900 hover:bg-slate-700 text-sm text-white font-medium py-3 px-8 rounded"
                  >
                    See Project
                  </a>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 w-100 mt-20">
              <div className="flex items-center order-2 md:order-1">
                <div>
                  <span className="py-1 px-3 text-xs text-black rounded-full border border-gray-300">
                    Side project
                  </span>
                  <h2 className="text-2xl font-medium mt-3">
                    Kad Digital
                  </h2>
                  <h6 className="font-normal text-slate-500 mt-3 mb-8">
                    This is website I built using React.js and Bootstrap but then migrated
                    to Next.js.
                  </h6>
                  <a 
                    href="https://kad-digital-next.vercel.app/"
                    target="_blank"
                    className="bg-slate-900 hover:bg-slate-700 text-sm text-white font-medium py-3 px-8 rounded"
                  >
                    See Project
                  </a>
                </div>
              </div>
              <div className="order-1 md:order-2 pt-5">
                <a 
                  href="https://kad-digital-next.vercel.app/"
                  target="_blank"
                  className="w-100 h-64 md:w-1/2 mb-10 cursor-pointer md:pr-2"
                >
                  <div className="h-72 border overflow-hidden rounded-lg">
                    <Image className="object-cover h-full ease-in-out duration-200 hover:scale-110" src={KadDigitalPreview} alt="coworking" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Contact />
    </main>
  )
}
