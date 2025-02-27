import { Separator } from "@/components/ui/separator";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

const Footer = () => {
  const t = useTranslations("Navbar");

  return (
    <div className="bg-[#f2f5fa]">
      <div className="h-[50%] flex items-start py-20 justify-between w-[80%] mx-auto">
        <div>
          <div className="w-[240px] h-[60px] relative">
            <Link href="/">
              <Image fill src="/flogo2.svg" alt="" />
            </Link>
          </div>
          <br />
          <h1>Lorem ipsum dolor sit amet consectetur, adipisdddicing elit.</h1>
        </div>
        <div className="flex gap-10 text-[#013ca6] font-light">
          <div className="flex flex-col gap-2">
            <Link href={"/"}>Ko'p beriladigan savollar</Link>
            <Link href={"/"}>Jamg'arma aloqalari</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={"/"}>Fond haqida</Link>
            <Link href={"/"}>Yangiliklar</Link>
            <Link href={"/"}>Loyihalar</Link>
          </div>
          <div className="flex flex-col gap-2">
            <Link href={"/"}>info@impulsmi.uz</Link>
            <Link href={"/"}>+998 50-510-50-15</Link>
          </div>
        </div>
      </div>
        <Separator className="h-[2px] w-[80%] mx-auto bg-[#013ca6] rounded-full" />
        <div className="w-[80%] mx-auto flex items-center justify-between py-3">
          <div>@ 2023 ByteSpace. All rights reserved.</div>
          <div>Cookies Settings</div>
        </div>
    </div>
  );
};

export default Footer;
