import Image from "next/image";
import Link from "next/link";
import React from "react";

import Tabs from "@/app/[locale]/fond-haqida/Tabs";

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
            olgan talabalarning bilim va ko‘nikmalarini oshirish, tibbiyot
            sohasida ilmiy tadqiqotlarni qo‘llab-quvvatlash, ijtimoiy ximoyaga
            muhtoj oilalar, nogiron shaxslar, bokuvchisini yo‘qotgan, yetim va
            chin yetim talabalarga kontrakt to‘lovlarini ta’minlash, iqtidorli
            talabalar o‘rtasida turli xil grantlar tashkil etish hamda xududiy
            va Respublika boskichlarida bilim saloxiyatini oshirish maqsadida
            tashkil etiladigan tanlov va tadbirlarda moddiy va manaviy
            qo‘llab-quvvatlashdan iborat.
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
                4. Ilmiy faol va ijodiy talabalarni bir marta rag‘batlantirish
                (5%)
              </ol>
              <ol>5. Qo‘shimcha stipendiya (5%)</ol>
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
                O‘zbekistondagi birinchi jamoat fondi ko‘ngillilar tomonidan
                tashkil etilgan.
              </h1>
              <p>
                Jamg‘arma O‘zbekiston Respublikasi Adliya vazirligi tomonidan
                2018-yil 12-noyabrda davlat ro‘yxatidan o‘tkazilgan, guvohnoma
                No816
              </p>
              <br />
              <Link
                href=""
                className="bg-[#013ca6] text-white py-2 px-4 rounded-lg"
              >
                Faylni ko'rish
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
            Kam ta’minlangan oilalardan bo‘lgan, ijtimoiy va iqtisodiy jihatdan
            zaif talabalar ushbu nizomda ko‘zda tutilgan har bir kategoriyada
            ustuvorlik bilan baholanishi mumkin. Bu ustuvorlik ilmiy, xalqaro,
            ijtimoiy va qo‘shimcha stipendiya kabi grant kategoriyalarida tatbiq
            etiladi, ammo akademik semestrlik kontrakt to‘lovlarini qoplash
            bo‘yicha ajratilgan mablag‘ miqdori belgilab qo‘yilgan me’yorlar
            doirasida o‘zgarishga olib kelmaydi.
          </div>
          <br />
          <strong className="text-2xl">Xalqaro Standartlarga Muvofiqlik</strong>
          <div className="my-2">
            Ushbu nizom va taqsimot me’yorlari xalqaro ta’lim, ilmiy tadqiqot va
            grant taqdim etish standartlariga asoslangan.
          </div>
          <div className="my-2">
            Belgilangan kriteriylar va tanlov jarayonlari zamonaviy xalqaro
            tajribalar va me’yorlar asosida doimiy ravishda qayta ko‘rib
            chiqiladi va yangilanadi.
          </div>
        </div>
      </div>
    </div>
  );
};

export default FondHaqida;
