import BS1 from '../assets/BestSeller/BestSeller1.jpg';
import BS1_ from '../assets/BestSeller/BestSeller1-.jpg';
import BS2 from '../assets/BestSeller/BestSeller2.png';
import BS2_ from '../assets/BestSeller/BestSeller2-.jpg';
import BS3 from '../assets/BestSeller/BestSeller3.webp';
import BS4 from '../assets/BestSeller/BestSeller4.jpg';
import BS4_ from '../assets/BestSeller/BestSeller4-.jpg';
import BS5 from '../assets/BestSeller/BestSeller5.jpg';
import BS5_ from '../assets/BestSeller/BestSeller5-.jpg';

import Mob1 from '../assets/Products/Mobile/Mobile12.jpg';
import Mob2 from '../assets/Products/Mobile/Mobile2.webp';
import Mob21 from '../assets/Products/Mobile/Mobile21.webp';


import Hood1 from '../assets/Products/Hoddie/Hoddie1.jpg';
import Hood2 from '../assets/Products/Hoddie/Hoddie2.webp';


const ProductData=[
    {
        id:"1",
        type :"bestseller",
        title:"Marvel Tshirt ",
        image:`${BS1}`,
        image2:`${BS1_}`,
        image3:`${BS2_}`,
        hover:"bestselling/1hover.webp",
        Description:"Show your love for your favorite Marvel superheroes with this stylish and comfortable Marvel t-shirt. Made from a soft and breathable blend of cotton and polyester, this t-shirt is perfect for everyday wear or for dressing up for a comic convention or movie premiere. The bold and vibrant design features iconic Marvel characters like Spider-Man, Captain America, Iron Man, and Black Panther, making it a great conversation starter among fellow fans. This t-shirt is a must-have for any Marvel enthusiast, whether you're a long-time fan or just discovering the Marvel universe.",
        category:"tshirt",
        price:549,
        oldprice:699,
        tages:"Marvel, t-shirt, superhero, Spider-Man, Captain America, Iron Man, Black Panther, fan, comfortable, soft, breathable, vibrant design",
        rating:3.5,
        color:"brown",
        size:"L"

    },
    {
        id:"2",
        type :"bestseller",
        title:"Naruto Tshirt",
        image:`${BS2}`,
        hover:"bestselling/2hover.webp",
       Description:"Show off your love for the hit anime series Naruto with this stylish and comfortable t-shirt. Made from a soft and breathable cotton blend, this shirt is perfect for casual wear or for attending anime conventions and events. The bold and eye-catching design features a print of Naruto Uzumaki in his classic orange and black outfit, along with the iconic Naruto logo. This shirt is a great addition to any Naruto fan's wardrobe, and is sure to be a conversation starter wherever you go.",
        category:"tshirt",
        price:599,
        oldprice:699,
        tages:"Naruto, anime, t-shirt, casual wear, anime conventions, Naruto Uzumaki, orange and black, iconic, breathable, cotton blend, machine washable",
        rating:3.3,
        color:"Navyblue",
        size:"L"
    },
    {
        id:"3",
        title:"Wings Of Freedom  Tshirt ",
        type :"bestseller",
        image:`${BS3}`,
        Description:"Show off your love for Attack on Titan with this stylish and comfortable t-shirt featuring the iconic Wings of Freedom design. Made from a soft and durable cotton blend, this t-shirt is perfect for everyday wear or for showing off your fandom at conventions or events. The bold and eye-catching design features the Survey Corps emblem with the wings of freedom, making it a great conversation starter for fellow fans. Whether you're a casual viewer or a die-hard fan, this t-shirt is a must-have for any Attack on Titan collection.",
        category:"tshirt",
        price:449,
        oldprice:699,
        tages:"Attack on Titan, Survey Corps, Wings of Freedom, t-shirt, cotton blend, fandom, casual wear, conventions, events, iconic design",
        rating:4.6,
        color:" Bottlegreen",
        size:"XL"
    },
    {
        id:"4",
        title:"Pack Plain Hoodie ",
        image:`${Hood1}`,
        Description:"Stay comfortable and stylish with this pack of three plain hoodies. Made from a soft and durable blend of cotton and polyester, these hoodies are perfect for any casual occasion. The solid color design makes them versatile and easy to match with any outfit. The hoodies are machine washable, making them easy to care for and maintain. With three different colors included in each pack, you'll always have a stylish and comfortable option for any occasion.",
        category:"hoodies",
        price:1799,
        oldprice:949,
        tages:" pack of three, plain, hoodies, cotton, polyester, solid color, versatile, easy to match, machine washable",
        rating:3.5,
        color:"black",
        size:"L"

    },
    {
        id:"5",
        title:"The Boys Tshirt",
        image:`${BS5}`,
        Description:"Show off your love for the superhero genre with this stylish and comfortable The Boys t-shirt. Made from a soft and breathable blend of cotton and polyester, this t-shirt is perfect for any casual occasion. The bold and eye-catching design features the iconic logo of The Boys in a modern font, making it a great conversation starter. Whether you're a fan of the original comic book series or the hit Amazon Prime Video show, this t-shirt is a must-have for any fan.",
        category:"tshirt",
        price:549,
        oldprice:699,
        tages:"The Boys, superhero, t-shirt, comic book, tshirt, Amazon Prime Video, logo, modern font, casual, breathable, cotton, polyester",
        rating:3.5,
        color:"black",
        size:"L"
    },
    {
        id: "6",
        title: "Tom & Jerry Hoodie",
        type :"bestseller",
        image: `${Hood2}`,
        Description: "Embark on a cosmic journey with this Space Explorer Hoodie. Featuring a mesmerizing space-themed design, this hoodie is perfect for those who love to dream and explore the unknown. Made from a comfortable blend of cotton and polyester, it's ideal for both style and comfort.",
        category: "hoodies",
        price: 1599,
        oldprice: 1899,
        tages: "Tom, Jerry, hoodie, cosmic, cartoon, comfortable, cotton, polyester ",
        rating: 4.2,
        color: "navyblue",
        size: "M"
    },
    {
        id: "7",
        title: "Gaming Master Tshirt",
        image: `${BS5}`,
        type :"bestseller",
        Description: "Level up your style with the Gaming Master Tshirt. Whether you're a casual gamer or a hardcore enthusiast, this shirt is perfect for showcasing your love for gaming. Made from a breathable cotton blend, it's comfortable for long gaming sessions.",
        category: "tshirt",
        price: 699,
        oldprice: 799,
        tages: "gaming, master, tshirt, gamer, comfortable, breathable, cotton blend",
        rating: 4.8,
        color: "black",
        size: "XL"
    },
    {
        id: "8",
        title: "Adventure Seeker Backpack",
        type :"bestseller",
        image: `${BS5}`,
        Description: "Gear up for your next adventure with the Adventure Seeker Backpack. Designed for comfort and functionality, this backpack features multiple compartments, adjustable straps, and a durable build. Whether you're hiking, traveling, or commuting, it's your perfect companion.",
        category: "accessories",
        price: 899,
        oldprice: 1099,
        tages: "adventure, seeker, backpack, hiking, travel, commute, comfortable, durable",
        rating: 4.5,
        color: "gray",
        size: "One Size"
    },
    {
        id: "9",
        title: "Mobile Cover",
        image: `${Mob1}`,
        Description: "Add a touch of vintage style to your look with these Vintage Vibe Sunglasses. With a classic design and UV protection, these sunglasses not only elevate your fashion game but also provide essential eye protection. Stay stylish under the sun!",
        category: "Mobile Cover",
        price: 299,
        oldprice: 349,
        tages: "vintage, Mobile, MObile cover, cover, UV protection, cute",
        rating: 4.0,
        color: "gray",
        size: "One Size"
    },
    {
        id: "10",
        title: "Samsung S23",
        image: `${Mob2}`,
        image2: `${Mob21}`,
        Description: "Stay warm and cozy during the winter months with this soft and luxurious Cozy Winter Blanket. Made from high-quality fleece material, this blanket is perfect for snuggling up on cold nights. The stylish design adds a touch of elegance to your home decor.",
        category: "Mobile Cover",
        price: 799,
        oldprice: 899,
        tages: "Samsung, S23,  Mobile, Mobile cover, cover, UV protection, tough",
        rating: 4.7,
        color: "black",
        size: "One Size"
    },
    {
        id: "11",
        title: "Fitness Pro Water Bottle",
        image: `${BS4_}`,
        Description: "Hydrate in style with the Fitness Pro Water Bottle. Designed for fitness enthusiasts, this water bottle features a leak-proof design, convenient flip-top lid, and a built-in handle for easy carrying. Stay hydrated during your workouts!",
        category: "fitness",
        price: 249,
        oldprice: 299,
        tages: "fitness, water bottle, hydration, leak-proof, flip-top lid",
        rating: 4.5,
        color: "blue",
        size: "750ml"
    },
    {
        id: "12",
        title: "Elegant Leather Wallet",
        image: `${BS3}`,
        Description: "Upgrade your everyday carry with this Elegant Leather Wallet. Crafted from genuine leather, this wallet combines style and functionality. With multiple card slots, a coin pocket, and a sleek design, it's perfect for the modern urbanite.",
        category: "accessories",
        price: 599,
        oldprice: 699,
        tages: "elegant, leather wallet, genuine leather, everyday carry, card slots, coin pocket",
        rating: 4.3,
        color: "brown",
        size: "One Size"
    },
    {
        id: "13",
        title: "Vintage Record Player",
        image: `${BS2_}`,
        Description: "Bring back the classic sound with this Vintage Record Player. With a nostalgic design and modern features, it allows you to enjoy your favorite vinyl records in style. The built-in speakers deliver a rich audio experience.",
        category: "electronics",
        price: 899,
        oldprice: 999,
        tages: "vintage, record player, vinyl, audio, nostalgia",
        rating: 4.6,
        color: "wood",
        size: "One Size"
      },
      {
        id: "14",
        title: "Camping Adventure Tent",
        image: `${BS2}`,
        Description: "Embark on a camping adventure with this spacious Camping Adventure Tent. Easy to set up and durable, it provides a comfortable shelter for your outdoor excursions. Stay close to nature without compromising on comfort.",
        category: "outdoor",
        price: 1299,
        oldprice: 1499,
        tages: "camping, adventure, tent, outdoor, shelter",
        rating: 4.8,
        color: "green",
        size: "4-person"
      },
      {
        id: "15",
        title: "Smart Home Security Camera",
        image: `${BS1_}`,
        Description: "Enhance your home security with this Smart Home Security Camera. With features like motion detection and remote monitoring, it keeps your home safe and provides peace of mind. Easy to install and compatible with smart devices.",
        category: "electronics",
        price: 349,
        oldprice: 399,
        tages: "smart home, security camera, motion detection, remote monitoring",
        rating: 4.5,
        color: "white",
        size: "One Size"
      },
      {
        id: "16",
        title: "Gourmet Cooking Set",
        image: `${BS1}`,
        Description: "Elevate your culinary skills with this Gourmet Cooking Set. High-quality cookware and utensils make cooking a delight. Whether you're a seasoned chef or a home cook, this set adds style and functionality to your kitchen.",
        category: "kitchen",
        price: 1799,
        oldprice: 1999,
        tages: "gourmet, cooking set, cookware, utensils, kitchen",
        rating: 4.7,
        color: "silver",
        size: "10-piece"
      },
      {
        id: "17",
        title: "Classic Leather Watch",
        image: `${BS5}`,
        Description: "Complete your look with this Classic Leather Watch. The timeless design and reliable movement make it a stylish accessory for any occasion. The genuine leather strap ensures comfort and durability.",
        category: "accessories",
        price: 499,
        oldprice: 599,
        tages: "classic, leather watch, timeless, accessories",
        rating: 4.2,
        color: "black",
        size: "One Size"
      },
      {
        id: "18",
        title: "Yoga Essentials Kit",
        image: `${BS5_}`,
        Description: "Embark on your yoga journey with this Yoga Essentials Kit. The kit includes a non-slip mat, blocks, and a carrying bag. Whether you're a beginner or an experienced yogi, this kit provides the tools for a fulfilling practice.",
        category: "fitness",
        price: 599,
        oldprice: 699,
        tages: "yoga, essentials kit, non-slip mat, blocks, fitness",
        rating: 4.4,
        color: "purple",
        size: "One Size"
      },
      {
        id: "19",
        title: "Digital Drawing Tablet",
        image: `${BS1}`,
        Description: "Unleash your creativity with this Digital Drawing Tablet. Whether you're an artist or a designer, the pressure-sensitive pen and responsive surface provide a seamless drawing experience. Ideal for digital art and graphic design.",
        category: "electronics",
        price: 699,
        oldprice: 799,
        tages: "digital drawing tablet, creativity, artist, design",
        rating: 4.6,
        color: "black",
        size: "One Size"
      },
      {
        id: "20",
        title: "Sleek Laptop Backpack",
        image: `${BS2}`,
        Description: "Carry your essentials in style with this Sleek Laptop Backpack. The modern design, multiple compartments, and padded laptop sleeve make it perfect for daily commuting or travel. Stay organized and on the go.",
        category: "accessories",
        price: 799,
        oldprice: 899,
        tages: "sleek, laptop backpack, modern design, commuting, travel",
        rating: 4.3,
        color: "gray",
        size: "One Size"
      }
]

export default ProductData