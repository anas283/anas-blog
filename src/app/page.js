import Image from "next/image";
import AnasImage from "../../public/anas.jpeg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import About from "./components/about";
import Blogs from "./components/blogs";
import Uses from "./components/uses";
import Contact from "./components/contact";

export default function Home() {
  return (
    <main className="relative overflow-x-hidden bg-pattern">
      <div className="flex max-w-screen-md mx-auto min-h-screen px-6 pt-12 lg:px-0">
        <div className="w-full">
          <div className="w-full pb-8 mb-8 border-b">
            <div className="w-16 h-16 rounded-full border border-slate-400 overflow-hidden">
              <Image src={AnasImage} alt="anas" className="scale-125 mt-1" width={100} height={100} />
            </div>
            <div className="flex flex-row gap-1.5 items-center">
              <h4 className="text-xl font-medium mt-1.5">
                Muhammad Anas
              </h4>  
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mt-1.5">
                <path fillRule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
              </svg>
            </div>
            <h4 className="text-slate-600 text-base">
              Frontend Developer.
            </h4>
            <div className="flex flex-row gap-3 mt-4">
              <a href="https://github.com/anas283" target="_blank" className="hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/><path d="M9 18c-4.51 2-5-2-7-2"/></svg>
              </a>
              <a href="https://www.linkedin.com/in/anas283/" target="_blank" className="hover:text-blue-500">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
              </a>
            </div>
          </div>

          <Tabs defaultValue="about" className="w-full">
            <TabsList className="bg-white p-0">
              <TabsTrigger value="about" className="data-[state=active]:bg-black data-[state=active]:text-white">
                About
              </TabsTrigger>
              <TabsTrigger value="blogs" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Blogs
              </TabsTrigger>
              <TabsTrigger value="uses" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Uses
              </TabsTrigger>
              <TabsTrigger value="contact" className="data-[state=active]:bg-black data-[state=active]:text-white">
                Contact
              </TabsTrigger>
            </TabsList>
            <TabsContent value="about" className="py-3 fade-up">
              <About />
            </TabsContent>
            <TabsContent value="blogs" className="py-3 fade-up">
              <Blogs />
            </TabsContent>
            <TabsContent value="uses" className="py-3 fade-up">
              <Uses />
            </TabsContent>
            <TabsContent value="contact" className="py-3 fade-up">
              <Contact />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </main>
  )
}
