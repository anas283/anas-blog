import Image from "next/image";
import ProfileImage from "../../../public/anas.jpeg";

const About = () => {
  return (
    <div className="w-full py-20">
      <h1 className="text-center text-4xl font-medium">About Me</h1>

      <div className="max-w-screen-lg mx-auto px-6 md:px-0">
        <div className="mt-24">
          <div className="flex flex-col md:flex-row w-100 mt-10">
            <div className="flex justify-center">
              <div className="w-64 h-64 rounded-full border-2 border-blue-400 overflow-hidden">
                <Image src={ProfileImage} alt="anas" />
              </div>
            </div>
            <div className="pt-10 md:p-10">
              <h1 className="text-2xl font-medium">Hey there 👋🏻</h1>
              <p className="mt-4 text-gray-500">
                I'm Anas, a Frontend Developer based in Malaysia.
                <br />
                In terms of some things I enjoy, sometimes I like to
                go jogging and traveling.
                <br />
                Alongside that, here and there I spend time on
                games and stuff like that.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About