import React, { useEffect, useState } from "react";
import { Properties } from "./properties";

export const SingleProperty = () => {
  const [data, setData] = useState();
  const [selectedPropertyId, setSelectedPropertyId] = useState(null);

  useEffect(() => {
    if (selectedPropertyId) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/${selectedPropertyId}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
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
