"use client";

import React, { ChangeEvent, useState } from "react";
import { Button, Stack, TextField } from "@mui/material";
import { Property } from "./property";

const CreateProperty = () => {
  const [property, setProperty] = useState<{
    address: string;
    city: string;
    brokers: string;
    price: number;
    bedrooms: number;
    bathrooms: number;
    sqft: number;
    description: string;
    image_url?: string;
  }>({
    address: "",
    city: "",
    brokers: "",
    price: 0,
    bedrooms: 0,
    bathrooms: 0,
    sqft: 0,
    description: "",
    // image_url: "",
  });

  const createProperty = async (newProperty: Property) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify(newProperty),
        }
      );
      if (response.ok) {
        alert("Property created successfully");
      } else {
        throw new Error("Failed to create property");
      }
    } catch (error) {
      console.error("Error creating property:", error);
      alert("An error occurred while creating the property");
    }
  };

  const handlePropertyChange = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setProperty((prevProperty) => ({
      ...prevProperty,
      [name]: value,
    }));
  };

  return (

<div style={{ marginTop: "100px", backgroundColor: "transparent", borderRadius:"4px",padding: "20px",boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>
      <h1 style={{ color: "black" }}>Create Property</h1>
      <div style={{ border: "2px solid grey", borderRadius:"4px", padding: "20px", backgroundColor: "#BCCEE1" , boxShadow: "0px 0px 10px rgba(0, 0, 0, 0.5)" }}>


      <Stack direction="row" gap="8px" pt="85px">  
        <TextField

          name="address"
          label="Address"
          variant="outlined"
          value={property.address}
          onChange={handlePropertyChange}
        />
        <TextField
          name="city"
          label="City"
          variant="outlined"
          value={property.city}
          onChange={handlePropertyChange}
        />
        <TextField
          name="brokers"
          label="Brokers"
          variant="outlined"
          value={property.brokers}
          onChange={handlePropertyChange}
        />
        <TextField
          name="price"
          label="Price"
          variant="outlined"
          type="number"
          value={property.price}
          onChange={handlePropertyChange}
        />
        <TextField
          name="bedrooms"
          label="Bedrooms"
          variant="outlined"
          type="number"
          value={property.bedrooms}
          onChange={handlePropertyChange}
        />
        <TextField
          name="bathrooms"
          label="Bathrooms"
          variant="outlined"
          type="number"
          value={property.bathrooms}
          onChange={handlePropertyChange}
        />
        <TextField
          name="sqft"
          label="Square Feet"
          variant="outlined"
          type="number"
          value={property.sqft}
          onChange={handlePropertyChange}
        />
        <TextField
          name="description"
          label="Description"
          variant="outlined"
          multiline
          rows={4}
          value={property.description}
          onChange={handlePropertyChange}
        />
        {/* <TextField
          name="image_url"
          label="Image URL"
          variant="outlined"
          value={property.image_url}
          onChange={handlePropertyChange}
        /> */}
        <Button variant="contained" onClick={() => createProperty(property)}>
          Create property
        </Button>
      </Stack>
    
</div>
</div>

    
  );
};

export default CreateProperty;
