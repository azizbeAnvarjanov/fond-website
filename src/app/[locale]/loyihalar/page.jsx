"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";

const Loyihalar = () => {
  const [activeTab, setActiveTab] = useState("1");

  return (
    <div className="py-10 px-20">
      <div className="py-6">
        <h1 className="mb-4 font-bold text-2xl">
          Tizimning Amalga Oshirilish Tartibi
        </h1>
        <div className="grid md:grid-cols-[420px_1fr] w-full mx-auto">
          <div className=" overflow-hidden">
            <nav className="flex flex-col">
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "1"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("1")}
              >
                1. Ijtimoiy grantlar (16%)
              </div>
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "2"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("2")}
              >
                2. Akademik grantlar (50%)
              </div>
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "3"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("3")}
              >
                3. Iqtidorli va xalqaro salohiyatli talabalar uchun grant va
                dasturlar (16%)
              </div>
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "4"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("4")}
              >
                4. Ilmiy faol va ijodiy talabalarni bir marta rag‘batlantirish
                (5%)
              </div>
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "5"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("5")}
              >
                5. Qo‘shimcha stipendiya (5%)
              </div>
              <div
                className={`justify-start gap-3 p-4 text-left w-full transition-colors shadow-none text-wrap cursor-pointer ${
                  activeTab === "6"
                    ? "bg-[#013ca6] text-white"
                    : "hover:bg-muted"
                }`}
                onClick={() => setActiveTab("6")}
              >
                6. Institut ilmiy va amaliy labaratoriyalari va
                konferensiyalarini moliyaviy kulab kuvvatlash, zamonaviy
                texnologiyalar bilan jixozlash uchun (8 %)
              </div>
            </nav>
          </div>
          <div className="px-3">
            <div>
              {activeTab === "1" && (
                <div>
                  <strong>Maqsad:</strong>
                  <p className="">
                    Ijtimoiy ximoyaga muhtoj oilalardan, nogiron shaxslar,
                    bokuvchisini yo‘qotgan, yetim va chin yetim, moddiy ahvoli
                    og‘ir talabalarga.
                  </p>
                  <br />
                  <strong>Kriteriylar:</strong>
                  <p className="pt-3">
                    Ijtimoiy vaziyatga oid rasmiy hujjatlar va ekspert bahosi
                    (ijtimoiy komissiya).
                  </p>
                  <p className="pt-3">
                    Talabaning oila tarkibi va iqtisodiy holati.
                  </p>
                  <p className="pt-3">
                    Akademik ko‘rsatkichlari ham talab darajasida bulishi
                  </p>
                </div>
              )}
              {activeTab === "2" && (
                <div>
                  <strong>Maqsad:</strong>
                  <p className="">
                    100 ballik baholash tizimi asosida, akademik jihatdan eng
                    yuqori natijaga erishgan talabalarga semestrlik kontrakt
                    to‘lovlarini qoplash.
                  </p>
                  <br />
                  <strong>Kriteriylar:</strong>
                  <p className="pt-3">
                    Talabalar reytingi eng yuqori 10% bilan chegaralanadi.
                  </p>
                  <p className="pt-3">
                    Semestr natijalari va akademik ko‘rsatkichlar asosida
                    baholash.
                  </p>
                  <p className="pt-3">
                    Jamoat ishlarida faol ishtirok etish (talaba klublari,
                    tadbirlar, tadqiqotlar).
                  </p>
                  <p className="pt-3">
                    Ilmiy yoki ijtimoiy loyihalarda qatnashish yoki mualliflik
                    qilish.
                  </p>
                  <div className="grid grid-cols-1 gap-2 my-5">
                    <div className="border rounded-lg p-5 text-sm">
                      <strong className="text-3xl">1. Full paket</strong>
                      <p>Kontrakt, Yotoqxona, Ovqatlanish, Yo‘l xarajatlari</p>
                      <br />
                      <strong>Shartlar:</strong>
                      <div className="space-y-3">
                        <div>
                          1. Akademik natijalar bo‘yicha TOP 1-2% ichida bo‘lish
                          (barcha fanlardan a’lo baholar 90% va undan yukori).
                        </div>
                        <div>
                          2. Jamoat ishlarida faol ishtirok etish (talaba
                          klublari, tadbirlar, tadqiqotlar).
                        </div>
                        <div>
                          3. Ilmiy yoki ijtimoiy loyihalarda qatnashish yoki
                          mualliflik qilish.
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-5 text-sm">
                      <strong className="text-3xl">2. Ikkinchi paket </strong>
                      <p>Kontrakt, Yotoqxona</p>
                      <br />
                      <strong>Shartlar:</strong>
                      <div className="space-y-3">
                        <div>
                          1. Akademik natijalar bo‘yicha TOP 3-5% ichida bo‘lish
                          (barcha fanlardan a’lo baholar 86% va undan yukori).
                        </div>
                        <div>
                          2. Jamoat ishlariga jalb qilingan bo‘lishi lozim.
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-5 text-sm">
                      <strong className="text-3xl">3. Uchinchi paket</strong>
                      <p>Kontrakt, Ovqatlanish, Yo‘l xarajatlari</p>
                      <br />
                      <strong>Shartlar:</strong>
                      <div className="space-y-3">
                        <div>
                          1. Akademik natijalar bo‘yicha TOP 6-7% ichida bo‘lish
                          (barcha fanlardan yaxshi baholar 80-85% oraligida).
                        </div>
                        <div>
                          2. Ijtimoiy loyihalarda ishtirok etish va ijtimoiy
                          mas’uliyatni his qilish.{" "}
                          <strong>Paket miqdori:</strong> Bitta kurs uchun 5-7
                          nafar talaba
                        </div>
                      </div>
                    </div>
                    <div className="border rounded-lg p-5 text-sm">
                      <strong className="text-3xl">4. To‘rtinchi paket</strong>
                      <p>Kontrakt</p>
                      <br />
                      <strong>Shartlar:</strong>
                      <div className="space-y-3">
                        <div>
                          1. Akademik natijalar bo‘yicha TOP 8-10% ichida
                          bo‘lish.
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              {activeTab === "3" && (
                <div>
                  <strong>Maqsad:</strong>
                  <p className="pb-3">
                    Iqtidorli talabalarning xalqaro imtihonlarda qatnashishi,
                    sertifikat olishi va ilmiy tadqiqot, innovatsion loyihalarda
                    ishtirok etishini qo‘llab-quvvatlash
                  </p>
                  <p className="pb-3">
                    Xududiy va Respublika boskichlarida o‘tkaziladigan tanlov va
                    tadbirlarda qatnashish uchun moddiy yordam ko‘rsatish.
                  </p>
                  <br />
                  <strong>Kriteriylar:</strong>
                  <p className="pt-3">
                    Xalqaro va milliy me’yorlar asosida baholash (sertifikatlar,
                    ishtirok dalillari).
                  </p>
                  <p className="pt-3">
                    Talabaning ilmiy va ijodiy faolligi, tajriba va
                    tashabbuskorligi.
                  </p>
                </div>
              )}
              {activeTab === "4" && (
                <div>
                  <strong>Maqsad:</strong>
                  <p className="pb-3">
                    Ilmiy konferensiyalar, teacher assistant loyihalari, fan va
                    sport olimpiadalarida sovrindor bo‘lgan, ilmiy tadqiqotlar
                    va grant loyihalarida qatnashgan talabalarni bir marta
                    mukofotlash.
                  </p>

                  <br />
                  <strong>Kriteriylar:</strong>
                  <p className="pt-3">
                    Ilmiy va ijodiy faollik ko‘rsatkichlari, ekspert komissiya
                    tavsiyasi.
                  </p>
                </div>
              )}
              {activeTab === "5" && (
                <div>
                  <strong>Maqsad:</strong>
                  <p className="pb-3">
                    Bir semestr davomida grant olisha olmagan, lekin umumiy
                    o‘rtashtirish ko‘rsatkichlari yuqori bo‘lgan talabalarni
                    qo‘shimcha rag‘batlantirish.
                  </p>

                  <br />
                  <strong>Kriteriylar:</strong>
                  <p className="pt-3">
                    Semestr yakunlanganidan so‘ng umumiy baholash natijalari
                    asosida.
                  </p>
                  <p className="pt-3">
                    Akademik va ijtimoiy faollik ko‘rsatkichlari yuqori bo‘lgan,
                    lekin yuqori grant kategoriyasida bo‘lmagan talabalar.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loyihalar;
