import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import ConnectAccount from "./connectAccount";
import ConnectData from "./connectData";
import MustRead from "./mustRead";

const Home = () => {
  const data = [
    {
      value: 1,
      label: "Active accounts",
    },
    {
      value: 0,
      label: "Accounts need reauthorization",
    },
    {
      value: 5,
      label: "Saved hours",
    },
  ];
  return (
    <>
      <Typography className="text-2xl">Welcome back, Mahmoud!</Typography>

      <div className="flex gap-4 items-center justify-between w-Hug mt-5">
        <div className="flex gap-1">
          <img
            src="src/assets/person.svg"
            alt="person"
            className="cursor-pointer"
          />
          <Typography className="text-base">Start collaborating</Typography>
        </div>
        <Button className="bg-gradient-to-r from-gray-300 to-primary text-white py-2 px-4 rounded">
          Invite Team Members
        </Button>
      </div>
      <div className=" flex gap-14 mt-5 flex-wrap">
        {data.map((item) => (
          <div className="bg-[#E3ECFE] w-fixed h-fixed flex flex-col gap-2 justify-center items-start p-5 rounded-xl shadow-lg">
            <span className="text-fourth font-bold text-[36px]">
              {item.value}
            </span>
            <Typography className="text-xl">{item.label}</Typography>
          </div>
        ))}
      </div>
      <ConnectAccount />
      <ConnectData />
      <MustRead />
    </>
  );
};

export default Home;
