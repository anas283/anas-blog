import Image from "next/image"

const WorkCard = ({ data }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-10 w-100">
      <div className="pt-10">
        <a 
          href={data.link}
          target="_blank"
          className="w-100 h-64 md:w-1/2 cursor-pointer md:pr-2"
        >
          <div className="h-72 border overflow-hidden rounded-lg">
            <Image className="object-cover h-full ease-in-out duration-200 hover:scale-110" src={data.image} alt={data.title} />
          </div>
        </a>
      </div>
      <div className="flex items-center">
        <div>
          <span className="py-1 px-3 text-xs text-black rounded-full border border-gray-300">
            {data.badge}
          </span>
          <h2 className="text-2xl font-medium mt-3">
            {data.title}
          </h2>
          <h6 className="font-normal text-slate-500 mt-3 mb-8">
            {data.description}
          </h6>
          <a 
            href={data.link}
            target="_blank"
            className="bg-slate-900 hover:bg-slate-700 text-sm text-white font-medium py-3 px-8 rounded"
          >
            See Project
          </a>
        </div>
      </div>
    </div>
  )
}

export default WorkCard