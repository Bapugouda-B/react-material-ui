import {
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

const TableMui = () => {
  return (
    <TableContainer component={Paper} sx={{maxHeight:"250px"}}>
      <Table arial-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell>First Name</TableCell>
            <TableCell>Last Name</TableCell>
            <TableCell align="center">Email</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {TableData.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell>row.id</TableCell>
              <TableCell>row.first_name</TableCell>
              <TableCell>row.last_name</TableCell>
              <TableCell align="center">row.email</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableMui;

const TableData = [
  {
    id: 1,
    first_name: "Corrinne",
    last_name: "Nudde",
    email: "cnudde0@shareasale.com",
    gender: "Female",
    ip_address: "106.239.140.52",
  },
  {
    id: 2,
    first_name: "Erny",
    last_name: "Paudin",
    email: "epaudin1@163.com",
    gender: "Male",
    ip_address: "36.199.136.151",
  },
  {
    id: 3,
    first_name: "Jarad",
    last_name: "McKenney",
    email: "jmckenney2@amazon.co.jp",
    gender: "Male",
    ip_address: "43.232.253.221",
  },
  {
    id: 4,
    first_name: "Maisey",
    last_name: "Gerardet",
    email: "mgerardet3@xinhuanet.com",
    gender: "Female",
    ip_address: "25.202.139.116",
  },
  {
    id: 5,
    first_name: "Linnell",
    last_name: "Bamb",
    email: "lbamb4@soup.io",
    gender: "Female",
    ip_address: "11.183.211.194",
  },
  {
    id: 6,
    first_name: "Merrile",
    last_name: "Stollman",
    email: "mstollman5@engadget.com",
    gender: "Female",
    ip_address: "28.134.119.48",
  },
  {
    id: 7,
    first_name: "Erminia",
    last_name: "McCullen",
    email: "emccullen6@wsj.com",
    gender: "Female",
    ip_address: "134.106.170.2",
  },
  {
    id: 8,
    first_name: "Ernestus",
    last_name: "Roelofsen",
    email: "eroelofsen7@smugmug.com",
    gender: "Male",
    ip_address: "81.204.211.244",
  },
  {
    id: 9,
    first_name: "Taylor",
    last_name: "Harbertson",
    email: "tharbertson8@hostgator.com",
    gender: "Male",
    ip_address: "105.37.51.116",
  },
  {
    id: 10,
    first_name: "Warner",
    last_name: "Franzel",
    email: "wfranzel9@lulu.com",
    gender: "Male",
    ip_address: "154.186.30.153",
  },
];
