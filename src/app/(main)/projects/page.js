import { works } from "@/data/works"
import Image from "next/image";
import { Badge } from "@/components/ui/badge"

export default function Projects() {
  return (
    <div className="w-full">
      <h4 className="text-3xl text-slate-900 font-bold text-center mb-10">
        Projects
      </h4>
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-x-2 gap-y-6">
        {works.map((data, key) => {
          return (
            <a 
              className="group h-96 md:h-80 ease-in-out duration-150 hover:-translate-y-2 flex flex-col gap-2"
              href={data.link}
              target="_blank"
              key={key}
            >
              <div className="border rounded-md overflow-hidden md:max-w-[300px]">
                <Image src={data.image} />
              </div>
              <div className="flex items-center">
                <div>
                  <h5 className="text-md font-semibold mt-3">
                    {data.title}
                  </h5>
                  <p className="text-slate-600 text-sm mt-1">
                    {data.subtitle}
                  </p>
                  <Badge variant="outline" className="font-normal mt-2">
                    {data.tag}
                  </Badge>
                </div>
              </div>
            </a>
          )
        })}
      </div>
    </div>
  )
}

export function generateMetadata() {
  const title = 'Projects | Anas';

  return {
    title,
  };
}