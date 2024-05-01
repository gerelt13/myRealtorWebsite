"use client";
import React, { useEffect, useState } from "react";
import { Property } from "./property";
import { Button, Stack } from "@mui/material";

const Properties = ({ property }: { property: Property }) => {
  const [InputEditAddress, SetInputEditAddress] = useState<string>(
    property.address
  );
  const [InputEditCity, SetInputEditCity] = useState<string>(property.city);
  const [InputEditBrokers, SetInputEditBrokers] = useState<string>(
    property.brokers
  );
  const [bathrooms, setBathrooms] = useState<number>(property.bathrooms);
  const [bedrooms, setBedrooms] = useState<number>(property.bedrooms);
  const [InputEditPrice, SetInputEditPrice] = useState<number>(property.price);
  const [InputEditSqft, SetInputEditSqft] = useState<number>(property.sqft);
  const [InputEditDescription, SetInputEditDescription] = useState<string>(
    property.description
  );

  const editProperty = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/update/${property._id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          body: JSON.stringify({
            address: InputEditAddress,
            city: InputEditCity,
            brokers: InputEditBrokers,
            price: InputEditPrice,
            bedrooms: bedrooms,
            bathrooms: bathrooms,
            sqft: InputEditSqft,
            description: InputEditDescription,
          }),
        }
      );
      if (response.ok) {
        alert("Property updated successfully");
      } else {
        throw new Error("Failed to update property");
      }
    } catch (error) {
      console.error("Error updating property:", error);
      alert("An error occurred while updating the property");
    }
  };

  return (
    <div
      style={{
        display: "flow",
        gap: "5px",
        padding: "10px",
        marginTop: "140px",
        paddingLeft: "100px",
      }}
    >
      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="address">Address:</label>
        <br />
        <input
          type="text"
          id="address"
          value={InputEditAddress}
          onChange={(event) => SetInputEditAddress(event.target.value)}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="city">City:</label>
        <br />
        <input
          type="text"
          id="city"
          value={InputEditCity}
          onChange={(event) => SetInputEditCity(event.target.value)}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="brokers">Brokers:</label>
        <br />
        <input
          type="text"
          id="brokers"
          value={InputEditBrokers}
          onChange={(event) => SetInputEditBrokers(event.target.value)}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="Price">Price:</label>
        <br />
        <input
          type="number"
          id="Price"
          value={InputEditPrice}
          onChange={(event) => SetInputEditPrice(Number(event.target.value))}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="Bedrooms">Bedrooms:</label>
        <br />
        <input
          type="number"
          id="Bedrooms"
          value={bedrooms}
          onChange={(event) => setBedrooms(Number(event.target.value))}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="Bathrooms">Bathrooms:</label>
        <br />
        <input
          type="number"
          id="Bathrooms"
          value={bathrooms}
          onChange={(event) => setBathrooms(Number(event.target.value))}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="sqft">sqft:</label>
        <br />
        <input
          type="number"
          id="sqft"
          value={InputEditSqft}
          onChange={(event) => SetInputEditSqft(Number(event.target.value))}
        />
      </div>

      <div
        style={{
          border: "1px solid #ccc",
          borderRadius: "5px",
          padding: "5px",
        }}
      >
        <label htmlFor="description">description:</label>
        <br />
        <input
          type="text"
          id="description"
          value={InputEditDescription}
          onChange={(event) => SetInputEditDescription(event.target.value)}
        />
      </div>

      <br />

      <Button
        style={{ color: "black", backgroundColor: "#BCCEE1" }}
        variant="contained"
        onClick={editProperty}
      >
        Update
      </Button>
    </div>
  );
};

export const Edit = () => {
  const [data, setData] = useState<Property[]>();
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>();

  useEffect(() => {
    if (selectedPropertyId) {
      setData([]);
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${selectedPropertyId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then(async (res) => {
        const data = await res.json();
        setData(data);
      });
    }
  }, [selectedPropertyId]);

  const handlePropertyChange = (event: any) => {
    setSelectedPropertyId(event.target.value);
  };

  return (
    <>
      <div
        style={{
          marginTop: "100px",
          boxShadow: "5px 10px #888888",
          backgroundColor: "white",
          borderRadius: "5px",
          flexWrap: "wrap",
          border: "1px solid",
          width: 350,
          fontSize: 20,
          textAlign: "center",
        }}
      >
        <img
          src="https://images6.alphacoders.com/343/thumb-1920-343179.jpg"
          alt="Property Image"
        />

        <select
          value={selectedPropertyId}
          onChange={handlePropertyChange}
          style={{ padding: "5px", fontSize: "16px" }}
        >
          <option value="">Select by id </option>

          {[
            "65e22d534d23b46f71752434",
            "65e22d8f4d23b46f71752435",
            "65e231514d23b46f71752436",
            "65e2317d4d23b46f71752437",
            "65e231a74d23b46f71752438",
            "65e231e04d23b46f71752439",
            "65e5ec63058e7fbdbb5eec2a",
            "65e7a439286a4cb2d915eb2b",
          ].map((propertyId) => (
            <option key={propertyId} value={propertyId}>
              Property ID: {propertyId}
            </option>
          ))}
        </select>
        <br />
        <br />
      </div>
      {data && data[0] && <Properties property={data[0]} />}
    </>
  );
};
