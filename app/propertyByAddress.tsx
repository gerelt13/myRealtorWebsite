import { useEffect, useState } from "react";
import { Properties } from "./properties";

export const PropertyByAddress = () => {
  const [data, setData] = useState();
  const [selectedPropertyAddress, setSelectedPropertyAddress] = useState(data);

  useEffect(() => {
    if (selectedPropertyAddress) {
      fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/address/${selectedPropertyAddress}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ).then(async (res) => {
        const data = await res.json();
        setData(data);
      });
    }
  }, [selectedPropertyAddress]);

  const handlePropertyChange = (event: any) => {
    setSelectedPropertyAddress(event.target.value);
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
        value={selectedPropertyAddress}
        onChange={handlePropertyChange}
        style={{ paddingRight: "125px", fontSize: "16px" }}
      >
        <option value="">Select by address</option>

        {[
          "444 Washington St",
          "222 Toronto St",
          "555 State St",
          "3456 Ohio St",
          "678 Flower St",
          "3434 Flower St",
          "456 Stonebridge ave",
          "111 Washington St",
        ].map((propertyAddress) => (
          <option key={propertyAddress} value={propertyAddress}>
            {propertyAddress}
          </option>
        ))}
      </select>
      <br />
      <br />

      {data && <Properties property={data[0]} />}
    </div>
  );
};
