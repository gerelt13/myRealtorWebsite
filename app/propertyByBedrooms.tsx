import { useEffect, useState } from "react";
import { Property } from "./property";

export const PropertyByBedrooms = () => {
  const [data, setData] = useState();
  const [selectedPropertyBedrooms, setselectedPropertyBedrooms] = useState();

  useEffect(() => {
    if (selectedPropertyBedrooms) {
      fetch(
        `https://backendserver-h7nh.onrender.com/properties/bedrooms/${selectedPropertyBedrooms}`,

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
  }, [selectedPropertyBedrooms]);

  const handlePropertyChange = (event: any) => {
    setselectedPropertyBedrooms(event.target.value);
  };

  return (
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
      <select
        value={selectedPropertyBedrooms}
        onChange={handlePropertyChange}
        style={{ paddingRight: "125px", fontSize: "16px" }}
      >
        <option value="">Select by bedrooms</option>

        {["1", "2", "3", "4", "5", "6", "7", "8"].map(
          (selectedPropertyBedrooms) => (
            <option
              key={selectedPropertyBedrooms}
              value={selectedPropertyBedrooms}
            >
              bedroom {selectedPropertyBedrooms}
            </option>
          )
        )}
      </select>
      <br />
      <br />

      {data && <Property property={data[0]} />}
    </div>
  );
};
