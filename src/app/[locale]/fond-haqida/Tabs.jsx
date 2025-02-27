"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function Tabs() {
  const [activeTab, setActiveTab] = useState("home");
  return (
    <div className="py-6">
      <h1 className="mb-4 font-bold text-2xl">
        Tizimning Amalga Oshirilish Tartibi
      </h1>
      <div className="grid md:grid-cols-[280px_1fr] w-full mx-auto">
        <div className=" overflow-hidden">
          <nav className="flex flex-col gap-2">
            <Button
              variant={activeTab === "home" ? "default" : "ghost"}
              className={`justify-start gap-3 px-4 text-left w-full transition-colors shadow-none ${
                activeTab === "home" ? "secondary" : "ghost"
              }`}
              onClick={() => setActiveTab("home")}
            >
              1. Semestr Yakunida Baxolash:
            </Button>
            <Button
              variant={activeTab === "about" ? "default" : "ghost"}
              className="justify-start gap-3 px-4 text-left w-full transition-colors shadow-none"
              onClick={() => setActiveTab("about")}
            >
              2. Tanlov Komisiyalari:
            </Button>
            <Button
              variant={activeTab === "services" ? "default" : "ghost"}
              className="justify-start gap-3 px-4 text-left w-full transition-colors shadow-none"
              onClick={() => setActiveTab("services")}
            >
              3. Shaffoflik va Hisobot:
            </Button>
          </nav>
        </div>
        <div className="px-3">
          <div>
            {activeTab === "home" && (
              <div>
                <p className="">
                  Har bir semestr tugaganda, talabalarning 100 ballik baholari,
                  ijtimoiy faolligi, ilmiy tadqiqot natijalari va qo‘shimcha
                  tashabbuslari asosida kompleks reyting tuziladi.
                </p>
                <br />
                <p className="">
                  Tanlov komissiyalari belgilab qo‘yilgan kriteriylar asosida
                  har bir kategoriya bo‘yicha talabalarni baholaydi.
                </p>
              </div>
            )}
            {activeTab === "about" && (
              <div className="space-y-3">
                <p className="">
                  <strong>Ijtimoiy kategoriya:</strong> ijtimoiy ekspertlar,
                  psixologlar va tashkilot rahbarlari.
                </p>
                <p className="">
                  <strong>Akademik kategoriya:</strong> kafedra rahbarlari,
                  professorlar va soha mutaxassislari.
                </p>
                <p className="">
                  <strong>Iqtidorli talabalar va xalqaro dasturlar:</strong>
                  ichki va tashqi ekspertlar, xalqaro sertifikatlash va
                  ilmiy-tadqiqot sohasidagi mutaxassislar.
                </p>
                <p className="">
                  <strong>Ilmiy faollik va qo‘shimcha stipendiya:</strong> ilmiy
                  komissiya va ekspertlar.
                </p>
              </div>
            )}
            {activeTab === "services" && (
              <div className="space-y-3">
                <ul className="space-y-2 ">
                  <p>
                    Fonda sarflangan mablag‘lar, grant taqsimoti va tanlov
                    natijalari har semestr oxirida shaffof hisobot shaklida
                    e’lon qilinadi.
                  </p>
                  <p>
                    Barcha jarayonlar xalqaro standartlarga muvofiq ravishda
                    amalga oshiriladi.
                  </p>
                </ul>
              </div>
            )}
            {activeTab === "contact" && (
              <div>
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" placeholder="Enter your name" />
                  </div>
                  <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder="Enter your message"
                    />
                  </div>
                  <Button type="submit">Submit</Button>
                </form>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}


