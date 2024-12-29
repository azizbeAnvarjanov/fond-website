"use client";
import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

function AllNews() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMonth, setSelectedMonth] = useState("");
  const [selectedYear, setSelectedYear] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(8); // Har bir sahifadagi elementlar soni
  const locale = useLocale();

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const sortedNews = newsList.sort(
          (a, b) => new Date(b.date) - new Date(a.date)
        );

        setNews(sortedNews);
        setFilteredNews(sortedNews);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  if (loading) {
    return <p>Malumotlar yuklanmoqda...</p>;
  }

  const getLocalizedField = (field) => `${field}_${locale}`;

  // Filtrlash funksiyasi
  const handleFilter = () => {
    const filtered = news.filter((item) => {
      const itemDate = new Date(item.date);
      const monthMatch = selectedMonth
        ? itemDate.getMonth() + 1 === parseInt(selectedMonth)
        : true;
      const yearMatch = selectedYear
        ? itemDate.getFullYear() === parseInt(selectedYear)
        : true;
      return monthMatch && yearMatch;
    });
    setFilteredNews(filtered);
    setCurrentPage(1);
  };

  // Filtrni tozalash
  const resetFilter = () => {
    setSelectedMonth("");
    setSelectedYear("");
    setFilteredNews(news);
  };

  // Pagination
  const lastIndex = currentPage * itemsPerPage;
  const firstIndex = lastIndex - itemsPerPage;
  const currentNews = filteredNews.slice(firstIndex, lastIndex);

  const totalPages = Math.ceil(filteredNews.length / itemsPerPage);

  return (
    <div className="w-full lg:py-10 px-10">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            {locale === "uz" ? (
              <>Songi yangiliklar</>
            ) : locale === "ru" ? (
              <>Недавние новости</>
            ) : locale === "en" ? (
              <>Latest news</>
            ) : (
              <></>
            )}
          </h4>
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <Select onValueChange={setSelectedMonth} value={selectedMonth}>
              <SelectTrigger className="">
                <SelectValue placeholder="Oy tanlang" />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 12 }, (_, i) => (
                  <SelectItem key={i + 1} value={(i + 1).toString()}>
                    {new Date(0, i).toLocaleString(locale, { month: "long" })}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Select onValueChange={setSelectedYear} value={selectedYear}>
              <SelectTrigger>
                <SelectValue
                  placeholder={
                    locale === "uz" ? (
                      <>Yilni tanlang</>
                    ) : locale === "ru" ? (
                      <>Выбирите год</>
                    ) : locale === "en" ? (
                      <>Select year</>
                    ) : (
                      <></>
                    )
                  }
                />
              </SelectTrigger>
              <SelectContent>
                {Array.from({ length: 9 }, (_, i) => (
                  <SelectItem key={2022 + i} value={(2022 + i).toString()}>
                    {2022 + i}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button onClick={handleFilter}>Filtrlash</Button>
            {selectedMonth || selectedYear ? (
              <Button variant="destructive" onClick={resetFilter}>
                Filtrni tozalash
              </Button>
            ) : null}
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentNews.length === 0 ? (
            <>Hozircha yangiliklar yoq</>
          ) : (
            currentNews.map((item) => (
              <Link
                key={item.id}
                href={`/${locale}/all-news/${item.id}`}
                className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
              >
                <div className="bg-muted rounded-md aspect-video relative overflow-hidden">
                  <Image
                    fill
                    src={item.bannerImage}
                    alt={item[getLocalizedField("title")]}
                    className="object-cover"
                  />
                </div>
                <p className="text-sm text-muted-foreground">{item.date}</p>
                <h3 className="news-description text-xl tracking-tight">
                  {item[getLocalizedField("title")]}
                </h3>
                <p className="news-description text-muted-foreground text-base">
                  {item[getLocalizedField("description")]}
                </p>
              </Link>
            ))
          )}
        </div>
        <div className="flex justify-center items-center gap-4">
          <Button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft />
          </Button>
          <span>
            {currentPage}/{totalPages}
          </span>
          <Button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default AllNews;
