"use client";
import React, { useEffect, useState } from "react";

const Properties = ({ property }: { property: any }) => {
  const [InputEditAddress, SetInputEditAddress] = useState("");
  const [InputEditCity, SetInputEditCity] = useState("");
  const [InputEditBrokers, SetInputEditBrokers] = useState("");
  const [InputEditBedrooms, SetInputEditBedrooms] = useState("");
  const [InputEditPrice, SetInputEditPrice] = useState("");
  const [InputEditBathrooms, SetInputEditBathrooms] = useState("");
  const [InputEditSqft, SetInputEditSqft] = useState("");
  const [InputEditDescription, SetInputEditDescription] = useState("");

  return (
    <div>
      <label htmlFor="address">Address:</label>
      <input
        type="text"
        id="address"
        value={InputEditAddress}
        onChange={(event) => SetInputEditAddress(event.target.value)}
      />
      <br />

      <label htmlFor="city">City:</label>
      <input
        type="text"
        id="city"
        value={InputEditCity}
        onChange={(event) => SetInputEditCity(event.target.value)}
      />
      <br />

      <label htmlFor="brokers">Brokers:</label>
      <input
        type="text"
        id="brokers"
        value={InputEditBrokers}
        onChange={(event) => SetInputEditBrokers(event.target.value)}
      />
      <br />

      <label htmlFor="Price">Price:</label>
      <input
        type="text"
        id="Price"
        value={InputEditPrice}
        onChange={(event) => SetInputEditPrice(event.target.value)}
      />
      <br />

      <label htmlFor="Bedrooms">Bedrooms:</label>
      <input
        type="text"
        id="Bedrooms"
        value={InputEditBedrooms}
        onChange={(event) => SetInputEditBedrooms(event.target.value)}
      />
      <br />

      <label htmlFor="Bathrooms">Bathrooms:</label>
      <input
        type="text"
        id="Bathrooms"
        value={InputEditBathrooms}
        onChange={(event) => SetInputEditBathrooms(event.target.value)}
      />
      <br />

      <label htmlFor="sqft">sqft:</label>
      <input
        type="text"
        id="sqft"
        value={InputEditSqft}
        onChange={(event) => SetInputEditSqft(event.target.value)}
      />
      <br />

      <label htmlFor="description">description:</label>
      <input
        type="text"
        id="description"
        value={InputEditDescription}
        onChange={(event) => SetInputEditDescription(event.target.value)}
      />
      <br />
    </div>
  );
};

export const Edit = () => {
  const [data, setData] = useState();
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  useEffect(() => {
    if (selectedPropertyId) {
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
    <div
      style={{
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

      {data && <Properties property={data[0]} />}
    </div>
  );
};
