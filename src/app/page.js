import Image from "next/image";
import CoworkingPreview from "../../public/coworking-space-preview.png";
import GitHubIcon from "../../public/github.svg";
import LinkedInIcon from "../../public/linkedin.svg";

export default function Home() {
  return (
    <main className="flex max-w-screen-md mx-auto min-h-screen items-center justify-between px-6 py-24 md:px-0 overflow-x-hidden">
      <div>
        <h1 className="text-4xl md:text-5xl font-medium">
          Hey, I'm Anas. <br />
          Frontend Developer based in Malaysia
        </h1>
        <h4 className="text-md text-slate-500 font-normal mt-4">
          I'm a blazingly fast frontend developer and passionate 
          about all kinds of interface development. I pride myself
          in working very fast, without any sacrifice on quality. 
        </h4>
        <div className="flex flex-row">
          <div className="mt-6">
            <a 
              href="mailto:muhammadanasbinadam@gmail.com"
              target="_blank"
              className="bg-slate-900 hover:bg-slate-700 text-sm text-white font-medium py-3 px-8 rounded"
            >
              Contact
            </a>
          </div>
          <div className="mt-4 ml-3 w-10 h-10 flex justify-center items-center">
            <a 
              href="https://github.com/anas283" 
              target="_blank"
            >
              <Image src={GitHubIcon} alt="github" />
            </a>
          </div>
          <div className="mt-4 w-10 h-10 flex justify-center items-center">
            <a 
              href="https://www.linkedin.com/in/anas283/" 
              target="_blank"
            >
              <Image src={LinkedInIcon} alt="linkedin" />
            </a>
          </div>
        </div>

        <div className="mt-24">
          <h3 className="text-2xl font-medium">Featured Work</h3>
          <div className="flex flex-col md:flex-row mt-4 w-100">
            <a 
              href="https://coca-coworking.vercel.app/"
              target="_blank"
              className="w-100 h-64 md:w-1/2 mb-10 cursor-pointer md:pr-2"
            >
              <div className="h-52 border overflow-hidden rounded-lg">
                <Image className="object-cover" src={CoworkingPreview} alt="coworking" />
              </div>
              <h5 className="font-normal mt-2">
                Coworking Space Landing Page
              </h5>
              <h6 className="font-normal text-slate-400">
                Next.js
              </h6>
            </a>
            <div className="w-100 h-52 md:w-1/2 mb-10 rounded-lg md:pl-2 border-dashed border-2 border-slate-400 p-4 flex items-center justify-center">
              <h6 className="text-slate-400">Coming soon</h6>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
