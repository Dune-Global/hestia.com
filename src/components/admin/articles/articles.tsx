"use client";
import { useState, useEffect } from "react";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { getAllArticles } from "@/helpers/api/admin/article/article";
import { IArticle } from "@/types/article";

interface ArticlesSectionProps {
  numArticles?: number;
}

export default function ArticlesSection({ numArticles }: ArticlesSectionProps) {
  const [articles, setArticles] = useState<IArticle[]>([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await getAllArticles();
        if (response.data.articles && response.data.articles.length > 0) {
          setArticles(response.data.articles as IArticle[]);
        } else {
          console.log("No articles found");
        }
      } catch (error) {
        console.error("Failed to fetch articles:", error);
      }
    };

    fetchArticles();
  }, []);

  const displayedArticles = numArticles
    ? articles.slice(0, numArticles)
    : articles;

  return (
    <div>
      <div className="pt-8 md:pt-0 pb-8 md:pb-24">
        {displayedArticles.map((article) => (
          <Link key={article._id?.toString()} href="/preview-article">
            <div className="flex flex-col lg:flex-row gap-16 w-full py-12">
              <div className="flex items-center justify-center min-w-52 w-full h-64 lg:h-32 lg:w-1/2 relative">
                <Image
                  src={article.coverImgUrl!}
                  alt="article"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-lg border border-gray-800"
                />
              </div>
              <div className="flex gap-8  items-center">
                <div className="flex flex-col gap-4 text-left">
                  <div className="font-semibold">{article.title}</div>
                  <div className="line-clamp-3 text-gray-500">
                    {article.content}
                  </div>
                </div>
                <div className="flex items-center justify-center">
                  <ChevronRightIcon size={24} />
                </div>
              </div>
            </div>
            <div className="h-[0.5px] w-full bg-gray-300"></div>
          </Link>
        ))}
      </div>
    </div>
  );
}
