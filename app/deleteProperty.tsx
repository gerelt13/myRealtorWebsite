"use client";
import React, { ChangeEvent, useEffect, useState } from "react";
import { Property } from "./property";
import { Button, Stack, TextField } from "@mui/material";

const DeleteProperty = () => {
  const [selectedPropertyId, setSelectedPropertyId] = useState<string>("");

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
        alert("Property deleted successfully");
      } else {
        throw new Error("Failed to delete property");
      }
    } catch (error) {
      console.error("Error deleting property:", error);
      alert("An error occurred while deleting the property");
    }
  };

  function handlePropertyChange(event: ChangeEvent<HTMLInputElement>): void {
    setSelectedPropertyId(event.target.value);
  }

  return (
    <div>
      <h1>Delete Properties</h1>
      <Stack direction="row" gap="8px" pt="20px">
        <TextField
          onChange={handlePropertyChange}
          style={{
            backgroundColor: "white",
            overflow: "hidden",
            borderRadius: "8px",
          }}
        />
        <Button
          variant="contained"
          onClick={() => deleteProperty(selectedPropertyId)}
        >
          Delete property
        </Button>
      </Stack>
    </div>
  );
};

export default DeleteProperty;
