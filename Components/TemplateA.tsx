import { BiBed, BiHeart, BiWifi } from "react-icons/bi";
import { BsStarFill } from "react-icons/bs";
import { GoLocation } from "react-icons/go";
import Image from "next/image";

export const details = [
  {
    location: "Collingwood",
    bed: "1 bed",
    img: "https://images.pexels.com/photos/258154/pexels-photo-258154.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "A Stylish Apt, 5 min walk to Queen Victoria Market",
    reviews: 2300,
    price: 200,
    rating: "4.0",
  },
  {
    location: "Fitzroy",
    bed: "2 beds",
    img: "https://images.pexels.com/photos/261102/pexels-photo-261102.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Cozy Apartment near Brunswick Street",
    reviews: 109,
    price: 180,
    rating: "4.5",
  },
  {
    location: "South Yarra",
    bed: "3 beds",
    img: "https://images.pexels.com/photos/338504/pexels-photo-338504.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Luxury Penthouse with Stunning City Views",
    reviews: 40,
    price: 560,
    rating: "4.0",
  },
  {
    location: "St Kilda",
    bed: "1 bed",
    img: "https://images.pexels.com/photos/189296/pexels-photo-189296.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Beachfront Studio with Ocean View",
    reviews: 66,
    price: 80,
    rating: "3.5",
  },
  {
    location: "CBD",
    bed: "2 beds",
    img: "https://images.pexels.com/photos/2034335/pexels-photo-2034335.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Modern Apartment in the Heart of the City",
    reviews: 598,
    price: 1000,
    rating: "5.0",
  },
  {
    location: "Richmond",
    bed: "1 bed",
    img: "https://images.pexels.com/photos/70441/pexels-photo-70441.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Charming Loft near Melbourne Cricket Ground",
    reviews: 176,
    price: 801,
    rating: "4.0",
  },
  {
    location: "Brunswick",
    bed: "2 beds",
    img: "https://images.pexels.com/photos/1134176/pexels-photo-1134176.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Spacious Apartment with Private Balcony",
    reviews: 98,
    price: 425,
    rating: "3.5",
  },
  {
    location: "Docklands",
    bed: "3 beds",
    img: "https://images.pexels.com/photos/594077/pexels-photo-594077.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Waterfront Condo with Spectacular Harbor Views",
    reviews: 152,
    price: 155,
    rating: "4.5",
  },
  {
    location: "Carlton",
    bed: "1 bed",
    img: "https://images.pexels.com/photos/164595/pexels-photo-164595.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Cosy Studio near Melbourne Museum",
    reviews: 19,
    price: 300,
    rating: "4.0",
  },
  {
    location: "Southbank",
    bed: "2 beds",
    img: "https://images.pexels.com/photos/1001965/pexels-photo-1001965.jpeg?auto=compress&cs=tinysrgb&w=600",
    landmark: "Modern High-Rise Apartment with River View",
    reviews: 89,
    price: 600,
    rating: "5.0",
  },
];

export default function TemplateA() {
  return (
    <div className="container">
      <div className="flex flex-col gap-5">
        {details.map((data, key) => (
          <div className="flex group hover:backdrop-blur-lg gap-4 mt-5 cursor-pointer" key={key}>
            <div className="h-40 overflow-hidden hover:shadow-lg w-72 bg-amber-500 rounded-md">
              <Image
                alt=""
                src={data.img}
                height={0}
                width={0}
                className="h-full duration-300 cursor-pointer hover:scale-125 w-full object-cover "
                unoptimized
              />
            </div>
            <div className="w-full flex flex-col py-1 justify-between">
              <div className="flex justify-between items-center">
                <p className="text-sm text-black cursor-pointer hover:underline hover:text-blue-600 duration-200">
                  Entire apartment rental in <b>{data.location}</b>
                </p>
                <p>
                  <BiHeart className="text-xl duration-300 active:scale-90 hover:text-red-500 cursor-pointer hover:scale-110" />
                </p>
              </div>
              <div className="flex ">
                <div className="flex gap-3">
                  {[1, 2, 3, 4, 5].map(() => (
                    <BsStarFill className="text-rose-500"/>
                  ))}
                </div>
                <p className="font-semibold ml-2 mr-2">{data.rating}</p>
                <p>{data.reviews.toLocaleString()} reviews</p>
              </div>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center text-black  gap-5">
                    <div className="flex items-center gap-1">
                      <p className="capitalize duration-300 font-semibold">{data.location}</p>
                      <p><GoLocation className="text-sm group-hover:text-red-500 duration-300"/></p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="capitalize font-semibold">{data.bed}</p>
                      <p><BiBed className="text-sm group-hover:text-emerald-500 duration-300"/></p>
                    </div>
                    <div className="flex items-center gap-1">
                      <p className="capitalize font-semibold">Wi-Fi</p>
                      <p><BiWifi className="text-sm group-hover:text-amber-500 duration-300"/></p>
                    </div>
                </div>
                <p>
                  <b className="text-black text-sm">${data.price.toLocaleString()}</b> AUD total
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
