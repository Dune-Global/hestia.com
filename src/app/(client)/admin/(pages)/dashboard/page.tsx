"use client";
import React, { useEffect, useState } from "react";
import PageHeader from "@/components/common/layout/PageHeader";
import ArticlesSection from "@/components/admin/articles/articles";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { getDashboardData } from "@/helpers/api/admin/dashboard/dashboard";

type DashboardItem = {
  id: number;
  title: string;
  count: number;
};

export default function ApprovedPropertiesPage() {
  const router = useRouter();
  const [adminDashboard, setAdminDashboard] = useState<DashboardItem[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await getDashboardData();
      if (response && response.data) {
        setAdminDashboard([
          { id: 1, title: "Students", count: response.data.students },
          { id: 2, title: "Landlords", count: response.data.landlords },
          { id: 3, title: "Wardens", count: response.data.wardens },
          { id: 4, title: "Properties", count: response.data.properties },
          {
            id: 5,
            title: "Active tenants",
            count: response.data.active_tenants,
          },
        ]);
      }
    };

    fetchData();
  }, []);

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
