import { adminArticles } from "@/data/admin/articles/articles";
import { ChevronRightIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import React from "react";

export default function ArticlesSection() {
  return (
    <div>
      <div className="pt-8 md:pt-0 pb-8 md:pb-24">
        {adminArticles.map((article) => (
          <Link key={article.id} href="/preview-article">
            <div className="flex flex-col lg:flex-row gap-16 w-full py-12">
              <div className="flex items-center justify-center w-full h-64 lg:h-32 lg:w-1/2 relative">
                <Image
                  src={article.image}
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
                    {article.description}
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
