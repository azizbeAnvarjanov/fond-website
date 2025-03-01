import { useTranslations } from "next-intl";
import LocalSwitcher from "./local-switcher";
import Image from "next/image";
import { Link } from "@/i18n/routing";

export default function Header() {
  const t = useTranslations("Header");

  return (
    <header className="border-b shadow-md fixed w-full h-[18vh] z-50">
      <div className="h-[45%] bg-[#013ca6] text-white px-3 flex items-center justify-end">
        <div className="flex items-center gap-10">
          <Link href="/">info@impulsmi.uz</Link>
          <Link href="tel:+998952480003">+998 95-248-00-03</Link>
          <LocalSwitcher />
        </div>
      </div>
      <div className="h-[55%] w-full bg-white flex items-center justify-between px-3">
        <Link href="/" className="w-[240px] h-[60px] relative">
          <Image fill src="/flogo2.svg" alt="" />
        </Link>
        <div className="flex items-center gap-6 justify-center h-full">
          <Link href="/fond-haqida" className="">
            {t("fond-haqida")}
          </Link>

          <Link href="/loyihalar" className="">
            {t("loyihalar")}
          </Link>
        </div>
        <div>
          <Link
            href="/donate"
            className="w-[240px] h-[60px] relative rounded-full bg-[#013ca6] text-white py-2 px-4"
          >
            {t("xayriya-qilmoqchiman")}
          </Link>
        </div>
      </div>
    </header>
  );
}
