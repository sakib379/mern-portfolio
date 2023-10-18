import Link from "next/link";
import Container from "./Container";
import Image from "next/image";
import logo from "../assets/wlogo.png";
import { navigation, services } from "@/constants/datd";
import {Facebook} from "lucide-react"

export default function Footer() {
  return (
    <div className="bg-zinc-700 text-zinc-200 mt-10">
        <Container className="grid grid-cols-1 md:grid-cols-2 xl lg:grid-cols-4 gap-10 xl:place-items-center px-4
        ">
      
        <div className="flex flex-col" >
        <Link href={"/"}>
          <Image src={logo} alt="logo img "className="w-24"/>
        </Link>
        <p className="text-sm mt-2">
          Lorem, ipsum dolor sit amet consectetur adipisicing 
          elit. Ipsum unde adipisci quisquam, vero ut voluptate
          expedita perferendis at corporis soluta sint, molestiae 
          quae doloremque error? Sequi, cum necessitatibus! Explicabo 
          exercitationem voluptatibus amet magnam animi dolorem quidem iste.
        </p>
        </div>
        <div>
        <ul className="flex flex-col items-start text-sm uppercase gap-5 font-semibold">
            {navigation.map((item)=>(
                
            
            <li className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden">{item?.title}
            <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%]
            group-hover:translate-x-0 transition-transform duration-300" /> </li>
            
              ))
            }
           
          </ul>
        </div>
        <div>
        <ul className="flex flex-col items-start text-sm uppercase gap-5 font-semibold">
            {services.map((item)=>(
                
            
            <li className="hover:text-white cursor-pointer duration-300 relative group overflow-hidden">{item?.title}
            <span className="h-[1px] w-full bg-white inline-flex absolute left-0 bottom-0 -translate-x-[100%]
            group-hover:translate-x-0 transition-transform duration-300" /> </li>
            
              ))
            }
           
          </ul>
        </div>
        
        <div>
          <p className="mb-2">Reach me with</p>
          <ul>
            <a href="https://www.facebook.com/profile.php?id=100077773333794"target= "_blank">
            <li className="w-8 h-8 bg-zinc-300 text-zinc-700 rounded-full flex items-center justify-center
            hover:bg-white hover:text-black cursor-pointer duration-300">
              <Facebook />
            </li>
            </a>
          </ul>
        </div>
        <div></div>

        </Container>
    </div>
    
  );
};
