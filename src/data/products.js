import laptop1 from "../assets/laptop1.jpeg";
import laptop2 from "../assets/laptop2.jpeg";
import phone1 from "../assets/phone1.jpeg";
import phone2 from "../assets/phone2.jpeg";
import tablet1 from "../assets/tablet1.jpeg";

export const products = [
  {
    id: 1,
    name: "Dell Latitude 7330",
    price: 100,
    images: [laptop1],
    specs: ["12th Gen Intel Core i7", "16GB RAM", "1TB SSD", "Windows 11 Pro"],
  },
  {
    id: 2,
    name: "Microsoft Desktop Tablet",
    price: 100,
    images: [tablet1],
    specs: ["4GB RAM", "64GB Storage", "Windows 10"],
  },
  {
    id: 3,
    name: "iPhone 8 Plus",
    price: 100,
    images: [phone1],
    specs: ["64GB Storage"],
  },
  {
    id: 4,
    name: "iPhone 14",
    price: 100,
    images: [phone2],
    specs: ["128GB Storage"],
  },
  {
    id: 5,
    name: "Dell Latitude 7320",
    price: 100,
    images: [laptop2],
    specs: ["11th Gen Intel Core", "16GB RAM", "1TB SSD", "Windows 11 Pro"],
  },
];

export const formatPrice = (amount) =>
  new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    maximumFractionDigits: 0,
  }).format(amount);
