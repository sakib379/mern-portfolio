import Title from "@/constants/Title";
import Container from "./Container"
import { servicesDetails } from "@/constants/datd";
import { spawn } from "child_process";

const MyServics = () => {
  return (
    <Container className=" px-10 text-zinc-600 border border-black mt-10">
      <Title title="My Servics"/>
      <div>
        <ul>
            {
                servicesDetails.map((item)=>(
                    <div key={item?.title}>

                        <div className="flex gap-2">
                        <p>{item.title}</p>
                        <span>{<item.icon/>}</span>
                        </div>
                        {/* <p>{item.description}</p> */}
                    </div>
                    
                ))
            }
        </ul>
      </div>
    </Container>
  );
};

export default MyServics;