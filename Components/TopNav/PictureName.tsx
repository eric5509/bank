import React from "react";

export default function PictureName() {
  return (
    <div className="flex items-center gap-3">
      <div className="h-12 w-12 rounded-full relative shadow-md ">
        <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-young-man-260nw-2437772333.jpg" className="absolute object-cover top-0 w-full h-full rounded-full left-0" alt="" />
      </div>
      <div className="">
        <p className="font-semibold text-15">Jannick Sinner P.</p>
      </div>
    </div>
  );
}
