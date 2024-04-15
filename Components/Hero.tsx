"use client";
import { BiBrightness, BiHeart } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { BsStarFill } from "react-icons/bs";
import { FaBars } from "react-icons/fa";
import { details } from "./TemplateA";
import { useState } from "react";
import Image from "next/image";
import Nav from "./Nav";
import Action from "./Action";

export default function Hero() {
  const [active, setActive] = useState(0);
  const locations = [
    {
      img: "https://images.unsplash.com/photo-1535827841776-24afc1e255ac?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "England, London",
    },
    {
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "France, Paris",
    },
    {
      img: "https://plus.unsplash.com/premium_photo-1675745329954-9639d3b74bbf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Italy, Rome",
    },
    {
      img: "https://images.unsplash.com/photo-1596436889106-be35e843f974?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Japan, Tokyo",
    },
    {
      img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Australia, Sydney",
    },
    {
      img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`",
      location: "United States, New York City",
    },
    {
      img: "https://images.unsplash.com/photo-1571003123894-1f0594d2b5d9?q=80&w=1498&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Spain, Barcelona",
    },
    {
      img: "https://images.unsplash.com/photo-1549294413-26f195200c16?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "Brazil, Rio de Janeiro",
    },
    {
      img: "https://images.unsplash.com/photo-1540541338287-41700207dee6?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "India, New Delhi",
    },
    {
      img: "https://images.unsplash.com/photo-1543968332-f99478b1ebdc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      location: "China, Beijing",
    },
  ];
  return (
    <div className="h-screen flex flex-col justify-between relative">
      <div className="">
        <div className="container">
          {locations.map((data, key) => (
            <div
            className={`absolute h-screen z-[-1] w-screen top-0 duration-500 left-0 bg-red-500 ${
              active === key ? "opacity-100 visible" : "opacity-0 invisible"
            }`}
            >
            <div className="absolute bgOpacity z-10 w-full h-full left-0 top-0"></div>
              <Image
                alt=""
                src={data.img}
                height={0}
                width={0}
                className="h-full duration-300 z-10 cursor-pointer peer-hover:scale-125 rounded w-full object-cover "
                unoptimized
              />
            </div>
          ))}
          <div className="flex">
            <div className="flex gap-2 pt-40 items-center">
              <GoLocation className="text-xl text-rose-500 " />
              <p className="text-3xl text-white font-semibold">
                {locations[active].location}
              </p>
            </div>
          </div>

          <div className="mt-4 overflow-x-auto hover:w-full group duration-300 glass w-[600px] p-5 rounded-md">
            <div className="flex justify-between items-center">
              <p className="font-semibold text-white text-xl">
                Other Popular Locations
              </p>
              <p className="font-semibold text-white invisible group-hover:visible opacity-0 group-hover:opacity-100 delay-300 cursor-pointer duration-500 text-sm">
                SEE MORE
              </p>
            </div>
            <div className="grid mt-3 grid-flow-col duration-500 auto-cols-[150px] group-hover:w-full w-[570px] overflow-x-auto grid-rows-[150px] gap-3 snap-x">
              {locations.map((data, key) => (
                <div
                  onClick={() => setActive(key)}
                  className="overflow-hidden snap-start snap-mandatory relative rounded shadow-lg duration-300 origin-center active:scale-90"
                >
                  <div className="h-full cursor-pointer w-full peer absolute  top-0 left-0 bgOpacity1 z-20"></div>
                  <Image
                    alt=""
                    src={data.img}
                    height={0}
                    width={0}
                    className="h-full duration-300 z-10 cursor-pointer peer-hover:scale-125 rounded w-full object-cover "
                    unoptimized
                  />
                  <p className="absolute bottom-2 left-2 z-30 font-semibold text-white">
                    {data.location}
                  </p>
                  <BiHeart className="absolute top-2 right-2 z-30 stroke-1 text-sm text-rose-500 cursor-pointer" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="h-40 flex items-center">
        <Action />
      </div>
    </div>
  );
}
