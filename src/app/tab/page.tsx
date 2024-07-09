import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
  } from "@/components/ui/table"
  

function Tabular() {
  return (
    <Table>
  <TableCaption>A list of some user details.</TableCaption>
  <TableHeader>
    <TableRow>
      <TableHead className="w-[90px]">UserID</TableHead>
      <TableHead>Name</TableHead>
      <TableHead>Email</TableHead>
      <TableHead>Company Name</TableHead>
      <TableHead className="text-right">Salary</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow>
      <TableCell className="font-medium">1</TableCell>
      <TableCell>John</TableCell>
      <TableCell>john23@gmail.com</TableCell>
      <TableCell>Swiggy</TableCell>
      <TableCell className="text-right">$550.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">2</TableCell>
      <TableCell>Ammy</TableCell>
      <TableCell>ammu456@yahoo.com</TableCell>
      <TableCell>Spotify</TableCell>
      <TableCell className="text-right">$650.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">3</TableCell>
      <TableCell>Eliza</TableCell>
      <TableCell>eliza56@yahoo.com</TableCell>
      <TableCell>Facebook</TableCell>
      <TableCell className="text-right">$850.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">4</TableCell>
      <TableCell>Kamya</TableCell>
      <TableCell>kamya36@gmail.com</TableCell>
      <TableCell>Mahindra</TableCell>
      <TableCell className="text-right">$450.00</TableCell>
    </TableRow>

    <TableRow>
      <TableCell className="font-medium">5</TableCell>
      <TableCell>Dane</TableCell>
      <TableCell>dane456@gmail.com</TableCell>
      <TableCell>Microsoft</TableCell>
      <TableCell className="text-right">$900.00</TableCell>
    </TableRow>
  </TableBody>
</Table>

  )
}

export default Tabular
