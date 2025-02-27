import Link from "next/link";

const image = "/images/3.jpg";

const Hero = () => {
  return (
    <div className="hero relative h-screen w-full overflow-hidden flex items-center justify-center text-white">
      <div className="absolute flex flex-col items-center justify-center text-center p-6">
        <h1 className="text-5xl mb-4 bg-white py-10 px-20 text-[#013ca6] rounded-[1em]">Impuls ta'lim fondi</h1>
        <Link href="/" className="max-w-2xl bg-[#013ca6] text-2xl py-3 px-8 rounded-full">
          Batafsil
        </Link>
      </div>
    </div>
  );
};

export default Hero;
