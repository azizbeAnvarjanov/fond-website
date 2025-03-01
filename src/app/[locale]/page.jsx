import { useTranslations } from "next-intl";
import Hero from "@/app/(customComponents)/Hero";
import { CalendarFold } from "lucide-react";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Home() {
  const t = useTranslations("News");

  return (
    <div>
      <Hero />
      <div className="text-center grid place-items-center py-20">
        <div className="space-y-10">
          <h1 className="font-bold text-[3em] text-[#013ca6]">Fond haqida</h1>
          <strong>Maqsad va Vazifalar</strong>
          <p className="w-[50%] mx-auto ">
            Impuls jamoat fondining asosiy maqsadi – tibbiyot institutida taxsil
            olgan talabalarning bilim va konikmalarini oshirish, tibbiyot
            sohasida ilmiy tadqiqotlarni qollab-quvvatlash, ijtimoiy ximoyaga
            muhtoj oilalar, nogiron shaxslar, bokuvchisini yoqotgan, yetim va
            chin yetim talabalarga kontrakt tolovlarini taminlash, iqtidorli
            talabalar ortasida turli xil grantlar tashkil etish hamda xududiy va
            Respublika boskichlarida bilim saloxiyatini oshirish maqsadida
            tashkil etiladigan tanlov va tadbirlarda moddiy va manaviy
            qollab-quvvatlashdan iborat.
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
      <div className="py-10 bg-[#f2f5fa] grid place-content-center">
        <h1 className="font-bold text-[3em] text-center mb-4 text-[#013ca6]">
          Bizning loyihalarimiz
        </h1>
        <div className="w-[90%] mx-auto grid grid-cols-3 gap-4 p-5">
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              1. Ijtimoiy grantlar (16%)
            </h1>
            <p className="font-light">
              <strong>Maqsad: </strong> <br />
              Ijtimoiy ximoyaga muhtoj oilalardan, nogiron shaxslar,
              bokuvchisini yo‘qotgan, yetim va chin yetim, moddiy ahvoli og‘ir
              talabalarga.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              2. Akademik grantlar (50%)
            </h1>
            <p className="font-light">
              <strong>Maqsad: </strong> <br />
              100 ballik baholash tizimi asosida, akademik jihatdan eng yuqori
              natijaga erishgan talabalarga semestrlik kontrakt to‘lovlarini
              qoplash.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              3. Iqtidorli va xalqaro salohiyatli talabalar uchun grant va
              dasturlar (16%)
            </h1>
            <p className="font-light">
              <strong>Maqsad: </strong> <br />
              Iqtidorli talabalarning xalqaro imtihonlarda qatnashishi,
              sertifikat olishi va ilmiy tadqiqot, innovatsion loyihalarda
              ishtirok etishini qo‘llab-quvvatlash
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              4. Ilmiy faol va ijodiy talabalarni bir marta rag‘batlantirish
              (5%)
            </h1>
            <p className="font-light">
              <strong>Maqsad: </strong> <br />
              Ilmiy konferensiyalar, teacher assistant loyihalari, fan va sport
              olimpiadalarida sovrindor bo‘lgan, ilmiy tadqiqotlar va grant
              loyihalarida qatnashgan talabalarni bir marta mukofotlash.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              5. Qo‘shimcha stipendiya (5%)
            </h1>
            <p className="font-light">
              <strong>Maqsad: </strong> <br />
              Bir semestr davomida grant olisha olmagan, lekin umumiy
              o‘rtashtirish ko‘rsatkichlari yuqori bo‘lgan talabalarni
              qo‘shimcha rag‘batlantirish.
            </p>
          </div>
          <div className="border rounded-2xl p-6 bg-white shadow-lg hover:bg-muted cursor-pointer">
            <h1 className="text-[#013ca6] font-bold mb-3 text-2xl">
              6. Institut ilmiy va amaliy labaratoriyalari va konferensiyalarini
              moliyaviy kulab kuvvatlash, zamonaviy texnologiyalar bilan
              jixozlash uchun (8 %)
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-3 justify-center">
          <Link
            href="/loyihalar"
            className="shadow-sm border rounded-lg py-2 px-5 hover:bg-muted bg-white"
          >
            {" "}
            Batafsil
          </Link>
        </div>
      </div>

      {/* ---------------------------------- */}
      {/* <div className="w-full py-10">
        <div className="container mx-auto">
          <div className="flex flex-col gap-10">
              <h1 className="font-bold text-[3em] text-center mb-4 text-[#013ca6]">
                Bizning loyihalarimiz
              </h1>

            <div id="faq" className="max-w-3xl w-full mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {Array.from({ length: 8 }).map((_, index) => (
                  <AccordionItem key={index} value={"index-" + index}>
                    <AccordionTrigger>
                      This is the start of something new
                    </AccordionTrigger>
                    <AccordionContent>
                      Managing a small business today is already tough. Avoid
                      further complications by ditching outdated, tedious trade
                      methods. Our goal is to streamline SMB trade, making it
                      easier and faster than ever.
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </div>
      </div> */}
      {/* <div className="p-10">
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
      </div> */}
    </div>
  );
}
