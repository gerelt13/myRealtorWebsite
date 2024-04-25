import Link from "next/link";
import { useState } from "react";
import { Interface } from "readline";
// import { Stack } from "@mui/material/Stack";




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
};

