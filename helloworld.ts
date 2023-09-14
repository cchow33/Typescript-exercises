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
// (a) Use multiple parameters:
function fireUser(firstName: string, age: number, isNice: boolean) {}
// (b) Wrap parameters in an object and define the types inline
function fireUser({
  firstName,
  age,
  isNice,
}: {
  firstName: string;
  age: number;
  isNice: boolean;
}) {}
// (c) Wrap all the parameters in an object and extract the type:
type User = {
  firstName: string;
  age: number;
  role: UserRole;
};
function fireUser({ firstName, age, role }: User) {}

// Type the function parameters
// function updateProduct(name, price, images) {
//   console.log({ name, price, images });
// }
// updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);

function updateProduct(name: string, price: number, images: string[]) {
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

// Challenge: Type the function parameters and the return type
// function updateProduct(name, price, images) {
//   // update logic here ...
//   return { name, price, images };
// }

// // product should be of type Product (to be implemented)
// const product = updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);

type Product = {
  name: string;
  price: number;
  images: string[];
};

function updateProduct(name: string, price: number, images: string[]): Product {
  return { name, price, images };
}

// product is of type Product
const product = updateProduct("Shampoo", 2.99, ["image-1.png", "image-2.png"]);

// Challenge 5: OBJECT PARAMS: Type the function parameter and the return type
// function updateProduct({ name, price, images }) {
//   return { name, price, images };
// }

// const product = updateProduct({
//   name: "Shampoo",
//   price: 2.99,
//   images: ["image-1.png", "image-2.png"],
// });

function updateProduct({ name, price, images }: Product): Product {
  return { name, price, images };
  // return product; TS can infer the return type from the return value
}

// Challenge 6: PROPS with Typescript
enum UserRole {
  CEO = "ceo",
  CTO = "cto",
  SUBORDINATE = "inferior-person",
}

type UserProfileProps = {
  firstName: string;
  role: UserRole;
};

function UserProfile({ firstName, role }: UserProfileProps) {
  if (role === UserRole.CTO) {
    return <div>Hey Pat, you're AWESOME!!</div>;
  }
  return <div>Hi {firstName}, you suck!</div>;
}
// Type the props so that the component can be rendered as follows:
// <Product
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
// />

type ProductProps = {
  name: string;
  price: number;
  images: string[];
};

export function Product({ name, price, images }: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
    </div>
  );
}

// Challenge 7: CALLBACK PROPS
type UserProfileProps = {
  id: string;
  firstName: string;
  role: UserRole;
  fireUser: (id: string) => void;
};

function UserProfile({ id, firstName, role, fireUser }: 
export function Product({
  id,
  name,
  price,
  images,
  addToBasket,
}: ProductProps) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(id)}></button>
    </div>
  );
}

// Type the props so that the component can be rendered as follows:
// <Product
//   id="product-1"
//   name="Shampoo"
//   price={2.99}
//   images={["image-1.png", "image-2.png"]}
//   addToBasket={(id) => console.log(id)}
// />

type ProductProps = {
  id: string;
  name: string;
  price: number;
  images: string[];
  addToBasket: (id: string) => void;
};

export function Product({ id, name, price, images, addToBasket }: ProductProps) {
// export function Product({ id, name, price, images, addToBasket }) {
  return (
    <div>
      <div>
        {name} ${price}
      </div>
      {images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(id)}></button>
    </div>
  );
}

// extracting all the product fields to a
// separate type is even cleaner

type Product = {
  id: string;
  name: string;
  price: number;
  images: string[];
};

type ProductProps = {
  product: Product;
  addToBasket: (id: string) => void;
};

export function Product({ product, addToBasket }: ProductProps) {
  return (
    <div>
      <div>
        {product.name} ${product.price}
      </div>
      {product.images.map((src) => (
        <img src={src} />
      ))}
      <button onClick={() => addToBasket(product.id)}></button>
    </div>
  );
}

// Challenge 8: DEFAULT PROPS
type UserProfileProps = {
  age: number;
  role?: UserRole; // role isn't required, it's an optional field 
}

// If we want to have a default value for an optional prop we can assign it when destructuring the props.

function UserProfile({ firstName, role = UserRole.SUBORDINATE }: UserProfileProps) {
  if (role === UserRole.CTO) {
    return <div>Hey Pat, you're AWESOME!!</div>
  }
  return <div>Hi {firstName}, you suck!</div>
}

// Challenge: Make the images optional and use an empty array as default:
// type ProductProps = {
//   name: string;
//   price: number;
//   images: string[];
// };

// export function Product({ name, price, images }: ProductProps) {
//   return (
//     <div>
//       <div>
//         {name} ${price}
//       </div>
//       {images.map((src) => (
//         <img src={src} />
//       ))}
//     </div>
//   );
// }

type ProductProps = {
  name: string;
  price: number;
  images?: string[];
}

export function Product ({ name, price, images = []}: ProductProps){}

// Challenge 9: USESTATE Hook with TS (Inferred Type) from initial value
const [isFired, setIsFired] = useState(false);

// Challenge 10: useState Hook with TS (Manually Typed):
const [names, setNames] = useState([]); // what type of []?
const [user, setUser] = useState(); // what type of initial value?
const user = useState(null); // what's the type of null?
// useState is implemented with a generic type:
const [names, setNames] = useState<string[]>([]);


// Challenge 10: CUSTOM HOOKS with TypeScript