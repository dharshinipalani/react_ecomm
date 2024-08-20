export interface Product {
  id: number;
  name: string;
  price: number;
  imgSrc: string;
  category: string;
  occasion: string;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Ring",
    price: 450,
    imgSrc: "/image/products/ring.png",
    category: "Fashion Acessories",
    occasion: "Baby Shower",
  },
  {
    id: 2,
    name: "Watch",
    price: 1589,
    imgSrc: "/image/products/watch.png",
    category: "Gadget",
    occasion: "House Warming",
  },
  {
    id: 3,
    name: "Teddy Bear",
    price: 435,
    imgSrc: "/image/products/teddyBear.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 4,
    name: "Flower Bouquet",
    price: 745,
    imgSrc: "/image/products/flower_purple.png",
    category: "Flowers",
    occasion: "Wedding",
  },
  {
    id: 5,
    name: "Bracelet",
    price: 380,
    imgSrc: "/image/products/bracelet.png",
    category: "Fashion Acessories",
    occasion: "Wedding",
  },
  {
    id: 6,
    name: "Flower Bouquet",
    price: 669,
    imgSrc: "/image/products/flower_pink.png",
    category: "Flowers",
    occasion: "Valentaine's Day",
  },
  {
    id: 7,
    name: "Namjoon",
    price: 1169,
    imgSrc: "/image/products/namjoon.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 8,
    name: "Ring",
    price: 1590,
    imgSrc: "/image/products/diamondRing.png",
    category: "Fashion Acessories",
    occasion: "Wedding",
  },
  {
    id: 9,
    name: "women's watch",
    price: 479,
    imgSrc: "/image/products/goldenWatch.png",
    category: "Gadget",
    occasion: "Valentaine's Day",
  },
  {
    id: 10,
    name: "Wooden Photo Frame",
    price: 699,
    imgSrc: "/image/products/photoFrame.png",
    category: "Photo Frame",
    occasion: "House Warming",
  },
  {
    id: 11,
    name: "cooking set",
    price: 849,
    imgSrc: "/image/products/cookingSet.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 12,
    name: "barbie",
    price: 759,
    imgSrc: "/image/products/barbie.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 13,
    name: "Digital Watch",
    price: 1259,
    imgSrc: "/image/products/digitalWatch.png",
    category: "Gadget",
    occasion: "Valentaine's Day",
  },
  {
    id: 14,
    name: "Welcome Photo Frame",
    price: 559,
    imgSrc: "/image/products/welcomePhoto.png",
    category: "Photo Frame",
    occasion: "House Warming",
  },
  {
    id: 15,
    name: "Wooden Cooking Set",
    price: 1459,
    imgSrc: "/image/products/woodCookingSet.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 16,
    name: "kid's watch",
    price: 259,
    imgSrc: "/image/products/babyWatch.png",
    category: "Gadget",
    occasion: "Birthday",
  },
  {
    id: 17,
    name: "clay toys",
    price: 275,
    imgSrc: "/image/products/clay.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 18,
    name: "books",
    price: 599,
    imgSrc: "/image/products/books.png",
    category: "Book",
    occasion: "House Warming",
  },
  {
    id: 19,
    name: "artGirl",
    price: 375,
    imgSrc: "/image/products/artGirl.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 20,
    name: "Book",
    price: 125,
    imgSrc: "/image/products/book.png",
    category: "Book",
    occasion: "Wedding",
  },
  {
    id: 21,
    name: "Highlighter",
    price: 399,
    imgSrc: "/image/products/highlighter.png",
    category: "Stationary",
    occasion: "Birthday",
  },
  {
    id: 22,
    name: "Pencil & Earser",
    price: 215,
    imgSrc: "/image/products/pencil&earser.png",
    category: "Stationary",
    occasion: "Birthday",
  },
  {
    id: 23,
    name: "Bear",
    price: 499,
    imgSrc: "/image/products/bear.png",
    category: "Toys",
    occasion: "House Warming",
  },
  {
    id: 24,
    name: "Bee",
    price: 199,
    imgSrc: "/image/products/bee.png",
    category: "Toys",
    occasion: "Baby Shower",
  },
  {
    id: 26,
    name: "Candle",
    price: 155,
    imgSrc: "/image/products/candle.png",
    category: "Toys",
    occasion: "House Warming",
  },
  {
    id: 27,
    name: "Coffee cup",
    price: 899,
    imgSrc: "/image/products/coffeecup.png",
    category: "Decorative items",
    occasion: "Valentaine's Day",
  },
  {
    id: 28,
    name: "Doll donuts",
    price: 1259,
    imgSrc: "/image/products/donuts.png",
    category: "Decorative items",
    occasion: "House Warming",
  },
  {
    id: 29,
    name: "Key chain",
    price: 659,
    imgSrc: "/image/products/keychain.png",
    category: "Toys",
    occasion: "Birthday",
  },
  {
    id: 30,
    name: "Mushroom",
    price: 899,
    imgSrc: "/image/products/mushroom.png",
    category: "Decorative items",
    occasion: " House Warming",
  },
  {
    id: 31,
    name: "Owl",
    price: 159,
    imgSrc: "/image/products/owl.png",
    category: "Decorative items",
    occasion: "Baby Shower",
  },
];

export const filters = [
  {
    title: "Category",
    items: [
      "Fashion Acessories",
      "Book",
      "Gadget",
      "Toys",
      "Flowers",
      "Stationary",
      "Photo Frame",
      "Decorative items",
    ],
  },
  {
    title: "Price Range",
    items: [
      "0 - 50",
      "50 - 100",
      "100 - 250",
      "250 - 500",
      "500 - 650",
      "650 - 900",
      "Above 900",
    ],
  },
  {
    title: "Occasions",
    items: [
      "Wedding",
      "Birthday",
      "Valentine's Day",
      "Baby Shower",
      "House Warming",
    ],
  },
];