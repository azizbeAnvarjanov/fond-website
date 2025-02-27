import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("Navbar");

  return (
    <header className="border-b shadow-md fixed w-full h-[18vh] z-50">
      <div className="h-[45%] bg-[#013ca6] text-white px-3 flex items-center justify-between">
        <div className="flex items-center gap-10">
          <Link
            href={`/fond-haqida`}
            className="lg:flex md:hidden items-center hidden"
          >
            Ko'p beriladigan savollar
          </Link>
          <Link
            href={`/fond-haqida`}
            className="lg:flex md:hidden items-center hidden"
          >
            Jamg'arma aloqalari
          </Link>
        </div>
        <div className="flex items-center gap-10">
          <Link href="/">info@impulsmi.uz</Link>
          <Link href="/">+998 50-510-50-15</Link>
          <LocalSwitcher />
        </div>
      </div>
      <div className="h-[55%] w-full bg-white flex items-center justify-between px-3">
        <Link href="/" className="w-[240px] h-[60px] relative">
          <Image fill src="/flogo2.svg" alt="" />
        </Link>
        <div className="flex items-center gap-6 justify-center h-full">
          <Link href="/fond-haqida" className="">
            Fond haqida
          </Link>
          <Link href="/yangiliklar" className="">
            Yangiliklar
          </Link>
          <Link href="/loyihalar" className="">
            Loyihalar
          </Link>
        </div>
        <div>
          <Link
            href="/donate"
            className="w-[240px] h-[60px] relative rounded-full bg-[#013ca6] text-white py-2 px-4"
          >
            Xayriya qilmoqchiman
          </Link>
        </div>
      </div>
    </header>
  );
}
