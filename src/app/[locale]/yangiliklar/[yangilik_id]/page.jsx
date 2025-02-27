"use client";
import { CalendarFold } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const YangilikDetails = () => {
  const params = useParams();
  const yangilik_id = params.yangilik_id;
  return (
    <div>
      <div className="text-[2em] py-5 px-10 font-bold bg-[#013ba6] text-white">
        {yangilik_id}
      </div>
      <div className="py-10">
        <div className="w-[80%] mx-auto border-2 rounded-3xl p-10">
          <div className="w-full h-[700px] border relative">
            <Image fill src="/images/1.jpg" alt="" />
          </div>
          <div className="flex items-center justify-between py-4">
            <strong>“EZGU AMAL” jamoat fondi </strong>
            <div className="flex items-center gap-2">
              <CalendarFold color="#013ca6" />
              01.02.2025
            </div>
          </div>
          <div>
            O‘zbekistondagi birinchi xayriya jamg‘armasi bo‘lib, Adliya
            vazirligi tomonidan rasman ro‘yxatga olingan bo‘lib, saraton
            kasalligiga chalingan bolalarga yordam ko‘rsatadi. Biz O‘zbekiston
            Respublikasida dori vositalari, qon preparatlari, ekzo va
            endoprotezlarni xarid qilishda, shuningdek, diagnostika, davolash va
            jarrohlik operatsiyalari uchun haq to‘lashda yordam beramiz.
          </div>
        </div>
      </div>
    </div>
  );
};

export default YangilikDetails;
