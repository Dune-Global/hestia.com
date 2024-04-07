"use client";

import React from "react";
import PageHeader from "@/components/common/layout/PageHeader";
import { adminDashboard } from "@/data/admin/dashboard/dashboard";
import ArticlesSection from "@/components/admin/articles/articles";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function ApprovedPropertiesPage() {
  const router = useRouter();
  return (
    <>
      <PageHeader
        title="Dashboard"
        description="Welcome! Check below to see an overview"
      />
      <div className="pb-16 flex flex-col gap-8">
        <div className="p-8 bg-white border border-gray-400 w-full rounded-lg flex flex-col lg:flex-row gap-8">
          {adminDashboard.map((item) => (
            <div
              key={item.id}
              className="border border-gray-400 p-8 rounded-lg flex flex-col items-center gap-2 w-full lg:w-1/5"
            >
              <div className="text-lg font-semibold">{item.count}</div>
              <div>{item.title}</div>
            </div>
          ))}
        </div>
        <div className="flex flex-col items-center px-8 bg-white border border-gray-400 rounded-lg">
          <div>
            <div className="text-2xl font-bold text-left pt-8">Articles</div>
            <ArticlesSection numArticles={5} />
          </div>
          <Button
            variant="outlineGray"
            className="mb-16"
            onClick={() => {
              router.push("/admin/all-articles");
            }}
          >
            View all
          </Button>
        </div>
      </div>
    </>
  );
}
