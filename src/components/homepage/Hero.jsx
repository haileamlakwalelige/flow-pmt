import Image from "next/image";
import { Button } from "../ui/button";
import { MoveRightIcon } from "lucide-react";
import logo from "../../assets/logo.png";

const Hero = () => {
  return (
    <div className="min-h-screen  px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col justify-center items-center min-h-[82vh] max-w-7xl mx-auto">
        <h1 className="text-center">
          <span className="gradient-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold leading-tight mb-2 block">
            Streamline your workflow
          </span>
          <div className="flex flex-row items-center justify-center  ">
            <span className="gradient-title text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-bold">
              with
            </span>
            <Image
              src={logo}
              alt="logo of the flow"
              width={170}
              height={170}
              className="h-16 sm:h-20 md:h-24 lg:h-32 xl:h-40 2xl:h-48 w-auto  animate-float"
            />
          </div>
        </h1>
        <p className="text-white font-semibold text-lg sm:text-xl md:text-2xl text-center mt-6 sm:mt-8 max-w-2xl">
          Empower your team with our intuitive project management solution
        </p>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-8 sm:mt-12 w-full sm:w-auto">
          <Button className="bg-white text-black py-4 sm:py-6 rounded text-base sm:text-lg px-8 sm:px-10 hover:text-white hover:bg-black transition-all duration-300 w-full sm:w-auto">
            Get Started <MoveRightIcon className="ml-2 animate-bounce-x" />
          </Button>
          <Button className="bg-black text-white py-4 sm:py-6 rounded text-base sm:text-lg px-8 sm:px-10 hover:bg-white hover:text-black transition-all duration-300 w-full sm:w-auto">
            Learn More
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
