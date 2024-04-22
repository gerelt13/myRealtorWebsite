import Link from "next/link";
import { Interface } from "readline";

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

export const Properties = ({ property }: Props) => {
  console.log(property);

  return (
    <div
      style={{
        boxShadow: "5px 10px #888888",
        backgroundColor: "white",
        borderRadius: "5px",
        border: "1px solid",
      }}
    >
      <p id="anyID"></p>
      <h1>Address: {property.address}</h1>
      <h1>City: {property.city}</h1>
      <h1>Brokers: {property.brokers}</h1>
      <h1>Price: {JSON.stringify(property.price)}</h1>
      <h1>Bedrooms: {JSON.stringify(property.bedrooms)}</h1>
      <h1>Bathrooms: {JSON.stringify(property.bathrooms)}</h1>
      <h1>sqft: {JSON.stringify(property.sqft)}</h1>
      <h1>description: {JSON.stringify(property.description)}</h1>
      <h1>image_url: {property.image_url}</h1>

      <h2>
        {Array.isArray(property.bedrooms) ? (
          <p style={{ display: "flex" }}>
            {property.bedrooms.map((bedrooms, index) => (
              <p key={index}>{bedrooms}</p>
            ))}
          </p>
        ) : (
          <p style={{ paddingLeft: "150px" }}>
            <span
              dangerouslySetInnerHTML={{
                __html: `
            <?xml version="1.0" encoding="utf-8"?>
            <svg width="20px" height="20px" viewBox="0 0 24 24" fill="blue" xmlns="http://www.w3.org/2000/svg">
              <path d="M15 3C15 2.44772 15.4477 2 16 2C19.3137 2 22 4.68629 22 8V16C22 19.3137 19.3137 22 16 22H8C4.68629 22 2 19.3137 2 16C2 15.4477 2.44772 15 3 15C3.55228 15 4 15.4477 4 16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4C15.4477 4 15 3.55228 15 3Z" fill="#000000"/>
              <path d="M3.70663 12.7845L3.16104 12.2746L3.70664 12.7845C4.09784 12.3659 4.62287 11.8265 5.17057 11.3274C5.72852 10.8191 6.26942 10.3905 6.69641 10.1599C7.06268 9.96208 7.75042 9.84035 8.40045 9.84848C8.62464 9.85128 8.81365 9.86944 8.9559 9.89472C8.96038 10.5499 8.95447 11.7469 8.95145 12.2627C8.94709 13.0099 9.83876 13.398 10.3829 12.8878L14.9391 8.61636C15.2845 8.2926 15.2988 7.74908 14.971 7.4076L10.4132 2.65991C9.88293 2.10757 8.95 2.48291 8.95 3.24856V5.16793C8.5431 5.13738 8.0261 5.11437 7.47937 5.13009C6.5313 5.15734 5.30943 5.30257 4.4722 5.88397C4.36796 5.95636 4.26827 6.03539 4.17359 6.11781C2.49277 7.58092 2.11567 9.90795 1.8924 11.7685L1.87242 11.935C1.74795 12.9722 3.02541 13.5134 3.70663 12.7845ZM9.35701 11.7935L9.70204 12.1615L9.35701 11.7935C9.35715 11.7934 9.35729 11.7932 9.35744 11.7931L9.35701 11.7935Z" stroke="#000000" stroke-width="1.5" stroke-linecap="round"/>
            </svg>
          `,
              }}
            ></span>
          </p>
        )}
      </h2>
      <h3></h3>
    </div>
  );
};
