import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { MoveRight } from "lucide-react";
const ConnectData = () => {
    const items = [
      {
        name: "Google Analytics",
        icon: "src/assets/google.svg", 
      },
      {
        name: "Instagram Insights",
        icon: "src/assets/insatagram.svg",
      },
      {
        name: "LinkedIn",
        icon: "src/assets/linkdin.svg", 
      },
      {
        name: "Facebook",
        icon: "src/assets/facebook.svg",
      },
      {
        name: "Google Analytics",
        icon: "src/assets/google.svg", 
      },
      {
        name: "Instagram Insights",
        icon: "src/assets/insatagram.svg",
      },
      {
        name: "LinkedIn",
        icon: "src/assets/linkdin.svg", 
      },
      
    ];
  return (
    <div className="mt-9 bg-white w-full rounded-md min-h-96 ps-4">
      <Typography className="text-xl py-3">Connect your data!</Typography>
      <Typography className="text-[14px] ">
        Over 120 data sources to choose from, 14 day trials each
      </Typography>
      <div className="mt-5">
        <div className="flex w-full justify-between ">
          <Typography>Suggested for you:</Typography>
          <Button className="me-8 rounded-full bg-white border-2 text-primary hover:text-white border-primary">
            Data sources and connections <MoveRight className="ms-4 " />{" "}
          </Button>
        </div>
        <div className="flex flex-wrap justify-around items-center gap-4 mt-5">
          {items.map((item) => (
            <div className="flex cursor-pointer justify-center items-center bg-third p-5 rounded-md gap-3 max-w-40">
              <img src={item.icon} alt={item.icon} style={{width:"40px" , height:"40px"}}/>
              {item.name}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ConnectData