import About from "./About.jsx"
import Skills from "./Skills.jsx"
export default function Navbar(){
    return(
    <header className="bg-violet-900/75 md:sticky top-0 z-10">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="title-font font-medium text-white mb-4 md:mb-0">
            <a href="#frontpage" className="ml-3 text-2xl">
              Fiza Mhate
            </a>
          </a>
          <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-white flex flex-wrap items-center text-base justify-center">
            <a href="#about" className="mr-5 hover:text-white text-xl">
              About
            </a>
            <a href="#skills" className="mr-5 hover:text-white text-xl">
              Skills
            </a>
            <a
                href="#contact"
                className=" mr-5 text-xl hover:text-white">
                Contact
            </a>
          </nav>
          
        </div>
      </header>
    )
}