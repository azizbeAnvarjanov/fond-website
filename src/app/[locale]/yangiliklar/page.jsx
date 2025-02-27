import { Link } from "@/i18n/routing";
import { CalendarFold } from "lucide-react";
import Image from "next/image";
import React from "react";

const Yangiliklar = () => {
  return (
    <div className="p-10">
      <div className="grid grid-cols-3 gap-5">
        <div className="border rounded-xl overflow-hidden">
          <div className="w-full h-[250px] bg-muted relative">
            <Image fill src="/images/1.jpg" alt="" className="object-cover" />
          </div>
          <div className="w-full space-y-3 p-5">
            <div className="flex items-center gap-2 mb-2 text-[#013ca6] font-bold">
              <CalendarFold color="#013ca6" />
              01.02.2025
            </div>
            <Link href="/yangiliklar/y-1" className="font-bold">
              Lorem ipsum dolor sit amet.
            </Link>
            <p className="line-clamp-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              recusandae tenetur voluptatibus optio nulla ratione quidem ea
              dolores soluta explicabo, laborum fuga animi aliquid, totam
              provident quibusdam. Tenetur, aspernatur velit.
            </p>
          </div>
        </div>
        <div className="border rounded-xl overflow-hidden">
          <div className="w-full h-[250px] bg-muted relative">
            <Image fill src="/images/1.jpg" alt="" className="object-cover" />
          </div>
          <div className="w-full space-y-3 p-5">
            <div className="flex items-center gap-2 mb-2 text-[#013ca6] font-bold">
              <CalendarFold color="#013ca6" />
              01.02.2025
            </div>
            <Link href="/yangiliklar/y-1" className="font-bold">
              Lorem ipsum dolor sit amet.
            </Link>
            <p className="line-clamp-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              recusandae tenetur voluptatibus optio nulla ratione quidem ea
              dolores soluta explicabo, laborum fuga animi aliquid, totam
              provident quibusdam. Tenetur, aspernatur velit.
            </p>
          </div>
        </div>
        <div className="border rounded-xl overflow-hidden">
          <div className="w-full h-[250px] bg-muted relative">
            <Image fill src="/images/1.jpg" alt="" className="object-cover" />
          </div>
          <div className="w-full space-y-3 p-5">
            <div className="flex items-center gap-2 mb-2 text-[#013ca6] font-bold">
              <CalendarFold color="#013ca6" />
              01.02.2025
            </div>
            <Link href="/yangiliklar/y-1" className="font-bold">
              Lorem ipsum dolor sit amet.
            </Link>
            <p className="line-clamp-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              recusandae tenetur voluptatibus optio nulla ratione quidem ea
              dolores soluta explicabo, laborum fuga animi aliquid, totam
              provident quibusdam. Tenetur, aspernatur velit.
            </p>
          </div>
        </div>
        <div className="border rounded-xl overflow-hidden">
          <div className="w-full h-[250px] bg-muted relative">
            <Image fill src="/images/1.jpg" alt="" className="object-cover" />
          </div>
          <div className="w-full space-y-3 p-5">
            <div className="flex items-center gap-2 mb-2 text-[#013ca6] font-bold">
              <CalendarFold color="#013ca6" />
              01.02.2025
            </div>
            <Link href="/yangiliklar/y-1" className="font-bold">
              Lorem ipsum dolor sit amet.
            </Link>
            <p className="line-clamp-4 font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              recusandae tenetur voluptatibus optio nulla ratione quidem ea
              dolores soluta explicabo, laborum fuga animi aliquid, totam
              provident quibusdam. Tenetur, aspernatur velit.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Yangiliklar;
