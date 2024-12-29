"use client";

import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/app/firebase";
import { useLocale } from "next-intl";
import Image from "next/image";
import { MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const LatestNews = ({ latestNewsTitle, viewAllNews }) => {
  const [latestNews, setLatestNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const locale = useLocale();

  useEffect(() => {
    const fetchLatestNews = async () => {
      try {
        // Firestore'dan yangiliklarni olish
        const newsCollection = collection(db, "news");
        const newsSnapshot = await getDocs(newsCollection);
        const newsList = newsSnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        // Yangiliklarni sanasi bo‘yicha tartiblash va 4 tasini olish
        const sortedNews = newsList
          .sort((a, b) => new Date(b.date) - new Date(a.date))
          .slice(0, 4);

        setLatestNews(sortedNews);
        setLoading(false);
      } catch (error) {
        console.error("Xatolik yuz berdi:", error);
        setLoading(false);
      }
    };

    fetchLatestNews();
  }, []);

  const getLocalizedField = (field) => `${field}_${locale}`; // Faol til bo‘yicha maydonni aniqlash

  if (loading) {
    return <p>Malumotlar yuklanmoqda...</p>;
  }

  return (
    <div className="w-full py-10 px-10">
      <div className="container mx-auto flex flex-col gap-14">
        <div className="flex w-full flex-col sm:flex-row sm:justify-between sm:items-center gap-8">
          <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
            {latestNewsTitle}
          </h4>
          <Link href={`/${locale}/all-news`}>
            <Button className="gap-4 bg-[--brand-blue]">
              {viewAllNews} <MoveRight className="w-4 h-4" />
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {latestNews.map((item) => (
            <Link
              key={item.id}
              href={`/${locale}/all-news/${item.id}`}
              className="flex flex-col gap-2 hover:opacity-75 cursor-pointer"
            >
              <div className="bg-muted rounded-md aspect-video relative mb-4 overflow-hidden">
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default LatestNews;
