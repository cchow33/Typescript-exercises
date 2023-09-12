// Challenge: create a type describing this object

const product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: "published",
};

type Product = {
  name: string;
  price: number;
  images: string[];
  status: string;
};

// Challenge: create a type describing this object
// this time use an enum for the "status" field
