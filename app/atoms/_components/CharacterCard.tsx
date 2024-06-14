/* eslint-disable @next/next/no-img-element */
"use client"
export type CharacterProps = {
  name: string;
  src: string;
};
export const CharacterCard = (props: CharacterProps) => {
  return (
    <div className="relative group cursor-pointer overflow-hidden w-full rounded-lg">
      <img
        className="h-full max-w-full transition duration-300 ease-in-out group-hover:scale-110 group-hover:grayscale object-cover"
        src={props.src}
        alt={props.name}
      />
      <div className="opacity-0 hover:opacity-100 duration-300 absolute inset-0 z-10 flex justify-center items-center text-2xl sm:text-3xl md:text-4xl text-white font-semibold">
        {props.name}
      </div>
      <div className="absolute bottom-0 left-0 right-0 top-0 h-full w-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 transition duration-300 ease-in-out group-hover:opacity-50 z-5"></div>
    </div>
  );
};
