import React, { useEffect, useState } from "react";
import { Properties } from "./properties";

export const PropertyByCity = () => {
  const [data, setData] = useState();
  const [selectedPropertyCity, setSelectedPropertyCity] = useState(data);

  useEffect(() => {
    if (selectedPropertyCity) {
      fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/properties/city/${selectedPropertyCity}`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }).then(async (res) => {
        const data = await res.json();
        setData(data);
      });
    }
  }, [selectedPropertyCity]);

  const handlePropertyChange = (event: any) => {
    setSelectedPropertyCity(event.target.value);
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
      <select
        value={selectedPropertyCity}
        onChange={handlePropertyChange}
        style={{ paddingRight: "125px", fontSize: "16px" }}
      >
        <option value="">Select by city</option>

        {[
          "Lombard",
          "Glenview",
          "Skokie",
          "Algonquin",
          "North Chicago",
          "Arlington Heights",
          "Rolling Meadows",
          "Huntley",
        ].map((propertyCity) => (
          <option key={propertyCity} value={propertyCity}>
            {propertyCity}
          </option>
        ))}
      </select>
      <br />
      <br />

      {data && <Properties property={data[0]} />}
    </div>
  );
};
