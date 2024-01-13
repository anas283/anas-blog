import WorkCard from "../components/workCard";
import { workData } from './data'; 

const Work = () => {

  return (
    <div className="w-full py-20">
      <h1 className="text-center text-4xl font-medium">My Work</h1>

      <div className="max-w-screen-lg mx-auto px-6 md:px-0 mt-20">
        {workData.map((data, index) => (
          <WorkCard data={data} />
        ))}
      </div>
    </div>
  )
}

export default Work