import Link from "next/link";
import { useState } from "react";
import { Interface } from "readline";
import { Stack } from "@mui/material/Stack";




interface Property {
  _id: String;
  address: String;
  city: String;
  brokers: String;
  price: Number;
  bedrooms: String[];
  bathrooms: String[];
  sqft: Number;
  description: String;
  image_url: String;
}

interface Props {
    property: Property;
  }

  const Properties = ({ property }: { property: any }) => {
    const [ address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [brokers, setBrokers] = useState("");
    const [bedrooms, SetBedrooms] = useState("");
    const [price, setPrice] = useState("");
    const [bathrooms, setBathrooms] = useState("");
    const [sqft, setSqft] = useState("");
    const [description, setDescription] = useState("");


