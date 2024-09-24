import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Typography from "@/components/ui/typography";
import { Trash2 } from "lucide-react";
const ConnectAccount = () => {
  const invoices = [
    {
      name: "Ahmad Mahmoud",
      status: "Connected",
      ads: "Facebook Ads",
      id: "id:48924596644",
      icon: <Trash2 />,
      image:"src/assets/colored-looker-studio 1.svg"
    },
  ];

  return (
    <div className="mt-9 bg-white w-full rounded-md h-Hug ps-4 overflow-scroll">
      <Typography className="text-xl pt-5">Connected accounts</Typography>
      <div className="flex justify-between w-3/4 mt-5">
        <div className="flex gap-5">
          <Button>All</Button>
          <Button>Owned</Button>
          <Button>Shared</Button>
        </div>
        <div className="flex gap-5">
          <Input className="w-[331px] h-9" placeholder="Filter by Name" />
          <Button className="bg-gradient-to-r from-gray-300 to-primary text-white py-2 px-4 rounded-none">
            Add Account
          </Button>
        </div>
      </div>
      <div className="mt-5 ">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Destinations</TableHead>
              <TableHead>Account name</TableHead>
              <TableHead>Data source</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Storage</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell>
                  <img src={invoice.image} />
                </TableCell>

                <TableCell>
                  {invoice.name}
                  <br />
                  {invoice.id}
                </TableCell>
                <TableCell className="flex gap-2">
                  <img src="src/assets/facebook.svg" />
                  {invoice.ads}
                </TableCell>
                <TableCell className="w-40">
                  <div
                    className={`bg-green-200 p-3 rounded-md w-fit h-8 text-green-600 flex items-center`}
                  >
                    {invoice.status}
                  </div>
                </TableCell>
                <TableCell>----</TableCell>
                <TableCell className="cursor-pointer">{invoice.icon}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default ConnectAccount;
