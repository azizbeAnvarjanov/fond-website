import Image from "next/image";
import Link from "next/link";
import React from "react";

import Tabs from "@/app/[locale]/fond-haqida/Tabs";
import { File, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";

const FondHaqida = () => {
  return (
    <div>
      <div className="text-[2em] py-5 px-10 font-bold bg-[#013ba6] text-white">
        Fond haqida
      </div>
      <div className="py-10">
        <div className="w-[80%] mx-auto border-2 rounded-3xl p-10">
          <strong className="text-2xl">Maqsad va Vazifalar</strong>
          <div className="my-2">
            Impuls jamoat fondining asosiy maqsadi – tibbiyot institutida taxsil
            olgan talabalarning bilim va konikmalarini oshirish, tibbiyot
            sohasida ilmiy tadqiqotlarni qollab-quvvatlash, ijtimoiy ximoyaga
            muhtoj oilalar, nogiron shaxslar, bokuvchisini yoqotgan, yetim va
            chin yetim talabalarga kontrakt tolovlarini taminlash, iqtidorli
            talabalar ortasida turli xil grantlar tashkil etish hamda xududiy va
            Respublika boskichlarida bilim saloxiyatini oshirish maqsadida
            tashkil etiladigan tanlov va tadbirlarda moddiy va manaviy
            qollab-quvvatlashdan iborat.
          </div>
          <br />
          <strong className="text-2xl">Fond Mablaglarining Taqsimoti</strong>
          <div className="my-2">
            Fonda tushgan umumiy tushum xalqaro standartlarga muvofiq ravishda,
            quyidagi tartibda taqsimlanadi:
            <ul>
              <ol>1. Ijtimoiy grantlar (16%)</ol>
              <ol>2. Akademik grantlar (50%)</ol>
              <ol>
                3. Iqtidorli va xalqaro salohiyatli talabalar uchun grant va
                dasturlar (16%)
              </ol>
              <ol>
                4. Ilmiy faol va ijodiy talabalarni bir marta ragbatlantirish
                (5%)
              </ol>
              <ol>5. Qoshimcha stipendiya (5%)</ol>
              <ol>
                6. Institut ilmiy va amaliy labaratoriyalari va
                konferensiyalarini moliyaviy kulab kuvvatlash, zamonaviy
                texnologiyalar bilan jixozlash uchun (8 %)
              </ol>
            </ul>
          </div>

          <br />
          <div className="flex items-center gap-2 p-5 border-2 rounded-xl">
            <div className="w-[80%] space-y-6">
              <h1 className="font-bold text-xl">
                Ozbekistondagi birinchi jamoat fondi kongillilar tomonidan
                tashkil etilgan.
              </h1>
              <p>
                Jamgarma Ozbekiston Respublikasi Adliya vazirligi tomonidan
                2018-yil 12-noyabrda davlat royxatidan otkazilgan, guvohnoma
                No816
              </p>
              <br />
              <Link
                target="_blank"
                href="/Fond guvohnoma.pdf"
                className="bg-[#013ca6] text-white py-2 px-4 rounded-lg"
              >
                Faylni korish
              </Link>
            </div>
            <div className="w-[20%]">
              <div className="h-[200px] relative">
                <Image
                  fill
                  src="/licence.jpg"
                  className="object-contain"
                  alt=""
                />
              </div>
            </div>
          </div>
          <Tabs />
          <strong className="text-2xl">Ustuvorlik Qoidasi</strong>
          <div className="my-2">
            Kam taminlangan oilalardan bolgan, ijtimoiy va iqtisodiy jihatdan
            zaif talabalar ushbu nizomda kozda tutilgan har bir kategoriyada
            ustuvorlik bilan baholanishi mumkin. Bu ustuvorlik ilmiy, xalqaro,
            ijtimoiy va qoshimcha stipendiya kabi grant kategoriyalarida tatbiq
            etiladi, ammo akademik semestrlik kontrakt tolovlarini qoplash
            boyicha ajratilgan mablag miqdori belgilab qoyilgan meyorlar
            doirasida ozgarishga olib kelmaydi.
          </div>
          <br />
          <strong className="text-2xl">Xalqaro Standartlarga Muvofiqlik</strong>
          <div className="my-2">
            Ushbu nizom va taqsimot meyorlari xalqaro talim, ilmiy tadqiqot va
            grant taqdim etish standartlariga asoslangan.
          </div>
          <div className="my-2">
            Belgilangan kriteriylar va tanlov jarayonlari zamonaviy xalqaro
            tajribalar va meyorlar asosida doimiy ravishda qayta korib chiqiladi
            va yangilanadi.
          </div>
          <br />
          <div className="grid grid-cols-2 gap-4">
            <div className="border-2 p-5 space-y-5 rounded-xl">
              <div className="flex items-center gap-2">
                <File />
                "IMPULS" jamoat fondi vasiylik kengashining yig'ilish
                bayonnomasi
              </div>
              <Link
                className="bg-[#013ca6] text-white py-2 px-4 rounded-lg flex w-[150px]"
                href="/JAMOAT FONDI VASIYLIK KЕNGASHINING.pdf"
              >
                Faylni ko'rish
              </Link>
            </div>
            <div className="border-2 p-5 space-y-5 rounded-xl">
              <div className="flex items-center gap-2">
                <File />
                Impuls Fondi Ustavi
              </div>
              <Link
                className="bg-[#013ca6] text-white py-2 px-4 rounded-lg flex w-[150px]"
                href="/Impuls Fondi Ustavi.pdf"
              >
                Faylni ko'rish
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FondHaqida;
