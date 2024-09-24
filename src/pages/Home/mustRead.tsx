import Typography from "@/components/ui/typography";

const MustRead = () => {
  return (
    <div className="mt-9 bg-white w-full rounded-md min-h-96 ps-4 ">
      <Typography className="text-xl py-3">Must-reads from our blog</Typography>
      <div className="flex justify-between items-center px-3 mt-5 flex-wrap">
        {new Array(3).fill(1).map((_, index) => (
          <div key={index} className="w-96">
            <img src="src/assets/Rectangle.svg" alt="rectangle" />
            <Typography className="text-xl py-3">
              A guide to data transformation in Power BI for marketers
            </Typography>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MustRead;
