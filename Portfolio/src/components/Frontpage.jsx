import myImage from "./hello.svg"
import Navbar from "./Navbar"
export default function Frontpage(){
    return(
    <section id="frontpage">
    <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <h1 className="text-7xl font-bold mr-20">
            Hi! <br/> I am Fiza!
        </h1>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img className="object-cover object-center"
                src={myImage}
            />
        </ div>
    </ div >
    
    </section>
    )
}
