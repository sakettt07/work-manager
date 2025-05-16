import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen">
      <div className="flex h-full justify-center items-center">
        <div className=" text-center -mt-40 gap-9 flex flex-col">
          <h1 className="text-6xl">Welcome to </h1>
          <h1 className="text-8xl">Work Manager</h1>
        </div>
      </div>
    </div>
  );
}
