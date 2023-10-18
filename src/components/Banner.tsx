import Image from "next/image";
import BannerImg from "../assets/pick.png"
const Banner =() =>{
    return(
        <div className="flex items-center flex-col sm:flex-row">
          <div className="w-1/2 flex flex-col gap-2">
            <h2 className="text-2xl font-semibold">BPI MERN</h2>
            <p className="text-lg font-medium ">MERN Stack Developer</p>
            <p className="text-base tracking-wide">Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Ea dolores dicta quae soluta est suscipit recusandae illo 
                repellendus ad, omnis quas laudantium nulla atque rem. Voluptatibus 
                voluptates modi blanditiis ratione, incidunt
                 voluptatum numquam impedit fugit laboriosam corrupti.
            </p>
           <a href="http://localhost:3000/resume.pdf" target="blank">
           <button className="w-32 h-10 bg-zinc-800 text-zinc-200 hover:bg-black rounded-md hover:text-white 
              cursor-pointer duration-200">Hire me
            </button>
           </a>
          </div>
          <div className="w-full sm:w-1/2 flex items-center justify-center">
            <Image src={BannerImg} alt="Banner image" className=" h-[450px] w-[450px] object-contain" />
          </div>
        </div>
    );

};
export default Banner;