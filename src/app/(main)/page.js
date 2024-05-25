import { Badge } from "@/components/ui/badge"

export default function Home() {
  return (
    <div>
      <h4 className="text-md text-slate-700 font-normal">
        Frontend Developer with 3 years of experience. I do web stuff. 
        Mostly Angular, React, Next.js and Tailwind. I pride myself in 
        working fast, without any sacrifice on quality.
      </h4>

      <div className="mt-16">
        <h4 className="text-lg font-semibold">Experience</h4>
        <div className="flex flex-col mt-4 ml-1.5">
          <div className="border-l border-slate-300 pl-4 pb-4 relative">
            <span className="flex w-2.5 h-2.5 rounded-full bg-slate-600 absolute top-2 -left-1.5"></span>
            <div className="flex flex-row gap-3">
              <h5 className="font-medium">Front-End Developer</h5>
              <Badge variant="outline" className="font-normal">Present</Badge>
            </div>
            <h6 className="text-slate-600 text-sm mt-0.5">Mode Fair Sdn Bhd</h6>
          </div>
          <div className="border-l border-slate-300 pl-4 pt-4 relative">
            <span className="flex w-2.5 h-2.5 rounded-full bg-slate-300 absolute top-[23px] -left-1.5"></span>
            <h5 className="font-medium">Front-End Developer</h5>
            <h6 className="text-slate-600 text-sm mt-0.5">TriSquare Technology (M) Sdn Bhd</h6>
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h4 className="text-lg font-semibold">Projects</h4>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-6">
          <a 
            className="group h-36 ease-in-out duration-150 hover:-translate-y-2"
            href="https://www.linkwajo.com"
            target="_blank"
          >
            <div className="w-8 h-8 rounded-md bg-slate-900 flex justify-center items-center text-white ease-in-out duration-200 group-hover:-rotate-12 group-hover:bg-blue-500">
              L
            </div>
            <h5 className="text-sm font-medium mt-3">Linkwajo</h5>
            <p className="text-slate-600 text-sm mt-1">
              A simple link in bio tool for product focused user.
            </p>
          </a>

          <a 
            className="group h-36 ease-in-out duration-150 hover:-translate-y-2"
            href="https://coca-coworking.vercel.app"
            target="_blank"
          >
            <div className="w-8 h-8 rounded-md bg-slate-900 flex justify-center items-center text-white ease-in-out duration-200 group-hover:-rotate-12 group-hover:bg-blue-500">
              C
            </div>
            <h5 className="text-sm font-medium mt-3">Coworking</h5>
            <p className="text-slate-600 text-sm mt-1">
              A basic coworking space landing page.
            </p>
          </a>

          <a 
            className="group h-36 ease-in-out duration-150 hover:-translate-y-2"
            href="https://kad-digital-next.vercel.app"
            target="_blank"
          >
            <div className="w-8 h-8 rounded-md bg-slate-900 flex justify-center items-center text-white ease-in-out duration-200 group-hover:-rotate-12 group-hover:bg-blue-500">
              K
            </div>
            <h5 className="text-sm font-medium mt-3">Kad Digital</h5>
            <p className="text-slate-600 text-sm mt-1">
              Wedding card generator with awesome features.
            </p>
          </a>

          <a 
            className="group h-36 ease-in-out duration-150 hover:-translate-y-2"
            href="https://heyanas.com"
            target="_blank"
          >
            <div className="w-8 h-8 rounded-md bg-slate-900 flex justify-center items-center text-white ease-in-out duration-200 group-hover:-rotate-12 group-hover:bg-blue-500">
              A
            </div>
            <h5 className="text-sm font-medium mt-3">Heyanas.com</h5>
            <p className="text-slate-600 text-sm mt-1">
              My personal website and blogs.
            </p>
          </a>
        </div>
      </div>
    </div>
  )
}