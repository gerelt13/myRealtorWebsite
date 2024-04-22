// import React, { useEffect, useState } from "react";
// import Box from "@mui/material/Box";
// import Tabs from "@mui/material/Tabs";

// import { Button } from "@mui/material";
// import { TextField } from "@mui/material/TextField";
// import { Properties } from "./properties";


// export default function EditProperties() {
//   const [id, setID] = useState("");

//   return (
//     <Box style={{ borderColor: "black" }}>
//       <h1 style={{ color: "red" }}>Edit Properties</h1>

//       <TextField
//         style={{ color: "green" }}
//         onChange={(event) => {
//           setID(event.target.value);
//         }}
//         required
//         id="outlined-required"
//         label="Edit Properties"
//         defaultValue="Edit Properties"
//       />
//       <Tabs
//         style={{ color: "green", backgroundColor: "yellow" }}
//         variant="outlines"
//       >
    
//           <Tab label="Edit Properties" {...a11yProps(0)} />
//           <Tab label=" Delete Property" {...a11yProps(1)} />

//       </Tabs>
//     </Box>
//   );
// }
