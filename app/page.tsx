"use client";
import { useEffect, useState, SyntheticEvent } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Properties } from "./properties";
import { SingleProperty } from "./singleProperty";
import { PropertyByCity } from "./propertyByCity";
import { PropertyByBedrooms } from "./propertyByBedrooms";
import { PropertyByAddress } from "./propertyByAddress";

import { useRouter } from "next/navigation";
import { Edit } from "./edit/page";
import { Delete } from "@mui/icons-material";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

interface Property {
  _id: { common: string | number };
  address: { common: string | number };
  city: string;
  zipCode: number;
  brokers: string;
  price: number;
  bedrooms: string;
  bathrooms: number;
  sqft: number;
  description: { common: string | number };
  imageUrl: boolean | string;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 5 }}>
          <Typography
            style={{ color: "black", display: "flex", border: "solid 1" }}
          >
            {children}
          </Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Property[]>([]);

  const [error, setError] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const token = localStorage.getItem("token");
    if (!token) {
      setError(true);
      setLoading(false);
      return;
    }
    fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then(async (res) => {
        if (res.status === 401) {
          console.log(res.status);
          throw new Error("Unauthorized: Invalid token");
        }
        if (res.status === 500) {
          throw new Error("Server Error: Failed to fetch");
        }
        console.log(res.status);

        if (!res.ok) {
          throw new Error("Failed to fetch");
        }
        const data = await res.json();
        setData(data);
      })
      .catch((error) => {
        router.push("/login");
        setError(true);
        console.error(error.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div
        style={{
          backgroundImage: 'url("realtorHouse3.jpg")',
          color: "black",
          fontSize: "64px",
          height: "100vh",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }
  if (error) {
    return (
      <div
        style={{
          backgroundImage: 'url("realtorHouse3.jpg")',
          fontSize: "64px",
          height: "100vh",
          padding: "10px",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>There is error or Timeout occurs</h1>
      </div>
    );
  }
  if (data.length === 0) {
    return (
      <div
        style={{
          height: "100vh",
          padding: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <h1>Nothing to display</h1>
      </div>
    );
  }

  const handleChange = (event: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleSignOut = () => {
    console.log("Sign out button clicked");
    localStorage.removeItem("token");
    router.push("/login");
  };

  return (
    <Box
      sx={{
        minHeight: "100vh",
        
          backgroundImage: "url(/houseBlueRealtor.jpg)",
          backgroundSize: "cover",
          backgroundPosition: "center",
  
      
        display: "flex",
        flexDirection: "column",
        alignContent: "center",
      }}
    >
      <Box
        sx={{
          borderBottom: "1px",
          borderColor: "solid",
          display: "flex",
        }}
      >
        <Tabs
          style={{ fontSize: "44px", fontWeight: "bold" }}
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="Properties" {...a11yProps(0)} />
          <Tab label=" Single Property" {...a11yProps(1)} />
          <Tab label="Property by city" {...a11yProps(2)} />
          <Tab label="Property by bedrooms" {...a11yProps(3)} />
          <Tab label="Property by address" {...a11yProps(4)} />
          <Tab label="Edit" {...a11yProps(5)} />
          <Tab label="Delete" {...a11yProps(5)} />

        </Tabs>
      </Box>

      <Box>
        <button
          style={{
            borderRadius: 2,

            width: 1700,
            fontSize: 20,
            textAlign: "center",
          }}
          onClick={handleSignOut}
        >
          Sign Out
        </button>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            gap: "25px",
          }}
        >
          {(data as Property[]).map((property: Property) => (
            <Box key={property._id}>
              <Box
                sx={{
                  borderRadius: 2,
                  p: 2,
                  width: 350,
                  fontSize: 20,
                  textAlign: "center",
                }}
              >
                <Properties property={property}></Properties>
              </Box>
            </Box>
          ))}
        </div>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        <SingleProperty />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={2}>
        <PropertyByCity />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={3}>
        <PropertyByBedrooms />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={4}>
        <PropertyByAddress />
      </CustomTabPanel>

      <CustomTabPanel value={value} index={5}>
        <Edit />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={6}>
        <Delete />
      </CustomTabPanel>
    </Box>
  );
}
