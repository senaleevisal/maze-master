import Image from "next/image";
import { Container } from "@/components/Container";
import heroImg from "../../public/img/hero.png";
import { MdOutlineDocumentScanner } from "react-icons/md";

export const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap relative top-10 ">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8 px-4 md:px-8 lg:px-16">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              Maze Master 24' Robot Battle. 
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
            NIBM Galle proudly presents the second iteration of the Maze Master robotic battle in 2024. This thrilling event features both inter-school and inter-university categories, where two robots engage in fierce combat inside the arena.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md ">
                Register Here
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener"
                className="text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-8 py-5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-8">
                
                <MdOutlineDocumentScanner className="mr-2 h-30 w-30" /> Rules & Regulations
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <Image
              src={heroImg}
              width="616"
              height="617"
              className={"object-cover hover:scale-110"}
              alt="Hero Illustration"
              loading="eager"
              placeholder="blur"
              
            />
          </div>
        </div>
      </Container>
    </>
  );
};