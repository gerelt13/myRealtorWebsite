export interface Property {
  _id: string;
  address: string;
  city: string;
  brokers: string;
  price: number;
  bedrooms: number;
  bathrooms: number;
  sqft: number;
  description: string;
  image_url?: string;
}

interface Props {
  property: Property;
}

export const Property = ({ property }: Props) => {
  return (
    <div
      style={{
        marginTop: "50px",
        boxShadow: "5px 10px #888888",
        backgroundColor: "white",
        borderRadius: "5px",
        border: "5px",
      }}
    >
      <img
        src="https://images6.alphacoders.com/343/thumb-1920-343179.jpg"
        alt="Property Image"
      />
      {/* <img
        src={
          property.image_url || "https://images.alphacoders.com/462/462296.jpg"
        }
        alt="Property Image"
      /> */}

      <p id="anyID">ID: {property._id}</p>
      <h1>Address: {property.address}</h1>
      <h1>City: {property.city}</h1>
      <h1>Brokers: {property.brokers}</h1>
      <h1>Price: {JSON.stringify(property.price)}</h1>
      <h1>Bedrooms: {JSON.stringify(property.bedrooms)}</h1>
      <h1>Bathrooms: {JSON.stringify(property.bathrooms)}</h1>
      <h1>sqft: {JSON.stringify(property.sqft)}</h1>
      <h1>description: {JSON.stringify(property.description)}</h1>

      {/* <h1>description: {JSON.stringify(property.description)}</h1> */}

      {/* <p id="anyID">ID: {property._id}</p>
      <h1>Address: <img src={property.image_url || "https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt="Property Image"/> {property.address}</h1>
      <h1>City: <img src={property.image_url || "https://images.alphacoders.com/462/462296.jpg"} alt="Property Image"/> {property.city}</h1>
      <h1>Brokers: <img src={property.image_url || "https://images.alphacoders.com/462/462296.jpg"} alt="Property Image"/> {property.brokers}</h1>
      <h1>Price: <img src={property.image_url || "https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt="Property Image"/> {JSON.stringify(property.price)}</h1>
      <h1>Bedrooms: <img src={property.image_url || "https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt="Property Image"/> {JSON.stringify(property.bedrooms)}</h1>
      <h1>Bathrooms: <img src={property.image_url || "https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt="Property Image"/> {JSON.stringify(property.bathrooms)}</h1>
      <h1>sqft: <img src={property.image_url || "https://images6.alphacoders.com/343/thumb-1920-343179.jpg"} alt="Property Image"/> {JSON.stringify(property.sqft)}</h1>
      <h1>description: <img src={property.image_url || "https://images.alphacoders.com/462/462296.jpg"} alt="Property Image"/> {JSON.stringify(property.description)}</h1> */}
    </div>
  );
};
