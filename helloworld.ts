// Challenge 1 TYPE: create a type describing this object

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

// Challenge 2 ENUM: create a type describing this object, use an enum for the "status" field

enum ProductStatus {
  DRAFT = "draft",
  PUBLISHED = "published",
}

type Product = {
  name: string;
  price: number;
  images: string[];
  status: ProductStatus;
};

const product = {
  name: "Shampoo",
  price: 2.99,
  images: ["image-1.png", "image-2.png"],
  status: ProductStatus.PUBLISHED,
};

// Challenge 3: Typing FUNCTION PARAMETERS
// 1. Use multiple parameters:
function fireUser(firstName: string, age: number, isNice: boolean) {}

// 2. Wrap parameters in an object and define the types inline
function fireUser({
  firstName,
  age,
  isNice,
}: {
  firstName: string;
  age: number;
  isNice: boolean;
}) {}

// 3. Wrap all the parameters in an object and extract the type:
type User = {
  firstName: string;
  age: number;
  role: UserRole;
};
function fireUser({ firstName, age, role }: User) {}

// The challenge: type the function parameters
// function updateProduct(name, price, images) {
//   // update logic here ...
//   console.log({ name, price, images });
// }
// updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);

function updateProduct(name: string, price: number, images: string[]) {
  // update logic here ...
  console.log({ name, price, images });
}

updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);

// Challenge 4: Typing FUNCTION RETURN VALUES
function fireUser(firstName: string, age: number, role: UserRole): User {
  return { firstName, age, role };
}

// or let TypeScript infer the return type:
function fireUser(user: User) {
  return user;
}
