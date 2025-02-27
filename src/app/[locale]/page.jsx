import { useTranslations } from "next-intl";
import Hero from "@/app/(customComponents)/Hero";
import { CalendarFold } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";

export default function Home() {
  const t = useTranslations("News");

  return (
    <div>
      <Hero />
      <div className="text-center grid place-items-center py-5">
        <div className="space-y-10">
          <h1 className="font-bold text-[3em] text-[#013ca6]">Fond haqida</h1>
          <p className="w-[50%] mx-auto">
            “EZGU AMAL” jamoat fondi O‘zbekiston Adliya vazirligi tomonidan
            rasman ro‘yxatdan o‘tgan saraton kasalligiga chalingan bolalarga
            xayriya yordami ko‘rsatuvchi birinchi jamoat fondidir.
          </p>
          <p className="w-[50%] mx-auto">
            Jamg‘armamiz O‘zbekiston Respublikasida dori vositalari, qon
            preparatlari, ekzo- va endoprotezlarni xarid qilish, shuningdek,
            diagnostika va davolash, shu jumladan, jarrohlik uchun to‘lovlarni
            amalga oshirishda yordam beradi.
          </p>
          <div className="flex items-center gap-3 justify-center">
            <Link
              href="/fond-haqida"
              className="shadow-sm border rounded-lg py-2 px-5 hover:bg-muted"
            >
              {" "}
              Fond haqida batafsil
            </Link>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className="py-5 bg-[#f2f5fa] grid place-content-center">
        <h1 className="font-bold text-[3em] text-center mb-4 text-[#013ca6]">
          Bizning dasturlarimiz
        </h1>
        <div className="w-[80%] mx-auto grid grid-cols-2 gap-4 p-5">
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              Bolani davolash uchun yordam
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              minima, aliquam natus molestias veniam eaque distinctio, delectus
              excepturi aliquid dicta ex inventore quasi nisi sequi voluptate.
              Odit dicta debitis voluptates. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores error nobis odit ratione hic
              velit expedita, molestiae possimus dolorum recusandae consectetur
              magni in quo quod architecto eligendi, sequi, modi beatae.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              Bolani davolash uchun yordam
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              minima, aliquam natus molestias veniam eaque distinctio, delectus
              excepturi aliquid dicta ex inventore quasi nisi sequi voluptate.
              Odit dicta debitis voluptates. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores error nobis odit ratione hic
              velit expedita, molestiae possimus dolorum recusandae consectetur
              magni in quo quod architecto eligendi, sequi, modi beatae.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              Bolani davolash uchun yordam
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              minima, aliquam natus molestias veniam eaque distinctio, delectus
              excepturi aliquid dicta ex inventore quasi nisi sequi voluptate.
              Odit dicta debitis voluptates. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores error nobis odit ratione hic
              velit expedita, molestiae possimus dolorum recusandae consectetur
              magni in quo quod architecto eligendi, sequi, modi beatae.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              Bolani davolash uchun yordam
            </h1>
            <p className="font-light">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
              minima, aliquam natus molestias veniam eaque distinctio, delectus
              excepturi aliquid dicta ex inventore quasi nisi sequi voluptate.
              Odit dicta debitis voluptates. Lorem ipsum, dolor sit amet
              consectetur adipisicing elit. Maiores error nobis odit ratione hic
              velit expedita, molestiae possimus dolorum recusandae consectetur
              magni in quo quod architecto eligendi, sequi, modi beatae.
            </p>
          </div>
        </div>
      </div>
      {/* ---------------------------------- */}
      <div className="p-10">
        <h1 className="font-bold text-center text-[3em] mb-4 text-[#013ca6]">
          Yangiliklar
        </h1>
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
              <Link href="/yangiliklar/y-2" className="font-bold">
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
              <Link href="/yangiliklar/y-3" className="font-bold">
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
        <div className="flex p-5">
          <Link
            href="/yangiliklar"
            className="text-white text-center mx-auto bg-[#013ca6] py-2 px-5 rounded-full"
          >
            Barcha yangiliklar
          </Link>
        </div>
      </div>
    </div>
  );
}
