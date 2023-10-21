
const express = require('express');
const cors=require("cors")
const app = express();
const port = 3001;

app.use(express.json());
app.use(cors())

const products = [
  {
    id: 1,
    name: 'Iphone',
    image: 'https://m.media-amazon.com/images/I/81YEyQqHjPL._AC_UY218_.jpg',
    description: 'iQOO Z7 ',
    price: 10,
  },
  {
    id: 2,
    name: 'Redmi',
    image: 'https://m.media-amazon.com/images/I/71K84j2O8wL._AC_UY218_.jpg',
    description: 'Redmi Note 12 ',
    price: 15,
  },
  {
     id: 3,
    name: 'Sony',
    image: 'https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg',
    description: 'Redmi Note 12 ',
    price: 2,
},
{
     id: 4,
    name: 'Sumsung',
    image: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY218_.jpg',
    description: 'HONOR 90',
    price: 7,
},
{
     id: 5,
    name: 'Blackberry',
    image: 'https://m.media-amazon.com/images/I/71tCOhEigtL._AC_UY218_.jpg',
    description: 'realme narzo 60X 5G',
    price: 5,
},
{
     id: 6,
    name: 'Vivo',
    image: 'https://m.media-amazon.com/images/I/716PQttLIeL._AC_UY218_.jpg',
    description: 'Samsung Galaxy M04 ',
    price: 78,
},{
     id: 7,
    name: 'Hawahi',
    image: 'https://m.media-amazon.com/images/I/8104evx11QL._AC_UY218_.jpg',
    description: 'realme narzo 60X 5G',
    price: 32,
},
{
     id: 8,
    name: 'Nokia',
    image: 'https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
{
     id: 9,
    name: 'Oppo',
    image: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
{
     id: 10,
    name: 'Oneplus',
    image: 'https://m.media-amazon.com/images/I/91ItZJh1FDL._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
{
     id: 11,
    name: 'Narzo',
    image: 'https://m.media-amazon.com/images/I/71tCOhEigtL._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},{
     id: 12,
    name: 'Karban',
    image: 'https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
{
     id: 13,
    name: 'Tesla',
    image: 'https://m.media-amazon.com/images/I/818UhQ1kpdL._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
{
     id: 14,
    name: 'Orange',
    image: 'https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},{
     id: 15,
    name: 'Renvo-7',
    image: 'https://m.media-amazon.com/images/I/71dEY4Neo3L._AC_UY218_.jpg',
    description: 'Redmi 12C ',
    price: 324,
},
];

const orders = [];

app.get('/products', (req, res) => {
  res.json(products);
});

app.post("/cart/:id", function (req, res) {
  orders = [...orders, req.body];
});

app.get("/cart", function (req, res) {
  res.status(200).json({ data: orders, msg: "Your data" });
});

app.post("/orderPlaced", function (req, res, next) {
  const { fname, lname, address } = req.body.user;
  if ((fname === "Shahid" && lname === "Raza", address == "Ranchi")) {
    res.status(200).send("ok");
  } else {
    res.status(200).send("Not authorized");
  }
});
app.post("/add-to-cart", function (req, res) {
  const productId = req.body.productId;

  // Find the product with the given productId from your product list
  
  const productToAdd = products.find((product) => product.id === productId);

  if (!productToAdd) {
    return res.status(404).send("Product not found");
  }

  // Add the product to the cart
  orders.push(productToAdd);

  res.status(200).json({ data: orders, msg: "Product added to cart" });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
