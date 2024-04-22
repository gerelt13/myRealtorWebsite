"use client";
import React, { useEffect, useState } from "react";
import { Properties } from "../properties";

const Delete = () => {
  const [properties, setProperties] = useState<Property[]>([]);
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(
    null
  );

 

  const deleteProperty = async (id: string) => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_SERVER_URL}/properties/deletebyid/${id}`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      if (response.ok) {
        setProperties(properties.filter((property) => property._id !== id));
        alert("Property deleted successfully");
      } else {
        throw new Error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("An error occurred while deleting the property");
    }
  };

    function handlePropertyChange(event: ChangeEvent<HTMLSelectElement>): void {
        throw new Error("Function not implemented.");
    }

  return (
    <div>
      <h1>Delete Properties</h1>
      {properties.map((property) => (
        <div key={property._id}>
          <h2>{property.address}</h2>
          <p>{property.city}</p>
          <p>{property.brokers}</p>
          <p>{property.price}</p>
          <p>{property.bedrooms}</p>
          <p>{property.bathrooms}</p>
          <p>{property.sqft}</p>
          <p>{property.description}</p>
          <img src={property.image_url} alt={property.address} />
          <button onClick={() => deleteProperty(property._id)}>Delete</button>
        </div>
      ))}
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
  );
};

export default Delete;